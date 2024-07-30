import AccountInfoComponent from '../AccountInfoComponent/index.js';
import LabelValuePairComponent from '../LabelValuePairComponent/index.js';
import ElementCreate from '../elements/index.js';

export default function ProfileComponent({ accountInfoData }) {
  const accountInfo = AccountInfoComponent({
    avatarUrl: accountInfoData.avatar_url,
    name: accountInfoData.name,
    nickname: accountInfoData.login,
    detailsUrl: accountInfoData.html_url,
  });

  const statisticalFollow = LabelValuePairComponent({
    tagComponent: 'li',
    label: 'Người theo dõi',
    value: accountInfoData.followers,
  });

  const statisticalFollower = LabelValuePairComponent({
    tagComponent: 'li',
    label: 'Người đang theo dõi',
    value: accountInfoData.following,
  });

  const statisticalRepositories = LabelValuePairComponent({
    tagComponent: 'li',
    label: 'Kho lưu trữ public',
    value: accountInfoData.public_repos,
  });

  const statisticalInformation = ElementCreate({
    tag: 'ul',
    className: 'statistical__information',
    childrenElement: [
      statisticalFollow,
      statisticalFollower,
      statisticalRepositories,
    ],
  });

  const profileComponent = document.createDocumentFragment();
  profileComponent.appendChild(accountInfo);
  profileComponent.appendChild(statisticalInformation);

  return profileComponent;
}
