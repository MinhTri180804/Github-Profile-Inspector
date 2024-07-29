import isAnchorElement from '../../utils/isAnchorElement.js';
import isHTMLElement from '../../utils/isHtmlElement.js';
// Props is object and it have 3 filed :
// 1. className: array string, example ['class1', 'class2']
// 2. id: string, example 'id1'
// 3. attribute: array object (key - id), example: [{key: 'data-id', value: '123},{key: 'data-id', value: '123}]
// 4. childrenElement?: type is array HTMLElement or only HTMLElement value and can undefine
// 5. textContent: type is string and it can undefine
// 6. tag element: type is string and default is div tag element
// 7. href: type is string and it can undefine, prop href only use when tag element is anchor
export default function ElementCreate({
  className,
  id,
  attribute,
  childrenElement,
  textContent,
  tag,
  href,
}) {
  const element = document.createElement(tag || 'div');

  id && element.setAttribute('id', id);

  // check if element is anchor element will add href attribute for it.
  isAnchorElement(element) && element.setAttribute('href', href);

  //   check className prop is exits
  if (className) {
    if (Array.isArray(className)) {
      element.classList.add(...className);
    }

    if (typeof className === 'string') {
      element.classList.add(className);
    }
  }

  if (attribute) {
    attribute.forEach((att) => {
      element.setAttribute(att.key, att.value);
    });
  }

  if (textContent) {
    element.textContent = textContent;
  }

  //   check childrenElement props is exits
  if (childrenElement) {
    //   Check prop childrenElement is array ?
    if (Array.isArray(childrenElement)) {
      //   If children is array will loop in childrenElement and add it into parent element
      childrenElement.forEach((children) => {
        //   Check item in array props children is HTMLElement type ?
        if (isHTMLElement(children)) {
          element.appendChild(children);
          return;
        }

        console.error(`${childrenElement} is not HTMLElement`);
      });

      return element;
    }

    isHTMLElement(childrenElement) && element.appendChild(childrenElement);
  }
  return element;
}
