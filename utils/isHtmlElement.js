export default function isHTMLElement(element) {
  return element instanceof HTMLElement || element instanceof DocumentFragment;
}
