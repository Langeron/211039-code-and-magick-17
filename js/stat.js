'use strict';

(function () {
  var CLOUD = {
    X: 100,
    Y: 10,
    WIDTH: 420,
    HEIGHT: 270
  };

  var GAP = 10;
  var FONT_GAP = 20;
  var COLUMN_GAP = 50;
  var COLUMN_WIDTH = 40;
  var COLUMN_MAX_HEIGHT = 150;
  var FONT_SIZE = 16;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD.WIDTH, CLOUD.HEIGHT);
  };

  var getMaxElement = function (items) {
    return Math.max.apply(null, items);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD.X + GAP, CLOUD.Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD.X, CLOUD.Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = FONT_SIZE + 'px' + 'PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD.X + FONT_GAP, CLOUD.Y + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD.X + FONT_GAP, CLOUD.Y + FONT_GAP * 2);

    var maxTime = getMaxElement(times);

    var getColumnHeight = function (value) {
      return (value * COLUMN_MAX_HEIGHT) / maxTime;
    };

    for (var i = 0; i < names.length; i++) {
      var opacityBar = Math.random();
      var colorBar = 'rgb(0, 0, 255,' + opacityBar + ')';

      if (names[i] === 'Вы') {
        colorBar = 'rgba(255, 0, 0, 1)';
      }

      var time = Math.round(times[i]);
      var columnHeight = getColumnHeight(time);

      ctx.fillStyle = colorBar;
      ctx.fillRect(CLOUD.X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD.HEIGHT - FONT_SIZE - GAP, COLUMN_WIDTH, -columnHeight);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD.X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD.HEIGHT - GAP);
      ctx.fillText(time, CLOUD.X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD.HEIGHT - FONT_SIZE - GAP - FONT_GAP - columnHeight);
    }
  };

})();
