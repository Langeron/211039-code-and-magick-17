'use strict';

(function () {
  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var WIZARD_EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var WIZARD_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var KEY_CODE = {
    ENTER: 13,
    ESC: 27
  };

  var userDialog = document.querySelector('.setup');
  var similarContainer = userDialog.querySelector('.setup-similar');
  similarContainer.classList.remove('hidden');

  var getRandomNumber = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };


  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupUserName = userDialog.querySelector('.setup-user-name');

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onWizardClick);
    wizardEyes.removeEventListener('click', onWizardClick);
    wizardFireball.removeEventListener('click', onWizardClick);
    userDialog.style.top = '';
    userDialog.style.left = '';
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === KEY_CODE.ESC) {
      if (setupUserName !== document.activeElement) {
        closePopup();
      }
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onWizardClick);
    wizardEyes.addEventListener('click', onWizardClick);
    wizardFireball.addEventListener('click', onWizardClick);
  };

  setupOpen.addEventListener('click', openPopup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_CODE.ENTER) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', closePopup);

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_CODE.ENTER) {
      closePopup();
    }
  });

  var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
  var inputCoatColor = userDialog.querySelector('input[name="coat-color"]');

  var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
  var inputEyesColor = userDialog.querySelector('input[name="eyes-color"]');

  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var inputFireballColor = userDialog.querySelector('input[name="fireball-color"]');

  var onWizardClick = function (evt) {
    var target = evt.currentTarget;
    var randomValue;
    switch (target) {
      case wizardCoat:
        randomValue = WIZARD_COAT_COLORS[getRandomNumber(0, WIZARD_COAT_COLORS.length)];
        wizardCoat.style.fill = randomValue;
        inputCoatColor.value = randomValue;
        break;

      case wizardEyes:
        randomValue = WIZARD_EYES_COLORS[getRandomNumber(0, WIZARD_EYES_COLORS.length)];
        wizardEyes.style.fill = randomValue;
        inputEyesColor.value = randomValue;
        break;

      case wizardFireball:
        randomValue = WIZARD_FIREBALL_COLORS[getRandomNumber(0, WIZARD_FIREBALL_COLORS.length)];
        wizardFireball.style.backgroundColor = randomValue;
        inputFireballColor.value = randomValue;
        break;
    }
  };

  var onSuccess = function () {
    closePopup();
  };

  var onError = function (message) {
    window.utils.createErrorBlock(message);
    closePopup();

    document.addEventListener('mousedown', window.utils.onErrorRemove);
  };

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), onSuccess, onError);
  });
})();

