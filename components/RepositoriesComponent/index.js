import RepositoryItem from '../RepositoriesComponent/repositoryItem/index.js';

export default function RepositoryComponent({ dataRepositories }) {
  if (!Array.isArray(dataRepositories) && !dataRepositories.length) return;

  const fragment = document.createDocumentFragment();
  dataRepositories.forEach((repo) => {
    const repositoryComponent = RepositoryItem({
      titleRepo: repo.name,
      descriptionRepo: repo.description,
      mainLanguageRepo: repo.language,
      viewsRepo: repo.stargazers_count,
      starsRepo: repo.watchers_count,
      urlRepo: repo.html_url,
    });
    fragment.appendChild(repositoryComponent);
  });

  return fragment;
}
