// import ElementCreate from './components/elements/index.js';
// import HeadRepository from './components/repositoryItem/headRepository/index.js';
// import RepositoryItem from './components/repositoryItem/index.js';
import RepositoriesComponent from './components/RepositoriesComponent/index.js';
import repositoriesApi from './services/repositoriesApi/index.js';
const body = document.body;
const buttonChangeTheme = document.querySelector('.change-theme');

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

await renderRepositories();

// (async function () {
//   const response = await repositoriesApi({ username: 'MinhTri180804' });
//   const data = await response;
//   console.log(data);

//   if (data.length) {
//     const repositories = data.map((repo) => {
//       return RepositoryItem({
//         titleRepo: repo.name,
//         descriptionRepo: repo.description,
//         mainLanguageRepo: repo.language,
//         viewsRepo: repo.stargazers_count,
//         starsRepo: repo.watchers_count,
//         urlRepo: repo.html_url,
//       });
//     });

//     repositories.forEach((element) => {
//       list.appendChild(element);
//     });
//   }
//   data.length ??
//     data.forEach((repo) => {

//       console.log(repositoryItem);
//     });
// })();
