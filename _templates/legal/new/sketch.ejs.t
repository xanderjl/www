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
  import type { Draw, Setup, WindowResized } from "@/utils/p5";
  import type P5 from "p5";

  const dimensions: number[] = getDimensions("legal");
  const padding: number[] = [16];
  const background = [255, 253, 252];
  let margin: number;

  const handleRenders = (p5: P5) => {
    margin = p5.width * 0.075;
  };

  const setup: Setup = (p5) => handleRenders(p5);
  const windowResized: WindowResized = (p5) => handleRenders(p5);

  const draw: Draw = (p5) => {
    p5.clear(0, 0, 0, 0);
    p5.background(background);
  };

  sketch({
    setup,
    windowResized,
    draw,
    dimensions,
    padding,
    saveAs: "svg",
    suffix: "<%= name %>",
  });
</script>

<SketchLayout {title}>
  <Sketch />
</SketchLayout>
