#ifdef GL_ES
precision mediump float;
#endif

// Attributes
attribute vec3 position;
attribute vec3 normal;

#ifdef UV1
attribute vec2 uv;
#endif

// Uniforms
uniform mat4 world;
uniform mat4 viewProjection;

#ifdef DIFFUSE
varying vec2 vDiffuseUV;
uniform mat4 diffuseMatrix;
uniform vec2 vDiffuseInfos;
#endif

#ifdef BUMP
varying vec2 vBumpUV;
uniform vec2 vBumpInfos;
uniform mat4 bumpMatrix;
#endif

#ifdef REFLECTION
varying vec3 vPositionUVW;
#endif

// Output
varying vec3 vPositionW;
varying vec3 vNormalW;

#ifdef SHADOWS
#ifdef LIGHT0
uniform mat4 lightMatrix0;
varying vec4 vPositionFromLight0;
#endif
#ifdef LIGHT1
uniform mat4 lightMatrix1;
varying vec4 vPositionFromLight1;
#endif
#ifdef LIGHT2
uniform mat4 lightMatrix2;
varying vec4 vPositionFromLight2;
#endif
#ifdef LIGHT3
uniform mat4 lightMatrix3;
varying vec4 vPositionFromLight3;
#endif
#endif

void main(void) {
	gl_Position = viewProjection * world * vec4(position, 1.0);

	vec4 worldPos = world * vec4(position, 1.0);
	vPositionW = vec3(worldPos);
	vNormalW = normalize(vec3(world * vec4(normal, 0.0)));

	// Texture coordinates
#ifndef UV1
	vec2 uv = vec2(0., 0.);
#endif

#ifdef DIFFUSE
		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));
#endif

#ifdef BUMP
		vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));
#endif

#ifdef REFLECTION
	vPositionUVW = position;
#endif 

	// Shadows
#ifdef SHADOWS
#ifdef LIGHT0
	vPositionFromLight0 = lightMatrix0 * vec4(position, 1.0);
#endif
#ifdef LIGHT1
	vPositionFromLight1 = lightMatrix1 * vec4(position, 1.0);
#endif
#ifdef LIGHT2
	vPositionFromLight2 = lightMatrix2 * vec4(position, 1.0);
#endif
#ifdef LIGHT3
	vPositionFromLight3 = lightMatrix3 * vec4(position, 1.0);
#endif
#endif
}