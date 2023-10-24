precision mediump float;
uniform float time;
varying vec2 vTexCoord;

float dot2(vec2 v) { return dot(v, v); }

// vec4 smin(in vec4 a, in vec4 b, in float k) {
//   float h = max(k - abs(a.x - b.x), 0.0);
//   float m = 0.25 * h * h / k;
//   float n = 0.50 * h / k;
//   return vec3(min(a.x, b.x) - m, mix(a.yzw, b.yzw, (a.x < b.x) ? n : 1.0 -
//   n));
// }

float sdEquilateralTriangle(in vec2 p, in float r) {
  const float k = sqrt(3.0);
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0)
    p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}

float mouth(in vec2 p, in vec2 wh) {
  p.x = abs(p.x);
  p.y = -p.y;
  vec2 q = p - wh;

  float d1 = dot2(vec2(max(q.x, 0.0), q.y));
  q.x = (p.y > 0.0) ? q.x : length(p) - wh.x;
  float d2 = dot2(vec2(q.x, max(q.y, 0.0)));
  float d = sqrt(min(d1, d2));

  return (max(q.x, q.y) < 0.0) ? -d : d;
}

float scene(in vec2 p) {
  float dist1 = sdEquilateralTriangle(p, 0.25);
  float dist2 = sdEquilateralTriangle(p - 0.5, 0.25);
  float dist3 = sdEquilateralTriangle(vec2(p.x + 0.5, p.y - 0.5), 0.25);
  float mouf = mouth(vec2(p.x, -p.y - 0.4), vec2(0.5, 0.05));

  return min(dist1, min(dist2, min(dist3, mouf)));
}

void main() {
  vec3 orange = vec3((sin(time * 0.01) + 1.0) / 2.0, 0.6, 0.5);
  float dist = scene((vTexCoord * 2.0) - 1.0);
  if (dist < 0.0) {
    gl_FragColor = vec4(vec3(0.0), 1.0);
    return;
  }
  float modBod = mod(dist, 0.075);
  vec3 mixedMod = mix(vec3(0.0), orange, modBod * 10.0);

  gl_FragColor = vec4(mixedMod, 1.0);
}
