function buyCoke() {
  if (cokesInStore == 0) {
    return;
  }
  let totalInserted = valueFromCoinCounts(coinsInserted);
  let cokeCost = 25;
  let sum = totalInserted - cokeCost;

  if (totalInserted < 25) {
    return;
  }

  /*  if (sum >= 0) {
    for (let i = 0; coinsInserted.length; i++) {
      if (coinsInserted[3] != 0 && totalInserted >= 20) {
        coinsInserted[3]--;
        coinsInMachine[3]++;
      } else if (coinsInserted[2] != 0 && totalInserted >= 10) {
        coinsInserted[2]--;
        coinsInMachine[2]++;
      } else if (coinsInserted[1] != 0 && totalInserted >= 5) {
        coinsInserted[1]--;
        coinsInMachine[1]++;
      } else if (coinsInserted[0] != 0 && totalInserted >= 1) {
        coinsInserted[0]--;
        coinsInMachine[0]++;
      }
    }
  } */

  cokesInStore--;
  isCokeInDelivery = true;
  updateView();
}

function insertCoin(value) {
  coinsInserted[value]++;
  updateView();
}

function returnCoins() {
  if (valueFromCoinCounts(coinsInserted) == 0) {
    return;
  } else {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    updateView();
  }
}

function takeCoins() {
  coinsReturned = [0, 0, 0, 0];
  updateView();
}

function takeCoke() {
  isCokeInDelivery = false;
  updateView();
}
