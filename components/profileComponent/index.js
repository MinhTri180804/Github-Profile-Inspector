import AccountInfoComponent from '../AccountInfoComponent/index.js';
import LabelValuePairComponent from '../LabelValuePairComponent/index.js';
import ElementCreate from '../elements/index.js';

export default function ProfileComponent({ accountInfoData }) {
  const accountInfo = AccountInfoComponent({
    avatarUrl: 'https://avatars.githubusercontent.com/u/122197394?v=4',
    name: 'Nguyen Minh Tri',
    nickname: 'MinhTri180804',
  });

  const statisticalFollow = LabelValuePairComponent({
    tagComponent: 'li',
    label: 'Người theo dõi',
    value: 12,
  });

  const statisticalFollower = LabelValuePairComponent({
    tagComponent: 'li',
    label: 'Người đang theo dõi',
    value: 20,
  });

  const statisticalRepositories = LabelValuePairComponent({
    tagComponent: 'li',
    label: 'Kho lưu trữ',
    value: 30,
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
