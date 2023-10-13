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
  import type { Draw } from "@/utils/p5";

  const dimensions: number[] = getDimensions("iPhoneProMax");
  const padding: number[] = [40];
  const background = [255, 253, 252];

  const draw: Draw = p5 => {
    p5.clear(0, 0, 0, 0);
  }

  sketch({
    draw,
    dimensions,
    background,
    padding,
    saveAs: "svg",
    suffix: "<%= name %>"
  });
</script>

<SketchLayout {title}>
  <Sketch />
</SketchLayout>
