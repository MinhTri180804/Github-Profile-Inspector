import ElementCreate from '../../components/elements/index.js';
import HeaderHomePage from './header/index.js';
import RepositoriesSection from './repositoriesSection/index.js';
import repositoriesApi from '../../services/repositoriesApi/index.js';
import userApi from '../../services/userApi/index.js';

export default async function HomePage() {
  const repositoriesSection = await repositoriesApi()
    .then((repositories) =>
      RepositoriesSection({ dataRepositories: repositories })
    )
    .catch((error) => {
      console.log(error);
    });
  const headerElement = await userApi().then((data) =>
    HeaderHomePage({ dataProfile: data })
  );

  const headerHomePage = ElementCreate({
    tag: 'header',
    childrenElement: headerElement,
  });
  const mainHomePage = ElementCreate({
    tag: 'main',
    childrenElement: repositoriesSection,
  });

  return [headerHomePage, mainHomePage];
}
