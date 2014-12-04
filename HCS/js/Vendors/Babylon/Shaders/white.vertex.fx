#ifdef GL_ES
precision mediump float;
#endif

// Attributes
attribute vec3 position;
attribute vec3 normal;

// Uniforms
uniform mat4 world;
uniform mat4 viewProjection;

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