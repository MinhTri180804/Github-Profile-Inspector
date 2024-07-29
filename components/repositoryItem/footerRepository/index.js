import { eyeIcon, starIcon } from '../../../assets/icons/index.js';
import ElementCreate from '../../elements/index.js';

export default function FooterRepository({ mainLanguage, views, stars }) {
  const dotOfLanguage = ElementCreate({
    className: 'dot',
  });

  const valueOfLanguage = ElementCreate({
    className: 'value',
    textContent: mainLanguage,
  });

  const languageOfFooter = ElementCreate({
    className: 'language',
    childrenElement: [dotOfLanguage, valueOfLanguage],
  });

  const activityView = ActivityComponent({
    valueActivity: views,
    iconActivity: eyeIcon,
    className: 'activity-view',
  });

  const activityStar = ActivityComponent({
    valueActivity: stars,
    iconActivity: starIcon,
    className: 'activity-star',
  });

  const activityOfFooter = ElementCreate({
    className: 'activity',
    childrenElement: [activityView, activityStar],
  });

  const FooterRepository = ElementCreate({
    className: 'footer',
    childrenElement: [languageOfFooter, activityOfFooter],
  });

  return FooterRepository;
}

function ActivityComponent({ className, iconActivity, valueActivity }) {
  const icon = ElementCreate({
    className: 'icon',
  });

  icon.innerHTML = iconActivity;

  const value = ElementCreate({
    className: 'value',
    textContent: valueActivity,
  });

  const activity = ElementCreate({
    className,
    childrenElement: [icon, value],
  });

  return activity;
}
