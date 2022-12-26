const btn = document.querySelector('.btn-create');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');



function addMatchClass() {
    passwordInput.classList.add('match');
    confirmPasswordInput.classList.add('match');
}

function removeMatchClass() {
    passwordInput.classList.remove('match');
    confirmPasswordInput.classList.remove('match');
}

function addUnMatchClass() {
    passwordInput.classList.add('unmatch');
    confirmPasswordInput.classList.add('unmatch');
}

function removeUnMatchClass() {
    passwordInput.classList.remove('unmatch');
    confirmPasswordInput.classList.remove('unmatch');
}


function checkPassword() {
    if (passwordInput.value != confirmPasswordInput.value) {
        addUnMatchClass();
        removeMatchClass();
        alert(`Password don't match!`)
    } else {
        addMatchClass();
        removeUnMatchClass()
        clearInput();
    }

}

function clearInput() {
    passwordInput.value = '';
    confirmPasswordInput.value = '';
}

btn.addEventListener('click', checkPassword);