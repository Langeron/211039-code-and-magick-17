'use strict';

(function () {
  var COUNT_WIZARD = 4;
  var similarContainer = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardList = similarContainer.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var allWizards = [];

  var renderWizards = function (wizards) {
    similarWizardList.innerHTML = '';
    wizards.forEach(function (wizard, i) {
      if (i < COUNT_WIZARD) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        fragment.appendChild(wizardElement);
      }
    });
    similarWizardList.appendChild(fragment);
  };

  var onSuccess = function (wizards) {
    allWizards = wizards.slice();
    renderWizards(wizards);
    window.similar.getWizards(wizards);
  };

  var onError = function (message) {
    window.utils.createErrorBlock(message);
    document.addEventListener('mousedown', window.utils.onErrorRemove);
  };

  window.renderWizards = {
    render: renderWizards,
    wizards: allWizards
  };

  window.backend.load(onSuccess, onError);

})();
