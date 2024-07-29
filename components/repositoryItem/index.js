import ElementCreate from '../elements';

export default function RepositoryItem(props) {
  const {
    titleRepository: title,
    descriptionRepository: description,
    urlRepository: url,
    mainLanguage: language,
    views,
    stars,
  } = props;

  const repositoryItem = ElementCreate({
    tag: 'li',
    className: 'repository__list-item',
  });
}
