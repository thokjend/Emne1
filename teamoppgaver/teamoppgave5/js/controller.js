function buyCoke() {
  let totalInserted = valueFromCoinCounts(coinsInserted);
  if (totalInserted < 25) {
    return;
  } else {
    for (let i = 0; i < coinsInMachine.length; i++) {
      coinsInMachine[i] += coinsInserted[i];
      coinsInserted[i] = 0;
    }
    totalInserted -= 25;
    let shouldBeReturned = totalInserted;
    let theCoins = [20, 10, 5, 1];
    let nowIndex = 0;
    while (shouldBeReturned > 0) {
      if (
        theCoins[nowIndex] <= shouldBeReturned &&
        coinsInMachine[3 - nowIndex] > 0
      ) {
        shouldBeReturned -= theCoins[nowIndex];
        coinsInserted[3 - nowIndex] += 1;
        coinsInMachine[3 - nowIndex] -= 1;
      } else {
        nowIndex += 1;
      }
    }
  }

  if (cokesInStore <= 0) return;
  cokesInStore--;
  isCokeInDelivery++;
  updateView();
}

function insertCoin(value) {
  coinsInserted[value]++;
  updateView();
}

function returnCoins() {
  coinsReturned[0] += coinsInserted[0];
  coinsReturned[1] += coinsInserted[1];
  coinsReturned[2] += coinsInserted[2];
  coinsReturned[3] += coinsInserted[3];
  coinsInserted = [0, 0, 0, 0];
  updateView();
}

function takeCoins() {
  coinsReturned = [0, 0, 0, 0];
  updateView();
}
function takeCoke() {
  isCokeInDelivery = 0;
  updateView();
}
