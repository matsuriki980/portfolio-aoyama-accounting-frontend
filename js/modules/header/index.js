// ============================================================
// header
// ============================================================
import { initHeaderBackground } from "./background.js";
import { initDrawerMenu } from "./drawer.js";
import { headerRender } from "./render.js";

export function initHeader() {
  initHeaderBackground();
  initDrawerMenu();
  headerRender();
}
