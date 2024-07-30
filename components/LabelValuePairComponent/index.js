import ElementCreate from '../elements/index.js';

export default function LabelValuePairComponent({
  tagComponent = 'div',
  classNameComponent,
  label,
  value,
}) {
  //   This is title element of component
  const titleElement = ElementCreate({
    className: 'title',
    textContent: label,
  });

  //   This is value element of component
  const valueElement = ElementCreate({
    className: 'value',
    textContent: value,
  });

  const component = ElementCreate({
    tag: tagComponent,
    className: classNameComponent ?? '',
    childrenElement: [titleElement, valueElement],
  });

  return component;
}
