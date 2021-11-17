let inputTel = document.querySelectorAll('input.tel');
let inputName = document.querySelectorAll('input.name');
let inputMail = document.querySelectorAll('input.mail');
let form = document.querySelector('form');
for (let i = 0; i < inputTel.length; i++) {
    inputTel[i].addEventListener('focus', function () {
        let a = this.value;
        if (a.length < 1) {
            this.value = '+';
            this.classList.add('novalid');
        }
    })
    inputTel[i].addEventListener('input', function () {
        let numberUa;
        let number = /\d+/g;
        let inputValue = this.value;
        let inputCheck = inputValue.matchAll(number);
        let result = '';

        for (let elem of inputCheck) {
            result += String(elem);
        }

        if (result.substr(0, 1) == 3) {
            numberUa = /^\+?3\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g;
            this.setAttribute("maxlength", '19');
        } else {
            numberUa = /^\+?\d\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{0,3}$/g;
            this.setAttribute("maxlength", '20');
        }

        let result2 = result.split('');

        for (let i = 0; i < result2.length; i++) {
            if (i == 0) {
                result2.splice(i, 0, '+');
            }
            if (i == 3) {
                result2.splice(i, 0, ' (');
            }
            if (i == 7) {
                result2.splice(i, 0, ') ');
            }
            if (i == 11 || i == 14) {
                result2.splice(i, 0, '-');
            }
        }

        result2 = result2.join('');

        if (result2.match(numberUa) == null) {
            this.classList.add('novalid');
        } else {
            this.classList.remove('novalid');
        }
        this.value = result2;
    })
}

for (let i = 0; i < inputName.length; i++) {
    inputName[i].addEventListener('input', function () {
        let inputValue = this.value;
        let nameValidation = /\p{L}+\s?/giu;
        let inputCheck = inputValue.matchAll(nameValidation);
        let result = '';

        for (let elem of inputCheck) {
            result += String(elem);
        }


        let result2 = result.split(' ').join(' ');
        if (result2.length < 2) {
            this.classList.add('novalid');
        } else {
            this.classList.remove('novalid');
        }
        this.value = result2;
    })
}

for (let i = 0; i < inputMail.length; i++) {
    inputMail[i].addEventListener('input', function () {
        let inputValue = this.value;
        let emailValidation = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
        let val = /[-.\w@]/g;
        let inputCheck = inputValue.matchAll(val);
        let result = '';

        for (let elem of inputCheck) {
            result += String(elem);
        }

        let result2 = result.split('').join('');

        if (result2.match(emailValidation) == null) {
            this.classList.add('novalid');
        } else {
            this.classList.remove('novalid');
        }

        this.value = result2;
    })
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let formInputs = document.querySelectorAll('input');
    let result = true;

    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].classList.contains('novalid')) {
            result = false;
        }
    }

    if (result) {
        this.submit();
    } else {
        for (let elem of formInputs) {
            if (elem.classList.contains("novalid")) {
                elem.style.borderBottom = "1px solid red";
            } else {
                elem.style.borderBottom = "1px solid green";
            }
        }
    }

})

