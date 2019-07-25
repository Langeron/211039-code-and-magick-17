'use strict';

(function () {
  var Coordinate = function (x, y) {
    this.x = x;
    this.y = y;
  };

  var userDialog = document.querySelector('.setup');
  var dialogHandler = userDialog.querySelector('.upload');
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoord = new Coordinate(evt.clientX, evt.clientY);
    var dragged;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = new Coordinate(startCoord.x - moveEvt.clientX, startCoord.y - moveEvt.clientY);
      startCoord = new Coordinate(moveEvt.clientX, moveEvt.clientY);

      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
    };

    var onMouseup = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseup);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          userDialog.removeEventListener('click', onClickPreventDefault);
        };

        userDialog.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseup);
  });
})();
