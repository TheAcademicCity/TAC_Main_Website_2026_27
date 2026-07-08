/** Opens Gmail compose in the browser with the given recipient prefilled. */
export function getGmailComposeUrl(to: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
}
