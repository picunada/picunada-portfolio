export const gaissianNoiseShader = {
  vertexShader: `
  varying vec2 fragmentCoordinates;
  uniform vec2 iResolution;

  #define NOISE_STRENGTH 0.08

  // Gaussian Noise Effect
  float gaussian(float z, float u, float o) {
      return (1.0 / (o * sqrt(4.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
  }

  // Apply Noise
  vec2 ps = vec2(1.0) / iResolution.xy;
  vec2 uv = fragmentCoordinates * ps;
  float seed = dot(uv * vec2(1000.), vec2(12, 52));
  float noise = fract(sin(seed) * 43758.5453 + t);
  noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
  vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
  gl_FragColor.rgb -= grain * NOISE_STRENGTH;
  `,
}
