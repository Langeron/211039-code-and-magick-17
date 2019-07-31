'use strict';

(function () {
  var colorCoat;
  var colorEyes;

  var allWizards = [];

  var getWizards = function (wizards) {
    allWizards = wizards.slice();
  };

  var onCoatChange = function (color) {
    colorCoat = color;
    updateWizards();
  };

  var onEyesChange = function (color) {
    colorEyes = color;
    updateWizards();
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    var filteredWizards = allWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    window.renderWizards.render(filteredWizards);
  };

  window.similar = {
    getWizards: getWizards,
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange
  };
})();
