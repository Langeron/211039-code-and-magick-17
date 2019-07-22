(function () {

  var Coordinate = function (x, y) {
    this.x = x;
    this.y = y
  };

  var artifacts = document.querySelectorAll('.setup-artifacts-shop .setup-artifacts-cell img')
  var artifactsBackpack = document.querySelector('.setup-artifacts');
  var backpackCells = artifactsBackpack.querySelectorAll('.setup-artifacts .setup-artifacts-cell');

  artifacts.forEach(function (artifact) {

    var moveArtifact = function (evt) {
      evt.preventDefault();
      var startCoord = new Coordinate(evt.clientX, evt.clientY);

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = new Coordinate(
          startCoord.x - moveEvt.clientX,
          startCoord.y - moveEvt.clientY
        );

        startCoord = new Coordinate(moveEvt.clientX, moveEvt.clientY);

        artifact.style.position = 'absolute';
        artifact.style.left = (artifact.offsetLeft - shift.x) + 'px';
        artifact.style.top = (artifact.offsetTop - shift.y) + 'px';

      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        if (artifactsBackpack.contains(upEvt.target)) {
          artifact.removeEventListener('mousedown', moveArtifact);
          for (var cell = 0; cell < backpackCells.length; cell++) {
            if (backpackCells[cell].children.length === 0) {
              artifact.parentElement.removeChild(artifact);
              backpackCells[cell].appendChild(artifact);
              artifact.style.position = 'static';
              artifact.style.left = '';
              artifact.style.top = '';
              break;
            }
          }
        } else {
          artifact.style.position = 'static';
          artifact.style.left = '';
          artifact.style.top = '';
        }

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mousemove', onMouseMove);
    };

    artifact.addEventListener('mousedown', moveArtifact);
  });
})();
