const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
const toggleLightThemeBtn = document.querySelector('.header__menu-btn_light');
const toggleDarkThemeBtn = document.querySelector('.header__menu-btn_dark');
const toggleAutoThemeBtn = document.querySelector('.header__menu-btn_auto');

const disableAllBtns = () => {
  [toggleLightThemeBtn, toggleDarkThemeBtn, toggleAutoThemeBtn].forEach((btn) =>
    btn.classList.remove('header__menu-btn_active')
  );
};

const toggleBtn = (btn) => {
  btn.classList.add('header__menu-btn_active');
};

const toggleLightTheme = () => {
  disableAllBtns();
  toggleBtn(toggleLightThemeBtn);
  document.body.classList.add('light');
};

const toggleDarkTheme = () => {
  disableAllBtns();
  toggleBtn(toggleDarkThemeBtn);
  document.body.classList.remove('light');
};

const toggleAutoTheme = () => {
  disableAllBtns();
  toggleBtn(toggleAutoThemeBtn);
  if (darkThemeMq.matches) {
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
  }
};
toggleLightThemeBtn.addEventListener('click', toggleLightTheme);
toggleDarkThemeBtn.addEventListener('click', toggleDarkTheme);
toggleAutoThemeBtn.addEventListener('click', toggleAutoTheme);
