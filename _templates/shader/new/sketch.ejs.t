---
to: src/pages/sketches/<%= name %>.astro
---
---
import { capitalCase } from "change-case";

import Sketch from "@/components/Sketch.astro";
import SketchLayout from "@/layouts/SketchLayout.astro";

;

const { pathname } = Astro.url;
const title = capitalCase(pathname.split("/").pop() ?? "");
---

<script>
  import { getDimensions, sketch } from "@/utils/p5";
  import type { Draw, Setup } from "@/utils/p5";
  import type P5 from "p5";

  const dimensions: number[] = getDimensions("square");
  const padding: number[] = [16];

  let firstShader: P5.Shader;

  const fragSrc = `
  precision mediump float;
  varying vec2 vTexCoord;
  void main() {
    gl_FragColor = vec4(vTexCoord, 0.5, 1.0);
  }
  `;
  const vertSrc = `
  attribute vec3 aPosition;
  attribute vec2 aTexCoord;
  varying vec2 vTexCoord;
  void main() {
    vTexCoord = aTexCoord;
    gl_Position = vec4(aPosition, 1.0);
  }
  `;  

  const setup: Setup = (p5) => {
    firstShader = p5.createShader(vertSrc, fragSrc);
    p5.noStroke();
  };

  const draw: Draw = (p5) => {
    p5.shader(firstShader);
    p5.rect(0, 0, p5.width, p5.height);
  };

  sketch({
    setup,
    draw,
    dimensions,
    padding,
    renderer: "webgl",
    saveAs: "png",
    suffix: "<%= name %>"
  });
</script>

<SketchLayout {title}>
  <Sketch />
</SketchLayout>
