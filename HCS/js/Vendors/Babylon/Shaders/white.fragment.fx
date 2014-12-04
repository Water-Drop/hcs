#ifdef GL_ES
precision mediump float;
#endif

// Constants
uniform vec3 vEyePosition;

#ifdef WHITE
const vec4 vSpecularColor = vec4(0.2, 0.2, 0.2, 10);
const vec3 ambientColor = vec3(0.15, 0.15, 0.15);
#endif

#ifdef PLASTIC
const vec4 vSpecularColor = vec4(0.5, 0.5, 0.5, 5000);
const vec3 ambientColor = vec3(0, 0, 0);
#endif

uniform vec4 vDiffuseColor;

// Input
varying vec3 vPositionW;
varying vec3 vNormalW;

// Lights
#ifdef LIGHT0
uniform vec4 vLightData0;
uniform vec4 vLightDiffuse0;
uniform vec3 vLightSpecular0;
#ifdef SHADOW0
varying vec4 vPositionFromLight0;
uniform sampler2D shadowSampler0;
uniform float darkness0;
#endif
#ifdef SPOTLIGHT0
uniform vec4 vLightDirection0;
#endif
#ifdef HEMILIGHT0
uniform vec3 vLightGround0;
#endif
#endif

#ifdef LIGHT1
uniform vec4 vLightData1;
uniform vec4 vLightDiffuse1;
uniform vec3 vLightSpecular1;
#ifdef SHADOW1
varying vec4 vPositionFromLight1;
uniform sampler2D shadowSampler1;
uniform float darkness1;
#endif
#ifdef SPOTLIGHT1
uniform vec4 vLightDirection1;
#endif
#ifdef HEMILIGHT1
uniform vec3 vLightGround1;
#endif
#endif

#ifdef LIGHT2
uniform vec4 vLightData2;
uniform vec4 vLightDiffuse2;
uniform vec3 vLightSpecular2;
#ifdef SHADOW2
varying vec4 vPositionFromLight2;
uniform sampler2D shadowSampler2;
uniform float darkness2;
#endif
#ifdef SPOTLIGHT2
uniform vec4 vLightDirection2;
#endif
#ifdef HEMILIGHT2
uniform vec3 vLightGround2;
#endif
#endif

#ifdef LIGHT3
uniform vec4 vLightData3;
uniform vec4 vLightDiffuse3;
uniform vec3 vLightSpecular3;
#ifdef SHADOW3
varying vec4 vPositionFromLight3;
uniform sampler2D shadowSampler3;
uniform float darkness3;
#endif
#ifdef SPOTLIGHT3
uniform vec4 vLightDirection3;
#endif
#ifdef HEMILIGHT3
uniform vec3 vLightGround3;
#endif
#endif

// Shadows
#ifdef SHADOWS

float unpack(vec4 color)
{
	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);
	return dot(color, bitShift);
}

float unpackHalf(vec2 color)
{
	return color.x + (color.y / 255.0);
}

float computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler, float darkness)
{
	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);

	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)
	{
		return 1.0;
	}

	float shadow = unpack(texture2D(shadowSampler, uv));

	if (depth.z > shadow)
	{
		return darkness;
	}
	return 1.;
}

float computeShadowWithPCF(vec4 vPositionFromLight, sampler2D shadowSampler)
{
	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);

	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)
	{
		return 1.0;
	}

	float visibility = 1.;

    vec2 poissonDisk[4];
	poissonDisk[0] = vec2( -0.94201624, -0.39906216 );
	poissonDisk[1] = vec2( 0.94558609, -0.76890725 );
	poissonDisk[2] = vec2( -0.094184101, -0.92938870 );
	poissonDisk[3] = vec2( 0.34495938, 0.29387760 );

	// Poisson Sampling
	if (unpack(texture2D(shadowSampler, uv + poissonDisk[0] / 1500.0))  <  depth.z) visibility -= 0.1;
	if (unpack(texture2D(shadowSampler, uv + poissonDisk[1] / 1500.0))  <  depth.z) visibility -= 0.1;
	if (unpack(texture2D(shadowSampler, uv + poissonDisk[2] / 1500.0))  <  depth.z) visibility -= 0.1;
	if (unpack(texture2D(shadowSampler, uv + poissonDisk[3] / 1500.0))  <  depth.z) visibility -= 0.1;

	return visibility;
}

