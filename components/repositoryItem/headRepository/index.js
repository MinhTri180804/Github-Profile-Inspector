import { codeIcon, navigateIcon } from '../../../assets/icons';
import ElementCreate from '../../elements';

export default function HeadRepository({ title, url }) {
  //   icon element have children is svg tag
  const childrenIcon = ElementCreate({
    tag: 'div',
    className: 'icon',
  });
  childrenIcon.innerHtml = codeIcon;

  const childrenValue = ElementCreate({
    tag: 'div',
    className: 'value',
    textContent: title,
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
    tag: 'div',
    className: 'view-more',
  });

  viewMore.innerHtml = navigateIcon;

  const HeadRepository = ElementCreate({
    tag: 'div',
    className: 'header',
    childrenElement: [headerInformation, viewMore],
  });

  return HeadRepository;
}
