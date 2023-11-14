---
to: src/pages/sketches/<%= name %>.astro
---
---
import { capitalCase } from "change-case";

import Sketch from "@/components/Sketch.astro";
import SketchLayout from "@/layouts/SketchLayout.astro";

export const prerender = true;

const { pathname } = Astro.url;
const title = capitalCase(pathname.split("/").pop() ?? "");
---

<script>
  import { getDimensions, sketch } from "@/utils/p5";
  import type { Draw, Preload, Setup } from "@/utils/p5";
  import type P5 from "p5";

  const dimensions: number[] = getDimensions("square");

  let firstShader: P5.Shader;

  const preload: Preload = (p5) => {
    firstShader = p5.loadShader(
      "/shaders/<%= name %>/main.vert",
      "/shaders/<%= name %>/main.frag",
    );
  };

  const setup: Setup = (p5) => {
    p5.noStroke();
  };

  const draw: Draw = (p5) => {
    p5.shader(firstShader);
    p5.rect(0, 0, p5.width, p5.height);
  };

  sketch({
    preload,
    setup,
    draw,
    dimensions,
    renderer: "webgl",
    saveAs: "png",
    suffix: "<%= name %>"
  });
</script>

<SketchLayout {title}>
  <Sketch />
</SketchLayout>