// Thanks to http://devmaster.net/
float ChebychevInequality(vec2 moments, float t)
{
	if (t <= moments.x)
	{
		return 1.0;
	}

	float variance = moments.y - (moments.x * moments.x);
	variance = max(variance, 0.);

	float d = t - moments.x;
	return variance / (variance + d * d);
}

float computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler)
{
	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;
	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);

	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)
	{
		return 1.0;
	}

	vec4 texel = texture2D(shadowSampler, uv);

	vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));
	return clamp(1.3 - ChebychevInequality(moments, depth.z), 0., 1.0);
}
#endif

// Light Computing
struct lightingInfo
{
	vec3 diffuse;
	vec3 specular;
};

lightingInfo computeLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, float range) {
	lightingInfo result;

	vec3 lightVectorW;
	float attenuation = 1.0;
	if (lightData.w == 0.)
	{
		vec3 direction = lightData.xyz - vPositionW;

		attenuation =  max(0., 1.0 - length(direction) / range);
		lightVectorW = normalize(direction);
	}
	else
	{
		lightVectorW = normalize(-lightData.xyz);
	}

	// diffuse
	float ndl = max(0., dot(vNormal, lightVectorW));

	// Specular
	vec3 angleW = normalize(viewDirectionW + lightVectorW);
	float specComp = max(0., dot(vNormal, angleW));
	specComp = pow(specComp, max(1., vSpecularColor.a));
	if (specComp > 1.)
		specComp = .2;

	result.diffuse = ndl * diffuseColor * attenuation;
	result.specular = specComp * specularColor * attenuation;

	return result;
}

lightingInfo computeSpotLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 lightDirection, vec3 diffuseColor, vec3 specularColor, float range) {
	lightingInfo result;

	vec3 direction = lightData.xyz - vPositionW;
	vec3 lightVectorW = normalize(direction);
	float attenuation = max(0., 1.0 - length(direction) / range);

	// diffuse
	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));
	float spotAtten = 0.0;

	if (cosAngle >= lightDirection.w)
	{
		cosAngle = max(0., pow(cosAngle, lightData.w));
		spotAtten = max(0., (cosAngle - lightDirection.w) / (1. - cosAngle));

		// Diffuse
		float ndl = max(0., dot(vNormal, -lightDirection.xyz));

		// Specular
		vec3 angleW = normalize(viewDirectionW - lightDirection.xyz);
		float specComp = max(0., dot(vNormal, angleW));
		specComp = pow(specComp, vSpecularColor.a);

		result.diffuse = ndl * spotAtten * diffuseColor * attenuation;
		result.specular = specComp * specularColor * spotAtten * attenuation;

		return result;
	}

	result.diffuse = vec3(0.);
	result.specular = vec3(0.);

	return result;
}

lightingInfo computeHemisphericLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, vec3 groundColor) {
	lightingInfo result;

	// Diffuse
	float ndl = dot(vNormal, lightData.xyz) * 0.5 + 0.5;

	// Specular
	vec3 angleW = normalize(viewDirectionW + lightData.xyz);
	float specComp = max(0., dot(vNormal, angleW));
	specComp = pow(specComp, vSpecularColor.a);

	result.diffuse = mix(groundColor, diffuseColor, ndl);
	result.specular = specComp * specularColor;

	return result;
}

void main(void) {

	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);

	// Base color
	vec3 diffuseColor = vDiffuseColor.rgb;

	// Bump
	vec3 normalW = vNormalW;

	// Ambient color
	vec3 baseAmbientColor = vec3(1., 1., 1.);

	// Lighting
	vec3 diffuseBase = vec3(0., 0., 0.);
	vec3 specularBase = vec3(0., 0., 0.);
	float shadow = 1.;

#ifdef LIGHT0
#ifdef SPOTLIGHT0
	lightingInfo info = computeSpotLighting(viewDirectionW, normalW, vLightData0, vLightDirection0, vLightDiffuse0.rgb, vLightSpecular0);
#endif
#ifdef HEMILIGHT0
	lightingInfo info = computeHemisphericLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0.rgb, vLightSpecular0, vLightGround0);
