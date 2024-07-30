// import ElementCreate from './components/elements/index.js';
// import HeadRepository from './components/repositoryItem/headRepository/index.js';
// import RepositoryItem from './components/repositoryItem/index.js';
import AccountInfoComponent from './components/AccountInfoComponent/index.js';
import RepositoriesComponent from './components/RepositoriesComponent/index.js';
import repositoriesApi from './services/repositoriesApi/index.js';
const body = document.body;
const buttonChangeTheme = document.querySelector('.change-theme');
const header = document.querySelector('body > header');

const list = document.querySelector('.repository__list');

buttonChangeTheme.addEventListener('click', () => {
  const idBody = body.getAttribute('id');
  console.log('prev theme: ', idBody);
  idBody === 'dark-mode' && body.setAttribute('id', 'light-mode');
  idBody === 'light-mode' && body.setAttribute('id', 'dark-mode');
  console.log('cur theme: ', idBody);
});

async function fetchRepositories() {
  try {
    const response = await repositoriesApi({ username: 'MinhTri180804' });
    const data = await response;
    return data;
  } catch (error) {
    // TODO: handle error
  }
}

async function renderRepositories() {
  const data = await fetchRepositories();
  const components = RepositoriesComponent({ dataRepositories: data });
  list.appendChild(components);
}

async function renderProfile() {
  const accountInfo = AccountInfoComponent({
    avatarUrl: 'https://avatars.githubusercontent.com/u/122197394?v=4',
    name: 'Nguyen Minh Tri',
    nickname: 'MinhTri180804',
  });

  header.appendChild(accountInfo);
}

renderProfile();

await renderRepositories();
