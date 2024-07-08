document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('.buttons button'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (buttonText === 'C') {
                display.value = '';
            } else if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else if (buttonText === 'bkspc') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += buttonText;
            }
        });
    });
});