#endif
#ifdef POINTDIRLIGHT0
	lightingInfo info = computeLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0.rgb, vLightSpecular0, vLightDiffuse0.a);
#endif
#ifdef SHADOW0
#ifdef SHADOWVSM0
	shadow = computeShadowWithVSM(vPositionFromLight0, shadowSampler0);
#else
#ifdef SHADOWPCF0
	shadow = computeShadowWithPCF(vPositionFromLight0, shadowSampler0);
#else
	shadow = computeShadow(vPositionFromLight0, shadowSampler0, darkness0);
#endif
#endif
#else
	shadow = 1.;
#endif
	diffuseBase += info.diffuse * shadow;
	specularBase += info.specular * shadow;
#endif

#ifdef LIGHT1
#ifdef SPOTLIGHT1
	info = computeSpotLighting(viewDirectionW, normalW, vLightData1, vLightDirection1, vLightDiffuse1.rgb, vLightSpecular1);
#endif
#ifdef HEMILIGHT1
	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1.rgb, vLightSpecular1, vLightGround1);
#endif
#ifdef POINTDIRLIGHT1
	info = computeLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1.rgb, vLightSpecular1, vLightDiffuse1.a);
#endif
#ifdef SHADOW1
#ifdef SHADOWVSM1
	shadow = computeShadowWithVSM(vPositionFromLight1, shadowSampler1);
#else
#ifdef SHADOWPCF1
	shadow = computeShadowWithPCF(vPositionFromLight1, shadowSampler1);
#else
	shadow = computeShadow(vPositionFromLight1, shadowSampler1, darkness1);
#endif
#endif
#else
	shadow = 1.;
#endif
	diffuseBase += info.diffuse * shadow;
	specularBase += info.specular * shadow;
#endif

#ifdef LIGHT2
#ifdef SPOTLIGHT2
	info = computeSpotLighting(viewDirectionW, normalW, vLightData2, vLightDirection2, vLightDiffuse2.rgb, vLightSpecular2);
#endif
#ifdef HEMILIGHT2
	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2.rgb, vLightSpecular2, vLightGround2);
#endif
#ifdef POINTDIRLIGHT2
	info = computeLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2.rgb, vLightSpecular2, vLightDiffuse2.a);
#endif
#ifdef SHADOW2
#ifdef SHADOWVSM2
	shadow = computeShadowWithVSM(vPositionFromLight2, shadowSampler2);
#else
#ifdef SHADOWPCF2
	shadow = computeShadowWithPCF(vPositionFromLight2, shadowSampler2);
#else
	shadow = computeShadow(vPositionFromLight2, shadowSampler2, darkness2);
#endif	
#endif	
#else
	shadow = 1.;
#endif
	diffuseBase += info.diffuse * shadow;
	specularBase += info.specular * shadow;
#endif

#ifdef LIGHT3
#ifdef SPOTLIGHT3
	info = computeSpotLighting(viewDirectionW, normalW, vLightData3, vLightDirection3, vLightDiffuse3.rgb, vLightSpecular3);
#endif
#ifdef HEMILIGHT3
	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3.rgb, vLightSpecular3, vLightGround3);
#endif
#ifdef POINTDIRLIGHT3
	info = computeLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3.rgb, vLightSpecular3, vLightDiffuse3.a);
#endif
#ifdef SHADOW3
#ifdef SHADOWVSM3
	shadow = computeShadowWithVSM(vPositionFromLight3, shadowSampler3);
#else
#ifdef SHADOWPCF3
	shadow = computeShadowWithPCF(vPositionFromLight3, shadowSampler3);
#else
	shadow = computeShadow(vPositionFromLight3, shadowSampler3, darkness3);
#endif
#endif	
#else
	shadow = 1.;
#endif
	diffuseBase += info.diffuse * shadow;
	specularBase += info.specular * shadow;
#endif

	// Specular
	vec3 specularColor = vSpecularColor.rgb;

	// Alpha
	float alpha = vDiffuseColor.a;

	// Composition
	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor, 0.0, 1.0);
	vec3 finalSpecular = specularBase * specularColor;

	vec4 color = vec4(finalDiffuse + finalSpecular + diffuseColor*0.65 + ambientColor, alpha);
	gl_FragColor = color;
}