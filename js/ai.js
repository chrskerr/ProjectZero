function nextMove (aiDifficulty) {
  // a function to suggest a next move, with accuracy based on aiDifficulty
  // easy 45% correct
  // normal 75% correct
  // hard 100% correct

  // min max theory?
}

function idealMove () {
  player = 2;
  let moveWeights = [-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000];
  let tempBoard = [...board];
  let playIndex = [];
  tempBoard.forEach(function(i,j){if (i === 0) playIndex.push(j)});
  let currentPlays = [...playIndex];

  minMaxFirst(player, tempBoard, currentPlays, moveWeights);


  let bestChoice = [-100000, 0];

  moveWeights.forEach(function(j,i) {
    if (moveWeights[i] > bestChoice[0]) {
      bestChoice = [moveWeights[i], i];
    }
  })

  recordChoice(bestChoice[1]);

}


function minMaxFirst(player, tempBoard, currentPlays, moveWeights) {
  currentPlays.forEach(function(j) {
    moveWeights[j] = 0;
    let loopBoard = [...tempBoard];
    loopBoard[j] = player;
    player = 1;
    let newPlays = [];
    let parentPlayIndex = j;
    loopBoard.forEach(function(i,j){if (i === 0) newPlays.push(j)});
    minMax(player, loopBoard, newPlays, parentPlayIndex, moveWeights);
  });
}

function minMax(player, loopBoard, currentPlays, parentPlayIndex, moveWeights) {
  if (terminalStateTest(loopBoard) === 2) {
    moveWeights[parentPlayIndex] ++;
  } else if (terminalStateTest(loopBoard) === 1) {
    moveWeights[parentPlayIndex] --;
  } else if (terminalStateTest(loopBoard) === 0) {
  } else {
    currentPlays.forEach(function(j) {
      let tmpBoard = [];
      tmpBoard = [...loopBoard];
      tmpBoard[j] = player;
      if (player === 1) {player = 2} else if (player === 2) {player = 1}
      let newPlays = [];
      tmpBoard.forEach(function(i,j) {if (i === 0) newPlays.push(j)});
      minMax(player, tmpBoard, newPlays, parentPlayIndex, moveWeights);
    });
  }
}

function terminalStateTest(tempBoard) {
  let testList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  let output;
  testList.forEach(function(test) {
    if (tempBoard[test[0]] === 0 || tempBoard[test[1]] === 0 || tempBoard[test[2]] === 0) {
    } else if (tempBoard[test[0]] === tempBoard[test[1]] && tempBoard[test[2]] === tempBoard[test[1]]) {
      output = tempBoard[test[1]]}
  });
  if (output) return output;

  // test for draw
  let emptyCount = 0;
  tempBoard.forEach(function(i) {if (i === 0) emptyCount++;});
  if (emptyCount === 0) {
    return 0;
  }

  return -1;
}
