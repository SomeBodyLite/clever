const themeSwitch = document.querySelector('.theme-switcher');

if (themeSwitch) {
	themeSwitch.addEventListener('click', () => {
		const currentTheme = localStorage.getItem('theme');

		if (currentTheme === 'dark') {
			htmlElement.removeAttribute('data-bs-theme');
			htmlElement.classList.remove('dark-theme');
			localStorage.setItem('theme', 'light');
		} else {
			htmlElement.setAttribute('data-bs-theme', 'dark');
			htmlElement.classList.add('dark-theme');
			localStorage.setItem('theme', 'dark');
		}
	});
}
