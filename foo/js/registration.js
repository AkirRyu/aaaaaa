let form = document.querySelector('.form'),
    formInputs = document.querySelectorAll('.form-input'),
    inputEmail = document.querySelector('.form-input-email'),
    inputPass = document.querySelector('.form-input-pass'),
    inputPassRep = document.querySelector('.form-input-pass-rep'),
    inputName = document.querySelector('.form-name'),
    inputButt = document.querySelector('.form-button'),
    inputSur = document.querySelector('.form-surname');
//Основной массив с данными юзеров
const userData = [];





//Проверка емеила на сходство с теми которые уже есть в базе
function checkAuth(arr, elem) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].email === elem) {
            console.log('email problem it used');
            return false
        } else {
            console.log('gg good email ');
        }

    }
}


//Ищет по email объект в массиве
function findEmail(item, index) {
    if (item.email === inputEmail.value) {
        return true;
    } else return false;
}

//Валидация email через regular expression
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Валидация name && surname через regular expression
function validateName(name) {
    var reg = /^[a-zA-Z._-\s{1}\u00C6\u00D0\u018E\u018F\u0190\u0194\u0132\u014A\u0152\u1E9E\u00DE\u01F7\u021C\u00E6\u00F0\u01DD\u0259\u025B\u0263\u0133\u014B\u0153\u0138\u017F\u00DF\u00FE\u01BF\u021D\u0104\u0181\u00C7\u0110\u018A\u0118\u0126\u012E\u0198\u0141\u00D8\u01A0\u015E\u0218\u0162\u021A\u0166\u0172\u01AFY\u0328\u01B3\u0105\u0253\u00E7\u0111\u0257\u0119\u0127\u012F\u0199\u0142\u00F8\u01A1\u015F\u0219\u0163\u021B\u0167\u0173\u01B0y\u0328\u01B4\u00C1\u00C0\u00C2\u00C4\u01CD\u0102\u0100\u00C3\u00C5\u01FA\u0104\u00C6\u01FC\u01E2\u0181\u0106\u010A\u0108\u010C\u00C7\u010E\u1E0C\u0110\u018A\u00D0\u00C9\u00C8\u0116\u00CA\u00CB\u011A\u0114\u0112\u0118\u1EB8\u018E\u018F\u0190\u0120\u011C\u01E6\u011E\u0122\u0194\u00E1\u00E0\u00E2\u00E4\u01CE\u0103\u0101\u00E3\u00E5\u01FB\u0105\u00E6\u01FD\u01E3\u0253\u0107\u010B\u0109\u010D\u00E7\u010F\u1E0D\u0111\u0257\u00F0\u00E9\u00E8\u0117\u00EA\u00EB\u011B\u0115\u0113\u0119\u1EB9\u01DD\u0259\u025B\u0121\u011D\u01E7\u011F\u0123\u0263\u0124\u1E24\u0126I\u00CD\u00CC\u0130\u00CE\u00CF\u01CF\u012C\u012A\u0128\u012E\u1ECA\u0132\u0134\u0136\u0198\u0139\u013B\u0141\u013D\u013F\u02BCN\u0143N\u0308\u0147\u00D1\u0145\u014A\u00D3\u00D2\u00D4\u00D6\u01D1\u014E\u014C\u00D5\u0150\u1ECC\u00D8\u01FE\u01A0\u0152\u0125\u1E25\u0127\u0131\u00ED\u00ECi\u00EE\u00EF\u01D0\u012D\u012B\u0129\u012F\u1ECB\u0133\u0135\u0137\u0199\u0138\u013A\u013C\u0142\u013E\u0140\u0149\u0144n\u0308\u0148\u00F1\u0146\u014B\u00F3\u00F2\u00F4\u00F6\u01D2\u014F\u014D\u00F5\u0151\u1ECD\u00F8\u01FF\u01A1\u0153\u0154\u0158\u0156\u015A\u015C\u0160\u015E\u0218\u1E62\u1E9E\u0164\u0162\u1E6C\u0166\u00DE\u00DA\u00D9\u00DB\u00DC\u01D3\u016C\u016A\u0168\u0170\u016E\u0172\u1EE4\u01AF\u1E82\u1E80\u0174\u1E84\u01F7\u00DD\u1EF2\u0176\u0178\u0232\u1EF8\u01B3\u0179\u017B\u017D\u1E92\u0155\u0159\u0157\u017F\u015B\u015D\u0161\u015F\u0219\u1E63\u00DF\u0165\u0163\u1E6D\u0167\u00FE\u00FA\u00F9\u00FB\u00FC\u01D4\u016D\u016B\u0169\u0171\u016F\u0173\u1EE5\u01B0\u1E83\u1E81\u0175\u1E85\u01BF\u00FD\u1EF3\u0177\u00FF\u0233\u1EF9\u01B4\u017A\u017C\u017E\u1E93]+$/;
    return reg.test(name);
}
//Валидация pass через regular expression
function validatePass(pass) {
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return reg.test(pass)
}
//сравнение паролей
function comparePass(pass, passRep) {
    if (pass != passRep) {
        console.log('problems');
    } else console.log('gg - 2');

}


