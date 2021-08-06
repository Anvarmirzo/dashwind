document.addEventListener('DOMContentLoaded', function () {
	'use strict';

	(function () {
		const burgerBtn = document.getElementById('burgerBtn');
		const navMenu = document.getElementById('navMenu');

		function toggleNav() {
			navMenu.classList.toggle('hidden');
		}
		burgerBtn.addEventListener('click', toggleNav);

		/* Show navMenu if min-width: 640px */
		function setVisibility() {
			if (window.matchMedia('(min-width: 640px)').matches) {
				if (navMenu.classList.contains('hidden')) {
					navMenu.classList.remove('hidden');
				}
			}
		}
		window.addEventListener('resize', setVisibility);
	})();
});
