const inputFields = document.querySelectorAll('.form__input');

inputFields.forEach(input => {
    input.addEventListener('input', function () {
        const placeholder = this.nextElementSibling;
        if (this.value !== '') {
            placeholder.classList.add('active');
        } else {
            placeholder.classList.remove('active');
        }
    });
});