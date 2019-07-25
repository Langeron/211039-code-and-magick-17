'use strict';

(function () {
  var COUNT_WIZARD = 4;
  var similarContainer = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardList = similarContainer.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    fragment.appendChild(wizardElement);
  };

  var onSuccess = function (wizards) {
    wizards.forEach(function (wizard, i) {
      if (i < COUNT_WIZARD) {
        renderWizard(wizard);
      }
    });
    similarWizardList.appendChild(fragment);
  };

  var onError = function (message) {
    window.utils.createErrorBlock(message);
    document.addEventListener('mousedown', window.utils.onErrorRemove);
  };

  window.backend.load(onSuccess, onError);

})();
