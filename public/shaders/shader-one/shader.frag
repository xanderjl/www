precision mediump float;
varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;
  gl_FragColor = vec4(uv, 0.5, 1.0);
}