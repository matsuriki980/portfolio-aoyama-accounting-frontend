import { headerState } from "./state.js"; // header background・drawer状態を共有
import { headerRender } from "./render.js"; // state変更後にclassを再描画

// ============================================================
// drawer menu
// ============================================================

export const initDrawerMenu = () => {
  const drawerBtn = document.querySelector(".js-drawer-btn");

  drawerBtn.addEventListener("click", () => {
    headerState.isDrawerOpen = !headerState.isDrawerOpen;
    headerRender();
  });
};
