// ============================================================
// contact-form
// ============================================================
export const initContactForm = () => {
  const contactForm = document.querySelector("#contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // form内のデータを一括取得
    const data = Object.fromEntries(new FormData(contactForm).entries());

    // 取得したデータを保存
    sessionStorage.setItem("contactData", JSON.stringify(data));

    // 確認画面へ遷移
    window.location.href = "/contact/confirm/";
  });
};
