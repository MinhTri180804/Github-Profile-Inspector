import ElementCreate from '../../../components/elements/index.js';
import ProfileComponent from '../../../components/profileComponent/index.js';

export default function HeaderHomePage() {
  const profileComponent = ProfileComponent({ accountInfoData: '123' });
  const fragment = document.createDocumentFragment();
  fragment.appendChild(profileComponent);
  return fragment;
}
