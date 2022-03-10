function editElement(element, matcher, replacer) {
  let text = element.textContent;
  let pattern = new RegExp(matcher, "g");
  let editted = text.replace(pattern, replacer);
  element.textContent = editted;
}
