'use strict';

var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardList = document.querySelector('.setup-similar-list');
var similarContainer = document.querySelector('.setup-similar');
var fragment = document.createDocumentFragment();

userDialog.classList.remove('hidden');
similarContainer.classList.remove('hidden');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Ирвинг'
];
var WIZARD_SURNAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго'
];
var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [];

var getWizardFeatures = function (name, surname, coatColor, eyesColor) {
  var wizardFeature = {
    name: name + ' ' + surname,
    coatColor: coatColor,
    eyesColor: eyesColor
  };

  wizards.push(wizardFeature);
};

for (var i = 0; i < 4; i++) {
  getWizardFeatures(WIZARD_NAMES[i], WIZARD_SURNAME[i], WIZARD_COAT_COLOR[i], WIZARD_EYES_COLOR[i]);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  fragment.appendChild(wizardElement);
};

for (var i = 0; i < 4; i++) {
  renderWizard(wizards[i]);
}

var insertElement = function (wrapper, item) {
  wrapper.appendChild(item);
};

insertElement(similarWizardList, fragment);

