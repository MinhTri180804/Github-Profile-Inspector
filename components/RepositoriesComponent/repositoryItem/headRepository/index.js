import { codeIcon, navigateIcon } from '../../../../assets/icons/index.js';
import ElementCreate from '../../../elements/index.js';

export default function HeadRepository({ title, url }) {
  //   icon element have children is svg tag
  const childrenIcon = ElementCreate({
    tag: 'div',
    className: 'icon',
  });
  childrenIcon.innerHTML = codeIcon;

  const childrenValue = ElementCreate({
    tag: 'a',
    className: 'value',
    textContent: title,
    href: url,
  });

  const parentName = ElementCreate({
    tag: 'div',
    className: 'name',
    childrenElement: [childrenIcon, childrenValue],
  });

  const parentTag = ElementCreate({
    tag: 'div',
    className: 'tag',
    textContent: 'public',
  });

  const headerInformation = ElementCreate({
    tag: 'div',
    className: 'header__information',
    childrenElement: [parentName, parentTag],
  });

  const viewMore = ElementCreate({
    tag: 'a',
    className: 'view-more',
    href: url ?? undefined,
  });

  // add icon svg into viewMore element
  viewMore.innerHTML = navigateIcon;

  const HeadRepository = ElementCreate({
    tag: 'div',
    className: 'header',
    childrenElement: [headerInformation, viewMore],
  });

  return HeadRepository;
}
