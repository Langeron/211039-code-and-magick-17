'use strict';

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarContainer = userDialog.querySelector('.setup-similar');
var similarWizardList = similarContainer.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();

similarContainer.classList.remove('hidden');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Ирвинг'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго'
];

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

var COUNT_WIZARD = 4;

var getWizardFeatures = function (name, surname, coatColor, eyesColor) {
  var wizardFeature = {
    name: name + ' ' + surname,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

  return wizardFeature;
};

var getArrayWizards = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push(getWizardFeatures(WIZARD_NAMES[i], WIZARD_SURNAMES[i], WIZARD_COAT_COLORS[i], WIZARD_EYES_COLORS[i]));
  }

  return wizards;
};

var wizards = getArrayWizards(COUNT_WIZARD);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  fragment.appendChild(wizardElement);
};

for (var i = 0; i < COUNT_WIZARD; i++) {
  renderWizard(wizards[i]);
}

similarWizardList.appendChild(fragment);

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var setupUserName = userDialog.querySelector('.setup-user-name');

var KEY_CODE = {
  ENTER: 13,
  ESC: 27
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODE.ENTER) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODE.ENTER) {
    closePopup();
  }
});
