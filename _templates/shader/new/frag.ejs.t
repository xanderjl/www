---
to: public/shaders/<%= name %>/main.frag
---
precision mediump float;

void main() {
    vec3 color = vec3(1.0, 0.5, 0.5);

    gl_FragColor = vec4(color, 1.0);
}

