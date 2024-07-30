import ElementCreate from '../../../components/elements/index.js';
import ProfileComponent from '../../../components/profileComponent/index.js';
import userApi from '../../../services/userApi/index.js';

export default async function HeaderHomePage({ dataProfile }) {
  const profileComponent = ProfileComponent({ accountInfoData: dataProfile });
  const fragment = document.createDocumentFragment();
  fragment.appendChild(profileComponent);
  console.log(fragment);
  return fragment;
}
