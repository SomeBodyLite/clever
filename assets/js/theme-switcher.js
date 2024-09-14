// document.querySelector('.theme-switcher').addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');
//   localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
// });

// if (localStorage.getItem('theme') === 'dark') {
//   document.body.classList.add('dark-theme');
// }


let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.theme-switcher');

const enableDarkStyle = () => {
  document.body.classList.add('dark-theme');
  localStorage.setItem('styleMode', 'dark');
}
const disableDarkStyle = () => {
  document.body.classList.remove('dark-theme');
  localStorage.setItem('styleMode', 'light');
}

styleToggle.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  if (styleMode !== 'dark') {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
});

if (styleMode === 'dark') {
  enableDarkStyle();
}