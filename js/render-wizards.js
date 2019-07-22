'use strict';

(function () {
  var similarContainer = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarWizardList = similarContainer.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  // var getWizardFeatures = function (name, surname, coatColor, eyesColor) {
  //   var wizardFeature = {
  //     name: name + ' ' + surname,
  //     coatColor: coatColor,
  //     eyesColor: eyesColor
  //   };

  //   return wizardFeature;
  // };

  // var getArrayWizards = function (count) {
  //   var wizards = [];
  //   for (var i = 0; i < count; i++) {
  //     wizards.push(getWizardFeatures(WIZARD_NAMES[i], WIZARD_SURNAMES[i], WIZARD_COAT_COLORS[i], WIZARD_EYES_COLORS[i]));
  //   }

  //   return wizards;
  // };

  // var wizards = getArrayWizards(COUNT_WIZARD);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    fragment.appendChild(wizardElement);
  };

  var onSuccess = function (wizards) {
    console.log(wizards);
    wizards.forEach(function (wizard, i) {
      if (i < 4) {
        renderWizard(wizard)
      }
    });
    similarWizardList.appendChild(fragment);
  };

  window.backend(window.util.Url.LOAD, window.util.Method.GET, onSuccess);

})();
