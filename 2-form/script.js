'use strict';

(() => {
  function validationForm() {
    const email = document.getElementById('email').value;
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordConfirmer = document.getElementById('password-confirmer').value;

    const invalidEmailWarning = document.querySelector('#info-email .warning-msg');
    const invalidUserNameWarning = document.querySelector('#info-username .warning-msg');
    const invalidPasswordWarning = document.querySelector('#info-password .warning-msg');
    const invalidPasswordConfirmWarning = document.querySelector('#info-password-confirmer .warning-msg');
  
    let isEmptyField = 0;
  
    if ((!email) && !invalidEmailWarning) {
      insertWarningParagh('info-email', 'Please enter email address');
    } else if (email) {
      if (invalidEmailWarning) {
        invalidEmailWarning.remove();
      }
      if (!email.includes('@', '.com')) {
        insertWarningParagh('info-email', 'Please enter the correct format of email');
        isEmptyField = 1;
      }
    }
  
    if ((!userName) && !invalidUserNameWarning) {
      insertWarningParagh('info-username', 'Please enter username');
    } else if (userName && invalidUserNameWarning) {
      invalidUserNameWarning.remove();
    }
  
    if ((!password) && !invalidPasswordWarning) {
      insertWarningParagh('info-password', 'Please enter password');
    } else if (password && invalidPasswordWarning) {
      invalidPasswordWarning.remove();
    }
  
    if ((!passwordConfirmer) && !invalidPasswordConfirmWarning) {
      insertWarningParagh('info-password-confirmer', 'Please confirm password');
    } else if (passwordConfirmer) {
      if (invalidPasswordConfirmWarning) {
        invalidPasswordConfirmWarning.remove();
      }
      if (passwordConfirmer != password) {
        insertWarningParagh('info-password-confirmer', 'password do not match');
        isEmptyField = 1;
      }
    }
  
    const info = [email, userName, password, passwordConfirmer];
    for (let i in info) {
      if (info[i] == '' || i == null) {
        isEmptyField = 1;
        break;
      }
    }
  
    if (isEmptyField == 0) {
      printInfo(email, userName, password, passwordConfirmer);
    }
  
    return false;
  }
  
  function insertWarningParagh(info, content) {
    const paragh = document.createElement('p');
    paragh.textContent = content;
    paragh.className = 'warning-msg';
  
    const infoNode = document.getElementById(info);
    const label = infoNode.firstChild;
  
    infoNode.insertBefore(paragh, label);
  }
  
  function resetForm() {
    document.querySelectorAll('.warning-msg').forEach((e) => e.remove());
    document.querySelectorAll('.info-block').forEach((e) => e.remove());
  }
  
  function printInfo(email, userName, password) {
    document.querySelectorAll('.warning-msg').forEach((e) => e.remove());
  
    if (!document.querySelector('.info-block')) {
      const infoBlock = document.createElement('div');
      infoBlock.className = 'info-block';
  
      const mainBlock = document.getElementById('main-block');
      console.log(mainBlock);
      mainBlock.appendChild(infoBlock);
  
      infoBlock.innerHTML = `
        <p>Email: ${email}</p>
        <p>Username: ${userName}</p>
        <p>Password: ${password}</p>
      `;
    }
  }
  
  document.getElementById('form-field').onsubmit = validationForm;
  document.getElementById('reset-btn').addEventListener('click', resetForm);  
})();
