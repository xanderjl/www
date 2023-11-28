import type { GUI } from "dat.gui";
import type P5 from "p5";

export const reloadUI = (p5: P5, gui: GUI, sketch: () => void) => {
  p5.remove();
  gui.destroy();
  const container = document.getElementById("container");
  if (container) container.innerHTML = "";

  sketch();
};
