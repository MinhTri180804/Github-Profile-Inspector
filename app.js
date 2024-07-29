import RepositoryItem from './components/repositoryItem/index.js';
const body = document.body;
const buttonChangeTheme = document.querySelector('.change-theme');

buttonChangeTheme.addEventListener('click', () => {
  const idBody = body.getAttribute('id');
  console.log('prev theme: ', idBody);
  idBody === 'dark-mode' && body.setAttribute('id', 'light-mode');
  idBody === 'light-mode' && body.setAttribute('id', 'dark-mode');
  console.log('cur theme: ', idBody);
});

const repository = RepositoryItem({
  titleRepo: 'Testing',
  descriptionRepo: 'lorem ajsdlkasjd lkasjdl ajsldkj alsjd',
  urlRepo: 'google.com',
  mainLanguageRepo: 'html',
  viewsRepo: 12,
  starsRepo: 10,
});

// const parent = ElementCreate({
//   className: 'parentElement',
//   childrenElement: [element],
//   textContent: '123',
//   tag: 'li',
// });
document.querySelector('.repository__list').appendChild(repository);
