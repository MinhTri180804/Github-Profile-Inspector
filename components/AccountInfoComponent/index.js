import { eyeIcon } from '../../assets/icons/index.js';
import ElementCreate from '../elements/index.js';

export default function AccountInfoComponent({
  avatarUrl,
  name,
  nickname,
  detailsUrl,
  avatarAlt = 'alt of image',
}) {
  // imageAvatarElement is element show avatar of account user
  const imageAvatarElement = ElementCreate({
    tag: 'img',
    attribute: [
      {
        key: 'src',
        value: avatarUrl,
      },
      {
        key: 'alt',
        value: avatarAlt,
      },
    ],
  });

  //  wrapLogoElement is element wrap tag image show avatar of account user and it helpful for style border of element
  const wrapLogoElement = ElementCreate({
    className: 'wrap-logo',
    childrenElement: imageAvatarElement,
  });

  //   This is element parent of imageAvatarElement, wrapLogoElement and it is part of parent element has class account__information
  const logoElement = ElementCreate({
    className: 'logo',
    childrenElement: wrapLogoElement,
  });

  //  nameELement is element show name of account user
  const nameElement = ElementCreate({
    className: 'name',
    tag: 'h4',
    textContent: name,
  });

  //  nicknameElement is element show nickname of account user
  const nicknameElement = ElementCreate({
    className: 'nickname',
    tag: 'span',
    textContent: nickname,
  });

  //   This is element parent of nameElement, nicknameElement and it is part of parent element has class account__information
  const aboutElement = ElementCreate({
    className: 'about',
    childrenElement: [nameElement, nicknameElement],
  });

  //   This is element svg icon for button view more
  const iconViewMore = ElementCreate({
    tag: 'svg',
  });
  iconViewMore.innerHTML = eyeIcon;

  //   This is anchor element of button element view more
  const anchorViewMoreElement = ElementCreate({
    tag: 'a',
    textContent: 'Xem chi tiết',
    href: detailsUrl,
  });

  //   This is element button of parent element has class account__information
  const buttonViewMoreElement = ElementCreate({
    tag: 'button',
    className: 'btn-view__more',
    childrenElement: [iconViewMore, anchorViewMoreElement],
  });

  const accountInformation = ElementCreate({
    className: 'account__information',
    childrenElement: [logoElement, aboutElement, buttonViewMoreElement],
  });

  return accountInformation;
}
