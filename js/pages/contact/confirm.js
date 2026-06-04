// ============================================================
// confirm
// ============================================================
export const initConfirm = () => {
  const conFirm = document.querySelector(".js-confirm");

  if (!conFirm) return;

  // 保存されているデータを取得
  const savedData = sessionStorage.getItem("contactData");

  // 入力値が見当たらなければ確認画面に移行せず、お問い合わせページへ。
  if (!savedData) {
    location.href = "/contact/";
    return;
  }

  // データを文字列からオブジェクトに変換し、取り出し可能にする
  const data = JSON.parse(savedData);

  // data-confirm属性と保存データのキー名を対応させて値を表示
  conFirm.querySelectorAll("[data-confirm]").forEach((item) => {
    const key = item.dataset.confirm;
    item.textContent = data[key] || "未入力";
  });

  // 入力画面へ戻る
  const backBtn = document.querySelector(".c-contact__btn--prev");

  backBtn?.addEventListener("click", () => {
    location.href = "/contact/";
  });

  const conFirmBtn = document.querySelector(".confirm__submit-btn");

  conFirmBtn.addEventListener("click", () => {
    // 保存されているデータを削除
    sessionStorage.removeItem("contactData");

    // 送信完了画面に進む
    window.location.href = "/contact/thanks/";
  });
};
