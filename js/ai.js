function nextMove (aiDifficulty) {
  // a function to suggest a next move, with accuracy based on aiDifficulty
  // easy 45% correct
  // normal 75% correct
  // hard 100% correct

  // min max theory?
}

function idealMove () {
  player = 2;
  let countList = [0,0,0,0,0,0,0,0,0];
  let tempBoard = [...board];
  let playIndex = [];
  tempBoard.forEach(function(i,j){if (i === 0) playIndex.push(j)});
  let currentPlays = [...playIndex];

  let moveWeights = minMaxFirst(player, tempBoard, currentPlays, countList);

  let countTotal = 0;
  countList.forEach(function(j,i){countTotal += parseInt(countList[i])})

  // seperate weighting logic
  moveWeights[4] ++;
  let bestChoice = [0,-1000]; // [index, weight]
  console.log(moveWeights)

  moveWeights.forEach(function(j, i) {
    if (j > bestChoice[1]) bestChoice = [i,j];
  })


  recordChoice(bestChoice[0]);
}


function minMaxFirst(player, loopBoard, currentPlays, countList) {
  let minMaxOutput = [-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000]; //this should finish as an array of score of all below moves, typically used to pick best score, here pass whole array
  currentPlays.forEach(function(j) {
    countList[j] ++;
    let tmpBoard = [...loopBoard];
    tmpBoard[j] = player;
    player = 1;
    let newPlays = [];
    tmpBoard.forEach(function(i,j) {if (i === 0) newPlays.push(j)});

    minMaxOutput[j] = minMax(player, tmpBoard, newPlays, countList, 1);
    // this function should output the moveWeights for each available move to it, this will allow for difficult selector later

  })
  return minMaxOutput;
}

function minMax(prevPlayer, loopBoard, currentPlays, countList, depth) {
  // terminal state exit logic
  if (terminalStateTest(loopBoard) === 1) {
    return 10 - depth;
  } else if (terminalStateTest(loopBoard) === 2) {
    return -10 + depth;
  } else if (terminalStateTest(loopBoard) === 0) {
      return 0;
  } else {
    let output;
    if (prevPlayer === 2) output = 10;
    if (prevPlayer === 1) output = -10;

    currentPlays.forEach( function(j) {
      //build the minMax input info
      countList[j] ++; //this is counting number of loops iterated
      let tmpBoard = [...loopBoard]; //create a new board that can be edited without impacting board in tier above
      tmpBoard[j] = player; //log the current play
      let newPlays = []; //create a new combinations list to pass downward
      tmpBoard.forEach(function(i,j) {if (i === 0) newPlays.push(j);});

      if (prevPlayer === 2) { // minimise output
        let player = 1;
        let tmp = minMax(player, tmpBoard, newPlays, countList, depth++);
        if (output > tmp) output = tmp;
      } else if (prevPlayer === 1) { // maximise output
        let player = 2;
        let tmp = minMax(player, tmpBoard, newPlays, countList, depth++);
        if (output < tmp) output = tmp;
      }
    })
    return output;
  }
}

function terminalStateTest(tempBoard) {
  let testList = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  let output = 0;
  testList.forEach(function(test) {
    if (tempBoard[test[0]] === 0 || tempBoard[test[1]] === 0 || tempBoard[test[2]] === 0) {
    } else if (tempBoard[test[0]] === tempBoard[test[1]] && tempBoard[test[2]] === tempBoard[test[1]]) {
      output = tempBoard[test[1]]}
  });
  if (output > 0) {
    return output;
  } else {
    // test for draw
    let emptyCount = 0;
    tempBoard.forEach(function(i) {if (i === 0) emptyCount++;});
    if (emptyCount === 0) {
      return 0;
    }
  }
  return -1;
}
