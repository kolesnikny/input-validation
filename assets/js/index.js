/*
Сделать два инпута - для email и для password

При потере фокуса инпутом валидировать его значение - если оно правильное, то сделать рамочку инпута зеленой, в противном случае - красной.
Принцип валидации:
1. Email должен содержать '@' и '.' (Если можете проверить последовательность одного за другим - хоршо, если не можете - проверьте просто на содержание и того, и другого)
2. Пароль должен быть не меньше 5 символов и содежать что-либо из спец-символов:
[`, !, @, #, $, %, ^, &, *, (, )]

Без регулярных выражений!)
*/

const email = document.querySelector('#email');
const password = document.querySelector('#password');

email.addEventListener('blur', getValidateData);
password.addEventListener('blur', getValidateData);

function getValidateData({ target }) {
    if (target.type === 'email') {
        renderValidateResult(target, validateEmail(target.value));
    } else if (target.type === 'password') {
        renderValidateResult(target, validatePassword(target.value));
    }
}

function renderValidateResult(element, result) {
    if (!result) {
        element.style.border = '2px solid red';
    } else {
        element.style.border = '1px solid';
    }
}

function validateEmail(value) {
    const indexCommerc = value.indexOf('@');
    const indexDot = value.indexOf('.', indexCommerc);
    if (indexCommerc === -1 || indexDot === -1) {
        return false;
    }
    return true;
}

function validatePassword(value) {
    const MIN_LENGTH = 5;
    if (value.length < MIN_LENGTH) {
        return false;
    }
    const specialSymbols = [
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
    ];

    for (const symbol of specialSymbols) {
        if (value.indexOf(symbol) >= 0) {
            return true;
        }
    }
    return false;
}
