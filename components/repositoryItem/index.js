import ElementCreate from '../elements/index.js';
import FooterRepository from './footerRepository/index.js';
import HeadRepository from './headRepository/index.js';

export default function RepositoryItem({
  titleRepo: title,
  descriptionRepo,
  urlRepo: url,
  mainLanguageRepo: language,
  viewsRepo: views,
  starsRepo: stars,
}) {
  const headRepository = HeadRepository({ title, url });
  const descriptionRepository = ElementCreate({
    className: 'description',
    textContent: descriptionRepo,
  });

  const footerRepository = FooterRepository({
    mainLanguage: language,
    views,
    stars,
  });

  const RepositoryItem = ElementCreate({
    tag: 'li',
    className: 'repository__list-item',
    childrenElement: [headRepository, descriptionRepository, footerRepository],
  });

  return RepositoryItem;
}