function changeWord() {
    document.querySelector('.btn').innerHTML = 'Log out';
}

//функция при нажатии на кнопку в рег. форме
inputButt.onclick = function(event) {
    event.preventDefault()
    let emailVal = inputEmail.value,
        passVal = inputPass.value,
        passRepVal = inputPassRep.value,
        nameVal = inputName.value,
        surnameVal = inputSur.value,
        //Массив отбирает те инпуты которые не заполнены 
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');


    //Проверка на заполненность инпутов
    formInputs.forEach(function(input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });

    //Если не все инпуты заполнены то выдаст ошибку
    if (emptyInputs.length !== 0) {
        alert('inputs are not filled');
        return false;
    }

    //Функция проверки емеила и добавление класса error в случае ошибки
    if (!validateEmail(emailVal)) {
        alert('problem with email');
        inputEmail.classList.add('error');
        return false;

    } else {
        inputEmail.classList.remove('error');
    }


    //Функция проверки имени и добавление класса error в случае ошибки
    if (!validateName(nameVal)) {
        alert('problem with name');
        inputName.classList.add('error');
        return false;

    } else {
        inputName.classList.remove('error');
    }


    //Функция проверки фамилии и добавление класса error в случае ошибки
    if (!validateName(surnameVal)) {
        alert(' problem with surname');
        inputSur.classList.add('error');
        return false;

    } else {
        inputSur.classList.remove('error');
    }

    //Функция проверки пароля и добавление класса error в случае ошибки
    if (!validatePass(passVal)) {
        alert(' problem with password');
        inputPass.classList.add('error');
        return false;

    } else {
        inputPass.classList.remove('error');
    }

    //проверка на схожесть паролей
    if (passVal !== passRepVal && passRepVal !== '') {
        alert('you entered a wrong second password');
        inputPass.classList.add('error');
        inputPassRep.classList.add('error');
        return false;
    } else {
        inputPass.classList.remove('error');
        inputPassRep.classList.remove('error');
        console.log('gg');
    }

    //берем массив userData с localStorage
    c = JSON.parse(localStorage.getItem('userData'));
    //Если массив не пустой то начнется проврека email на схожесть 
    if (c == undefined) {
        console.log('you will registr first account');
    } else {
        if (checkAuth(c, emailVal) === false) {
            alert('this email is already in use');
            inputEmail.classList.add('error');
            return false;

        } else {

            inputEmail.classList.remove('error');
            console.log('good email bro');
        }
    }


    //Если нет ошибок и все поля заполнены то начинается if условие
    if (emptyInputs == 0) {
        formAuthEmail.value === '';
        formAuthPass.value === '';
        //Берем данные с объекта
        var formData = readFormData();
        console.log(formData);

        console.log(userData);
        //Если localStorage пустой то пушим в него объект formData
        if (!localStorage.getItem('userData')) {
            userData.push(formData);
            //И закидываем в localStorage
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            //если Массив есть в localStorage то перебираем его и добавляем элементы в основной массив
            let arr = JSON.parse(localStorage.getItem('userData'));
            for (let index = 0; index < arr.length; index++) {
                userData.push(arr[index]);
            }

            //Массив в который перенесли пушим в конец данные с formData
            userData.push(formData);
            //Закидываем в localStorage
            localStorage.setItem('userData', JSON.stringify(userData));


        }
        console.log(userData);
        //Перенаправляем на основну страницу
        document.location.assign("../index.html");
        //   emailRegShow.innerHTML = formData.email;
        changeWord()
            //Ищем по email индекс объекта и передаем его в переменную
        let hat = userData.findIndex(findEmail);
        //Индекс попадает в localStorage
        let gap = localStorage.setItem('reus', hat)


    } else {
        console.log('some problems with local storadge');
    }





}