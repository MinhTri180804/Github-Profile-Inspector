import ElementCreate from '../elements';

export default function LabelValuePairComponent({
  tagComponent = 'div',
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
    childrenElement: [titleElement, valueElement],
  });

  return component;
}
