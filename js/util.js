'use strict';

(function () {
  var createErrorBlock = function (message) {
    var errorBlock = document.createElement('div');
    errorBlock.className = 'error-block';
    errorBlock.textContent = message;
    errorBlock.style.position = 'absolute';
    errorBlock.style.top = '0';
    errorBlock.style.left = '50%';
    errorBlock.style.transform = 'translateX(-50%)';
    errorBlock.style.textAlign = 'center';
    errorBlock.style.padding = '20px 30px';
    errorBlock.style.background = '#f00';
    document.documentElement.appendChild(errorBlock);
  };

  var onErrorRemove = function (evt) {
    var errorBlock = document.querySelector('.error-block');
    if (evt.target !== errorBlock && !errorBlock.contains(evt.target)) {
      errorBlock.remove();
    }

    document.removeEventListener('mousedown', onErrorRemove);
  };

  window.utils = {
    createErrorBlock: createErrorBlock,
    onErrorRemove: onErrorRemove
  };
})();
