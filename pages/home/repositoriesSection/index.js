import RepositoryComponent from '../../../components/RepositoriesComponent/index.js';
import ElementCreate from '../../../components/elements/index.js';

export default function RepositoriesSection({ dataRepositories: data }) {
  // variable is fragment element return by RepositoryComponent contains repository item element
  const repositoryComponent = RepositoryComponent({
    dataRepositories: data,
  });

  // this is parent element contains all repository item element
  const repositoryList = ElementCreate({
    className: 'repository__list',
    tag: 'ul',
    childrenElement: repositoryComponent,
  });

  // This is element children of section
  const contentOfSection = ElementCreate({
    className: 'content',
    childrenElement: repositoryList,
  });

  // This is element title of section
  const titleOfSection = ElementCreate({
    className: 'title',
    textContent: 'Kho lưu trữ',
  });

  // this is element section component of page and it contains two element is titleOfSection and contentOfSection
  const repositorySection = ElementCreate({
    className: 'repositories__section',
    tag: 'section',
    childrenElement: [titleOfSection, contentOfSection],
  });

  return repositorySection;
}
