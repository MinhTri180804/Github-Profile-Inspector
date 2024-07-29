import ElementCreate from './components/elements/index.js';
const body = document.body;
const buttonChangeTheme = document.querySelector('.change-theme');

buttonChangeTheme.addEventListener('click', () => {
  const idBody = body.getAttribute('id');
  console.log('prev theme: ', idBody);
  idBody === 'dark-mode' && body.setAttribute('id', 'light-mode');
  idBody === 'light-mode' && body.setAttribute('id', 'dark-mode');
  console.log('cur theme: ', idBody);
});

const element = ElementCreate({
  tag: 'a',
  className: 'children',
  id: '123',
  attribute: [
    {
      key: 'data-init',
      value: '123',
    },
    {
      key: 'data-success',
      value: '456',
    },
  ],
  href: 'google.com',
  textContent: 'Testing',
});

// const parent = ElementCreate({
//   className: 'parentElement',
//   childrenElement: [element],
//   textContent: '123',
//   tag: 'li',
// });

console.log(element);
