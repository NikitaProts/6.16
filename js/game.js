const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
$('target').removeClass('terget');


  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits + 1);
  // TODO: помечать target текущим номером

  // FIXME: тут надо определять при первом клике firstHitTime

  if (hits === maxHits) { firstHitTime = getTimestamp(); } 
  if (hits === maxHits) { endGame();
    endGame();
  }
}

function endGame() {
 $('.game-field').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  let a = $(event.target)
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    a.text('');
    round();
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
