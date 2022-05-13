let formSignInFormBut = document.querySelector('.sign-in');
let formSignUp = document.querySelector('.form-sign-up');
let formSignIn = document.querySelector('.form-sign-in');
let formSignUpFormBut = document.querySelector('.sign-up');
let formSignInButt = document.querySelector('.form-sign-in-button');

let formAuthEmail = document.querySelector('.form-input-email-sign-in'),
    formAuthPass = document.querySelector('.form-input-pass-sign-in'),
    formAuthInputs = document.querySelector('.form-input-sign-in');

let formAuthEmailVal = formAuthEmail.value;
let formAuthPassVal = formAuthPass.value;


//Функция ищет массив с email из инпута в sign in
function reusFunc(item) {
    if (item.email === formAuthEmail.value) {
        return true;
    } else return false;
};

//При нажатии на кнопку Sign in форма выходит из displpay : none
formSignInFormBut.addEventListener('click', function() {
    formSignUp.style.display = 'none';
    formSignIn.style.display = 'block';
    inputButt.style.display = 'none';
    formSignInButt.style.display = 'inline-block'
    inputEmail.value === '';
    inputName.value === '';
    inputPass.value === '';
    inputPassRep.value === '';
    inputSur.value === '';
    //Если форма блочная а не none то
    if (formSignIn.style.display == 'block') {
        //То выполняем функцию addEventListener onclick
        formSignInButt.onclick = function(e) {

            let b = JSON.parse(localStorage.getItem('userData'));
            //Ищем по email массив 
            let reus = b.find(reusFunc);

            if (reus) {
                let hat = b.findIndex(reusFunc);
                let gap = localStorage.setItem('reus', hat)

            }

            //Если логин и пароль === admin то перенаправляем в админку
            if (formAuthEmail.value === 'admin' && formAuthPass.value === 'admin') {
                console.log('gg admin ok');
                return document.location.replace("../html/admin.html");
            } else if (!reus) {
                //Если функция дала false то значит такого email не было
                alert('you write wrong email or password')
                return false;
            } else if (formAuthEmail.value === reus.email && formAuthPass.value === reus.pass) {
                //Если пароль и почта совпадают то проверяем на блокировку
                if (reus.access == 1) {
                    console.log('we have that email and pass in db');
                    document.location.replace("../index.html");

                } else {
                    alert('you got banned');
                    return false;
                }


            } else {
                alert('problem with email or pass');
                formAuthEmail.classList.add('error');
                return false;
            }

        }
    }


});

//При нажатии обратно на Sign up ,Sign in блок становится dispay none
formSignUpFormBut.addEventListener('click', function() {
    formSignUp.style.display = 'block';
    formSignIn.style.display = 'none';

    formAuthEmail.value === '';
    formAuthPass.value === '';

    inputButt.style.display = 'inline-block';
    formSignInButt.style.display = 'none';


});