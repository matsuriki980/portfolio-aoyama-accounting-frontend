import { initContactForm } from "./contact-form.js";
import { initConfirm } from "./confirm.js";
import { initThanks } from "./thanks.js";

export const initContact = () => {
  initContactForm();
  initConfirm();
  initThanks();
};
