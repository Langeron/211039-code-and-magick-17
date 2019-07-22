'use strict';

(function () {
  var backend = function (url, method, onSuccess, onError, data) {
    var status = {
      200: 200
    };

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === status[200]) {
        onSuccess(xhr.response);
      } else {
        onError('Ошибка' + xhr.status);
      }
    });
    xhr.open(method, url);
    xhr.send(data);
  };

  window.backend = backend;
})();
