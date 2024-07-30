import ElementCreate from '../../components/elements/index.js';
import HeaderHomePage from './header/index.js';
import RepositoriesSection from './repositoriesSection/index.js';
import repositoriesApi from '../../services/repositoriesApi/index.js';

export default async function HomePage() {
  const repositoriesSection = await fetchRepositories()
    .then((repositories) =>
      RepositoriesSection({ dataRepositories: repositories })
    )
    .catch((error) => {
      console.log(error);
    });

  const headerHomePage = ElementCreate({
    tag: 'header',
    childrenElement: HeaderHomePage(),
  });
  const mainHomePage = ElementCreate({
    tag: 'main',
    childrenElement: repositoriesSection,
  });

  return [headerHomePage, mainHomePage];
}

async function fetchRepositories() {
  try {
    const response = await repositoriesApi({ username: 'MinhTri180804' });
    const data = await response;
    return data;
  } catch (error) {
    // TODO: handle error
  }
}
