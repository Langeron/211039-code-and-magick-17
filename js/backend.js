'use strict';

(function () {
  var Status = {
    SUCCESS: 200
  };

  var Method = {
    GET: 'GET',
    POST: 'POST'
  };

  var Url = {
    UPLOAD: 'https://js.dump.academy/code-and-magick',
    LOAD: 'https://js.dump.academy/code-and-magick/data'
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === Status.SUCCESS) {
        onLoad(xhr.response);
      } else {
        onError('Ошибка ' + xhr.status);
      }
    });
    xhr.open(Method.GET, Url.LOAD);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === Status.SUCCESS) {
        onLoad(xhr.response);
      } else {
        onError('Ошибка ' + xhr.status);
      }
    });
    xhr.open(Method.POST, Url.UPLOAD);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
