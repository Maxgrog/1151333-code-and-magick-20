'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = CLOUD_X + 45;
var RECT_Y = CLOUD_Y + 230;
var GAP = 10;
var GAP_WIDTH = 50;
var TEXT_WIDTH = 40;
var BAR_GAP = -150;
var TEXT_GAP = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 25, CLOUD_Y + 25);
  ctx.fillText('Список результатов:', CLOUD_X + 25, CLOUD_Y + 50);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], TEXT_X + (TEXT_WIDTH + GAP_WIDTH) * i, CLOUD_HEIGHT - GAP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomSat = getRandomSat();
      ctx.fillStyle = 'hsl(240,' + randomSat + '%,50%)';
    }
    var barHeight = (BAR_GAP * times[i]) / maxTime;
    ctx.fillRect(TEXT_X + (TEXT_WIDTH + GAP_WIDTH) * i, RECT_Y, TEXT_WIDTH, barHeight);
    ctx.fillStyle = '#000';

    var roundedValue = Math.floor(times[i]);
    ctx.fillText(roundedValue, TEXT_X + (TEXT_WIDTH + GAP_WIDTH) * i, CLOUD_HEIGHT - TEXT_GAP + barHeight);
  }
};

var getRandomSat = function () {
  return Math.floor(Math.random() * 100);
};
