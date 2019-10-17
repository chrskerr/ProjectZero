function nextMove (aiDifficulty) {
  // a function to suggest a next move, with accuracy based on aiDifficulty
  // easy 45% correct
  // normal 75% correct
  // hard 100% correct

  // min max theory?
}

function idealMove () {
  let prevPlayer = 1;
  let countList = [0,0,0,0,0,0,0,0,0];
  let tempBoard = [...board];
  let playIndex = [];
  tempBoard.forEach(function(i,j){if (i === 0) playIndex.push(j)});
  let currentPlays = [...playIndex];

  let moveWeights = minMaxFirst(prevPlayer, tempBoard, currentPlays, countList);

  let countTotal = 0;
  countList.forEach(function(j,i){countTotal += parseInt(countList[i])})

  // seperate weighting logic
  // moveWeights[4] += 10;
  let bestChoice = [0,-1000]; // [index, weight]

  moveWeights.forEach(function(j, i) {
    if (j > bestChoice[1]) bestChoice = [i,j];
  })


  recordChoice(bestChoice[0]);
}


function minMaxFirst(prevPlayer, loopBoard, currentPlays, countList) {
  let minMaxOutput = [-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000,-1000000]; //this should finish as an array of score of all below moves, typically used to pick best score, here pass whole array
  currentPlays.forEach(function(j) {
    if (prevPlayer === 1) {player = 2} else if (prevPlayer === 2) {player = 1}
    countList[j] ++;
    let tmpBoard = [...loopBoard];
    tmpBoard[j] = player;
    let newPlays = [];
    tmpBoard.forEach(function(i,j) {if (i === 0) newPlays.push(j)});
    minMaxOutput[j] = minMax(player, tmpBoard, newPlays, countList, 1);
    // this function should output the moveWeights for each available move to it, this will allow for difficult selector later

  })
  return minMaxOutput;
}

function minMax(prevPlayer, loopBoard, currentPlays, countList, depth) {
  // terminal state exit logic
  if (terminalStateTest(loopBoard) === 2) {
    return 1 * (1/depth);
  } else if (terminalStateTest(loopBoard) === 1) {
    return  -1 * (1/depth);
  } else if (terminalStateTest(loopBoard) === 0) {
      return 0;
  } else {

    //flip player
    if (prevPlayer === 1) {player = 2} else if (prevPlayer === 2) {player = 1}
    let outputTmp = [];
    let outputTotal;


    currentPlays.forEach( function(j) {
      //build the minMax input info
      countList[j] ++; //this is counting number of loops iterated
      let tmpBoard = [...loopBoard]; //create a new board that can be edited without impacting board in tier above
      tmpBoard[j] = player; //log the current play
      let newPlays = []; //create a new combinations list to pass downward
      tmpBoard.forEach(function(i,j) {if (i === 0) newPlays.push(j);});

      outputTmp.push(minMax(player, tmpBoard, newPlays, countList, depth++));
    })
    outputTmp.forEach(function(i){
      if (!outputTotal) {
        outputTotal = i;
      } else {outputTotal = outputTotal + i}
    })

    output = outputTotal / outputTmp.length;

    return output;
  }
}
