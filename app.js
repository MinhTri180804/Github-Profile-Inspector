import HomePage from './pages/home/index.js';
const body = document.body;
const app = document.querySelector('#app');
const buttonChangeTheme = document.querySelector('.change-theme');

const list = document.querySelector('.repository__list');

buttonChangeTheme.addEventListener('click', () => {
  const idBody = body.getAttribute('id');
  console.log('prev theme: ', idBody);
  idBody === 'dark-mode' && body.setAttribute('id', 'light-mode');
  idBody === 'light-mode' && body.setAttribute('id', 'dark-mode');
  console.log('cur theme: ', idBody);
});

(async function () {
  const elementOfPage = await HomePage();
  elementOfPage.forEach((element) => {
    app.appendChild(element);
  });
})();
