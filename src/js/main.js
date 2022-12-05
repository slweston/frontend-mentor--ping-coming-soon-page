(() => {
	const form = document.querySelector('form');
	const emailInput = form.querySelector('.email-input-group__input');
	const emailErrorMessage = form.querySelector('.email-input-group__error-message');

	function _removeError() {
		emailInput.classList.remove('error');
		emailErrorMessage.innerHTML = "";
	}

	emailInput.addEventListener('focus', (e) => {
		_removeError();
	});

	emailInput.addEventListener('input', (e) => {
		_removeError();
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		// emailInput.classList.remove('error');
		if (!emailInput.validity.valid) {
			emailInput.classList.add('error');
			emailErrorMessage.innerHTML = "Please provide a valid email address";
			emailInput.style;
		}
	});
})();