export const ADMISSIONS_POPUP_SESSION_KEY = "tac-admissions-popup-seen";

export function hasSeenAdmissionsPopup() {
  if (typeof window === "undefined") {
    return true;
  }

  return sessionStorage.getItem(ADMISSIONS_POPUP_SESSION_KEY) === "1";
}

export function markAdmissionsPopupSeen() {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(ADMISSIONS_POPUP_SESSION_KEY, "1");
}
