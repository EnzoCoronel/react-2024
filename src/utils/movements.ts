export const handleSwipeLeft = (gameState: number[]) => {
  let newArray = [...gameState];
  let score = 0;
  let position = [];
  let newposition = [];

  for (let i = 0; i < 4; i++) {
    let piece_index_1 = i * 4;
    let piece_index_2 = piece_index_1 + 1;

    while (piece_index_1 < (i + 1) * 4) {
      if (piece_index_2 === (i + 1) * 4) {
        piece_index_2 = piece_index_1 + 1;
        piece_index_1++;
        continue;
      }

      if (newArray[piece_index_2] === 0) {
        piece_index_2++;
      } else if (newArray[piece_index_1] === 0) {
        newArray[piece_index_1] = newArray[piece_index_2];
        position.push(piece_index_2);
        newposition.push(piece_index_1);
        //console.log(`Move: ${piece_index_2} -> ${piece_index_1}`);
        newArray[piece_index_2] = 0;
      } else {
        if (newArray[piece_index_1] === newArray[piece_index_2]) {
          newArray[piece_index_1] *= 2;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
          //console.log(`Merge: ${piece_index_2} -> ${piece_index_1}`);
          score = newArray[piece_index_1];
          newArray[piece_index_2] = 0;
        } else {
          piece_index_1++;
          piece_index_2 = piece_index_1 + 1;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
        }
      }
    }
  }
  return {
    newArray,
    score,
    position,
    newposition
  };
};

export const handleSwipeRight = (gameState: number[]) => {
  let newArray = [...gameState];
  let score = 0;
  let position = [];
  let newposition = [];

  for (let i = 0; i < 4; i++) {
    let piece_index_1 = (i + 1) * 4 - 1;
    let piece_index_2 = piece_index_1 - 1;

    while (piece_index_2 > i * 4 - 1) {
      if (piece_index_2 === -1) {
        piece_index_2 = piece_index_1 - 1;
        piece_index_1--;
        continue;
      }

      if (newArray[piece_index_2] === 0) {
        piece_index_2--;
      } else if (newArray[piece_index_1] === 0) {
        newArray[piece_index_1] = newArray[piece_index_2];
        position.push(piece_index_2);
        newposition.push(piece_index_1);
        //console.log(`Move: ${piece_index_2} -> ${piece_index_1}`);
        newArray[piece_index_2] = 0;
      } else {
        if (newArray[piece_index_1] === newArray[piece_index_2]) {
          newArray[piece_index_1] *= 2;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
          //console.log(`Merge: ${piece_index_2} -> ${piece_index_1}`);
          score = newArray[piece_index_1];
          newArray[piece_index_2] = 0;
        } else {
          piece_index_1--;
          piece_index_2 = piece_index_1 - 1;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
        }
      }
    }
  }
  return {
    newArray,
    score,
    position,
    newposition
  };
};

export const handleSwipeUp = (gameState: number[]) => {
  let newArray = [...gameState];
  let score = 0;
  let position = [];
  let newposition = [];

  for (let i = 0; i < 4; i++) {
    let piece_index_1 = i;
    let piece_index_2 = piece_index_1 + 4;

    while (piece_index_1 < (i + 1) * 4) {
      if (piece_index_2 > 12 + i) {
        piece_index_1 += 4;
        piece_index_2 = piece_index_1 + 4;
        continue;
      }
      if (newArray[piece_index_2] === 0) {
        piece_index_2 += 4;
      } else if (newArray[piece_index_1] === 0) {
        newArray[piece_index_1] = newArray[piece_index_2];
        position.push(piece_index_2);
        newposition.push(piece_index_1);
        //console.log(`Move: ${piece_index_2} -> ${piece_index_1}`);
        newArray[piece_index_2] = 0;
      } else {
        if (newArray[piece_index_1] === newArray[piece_index_2]) {
          newArray[piece_index_1] *= 2;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
          //console.log(`Merge: ${piece_index_2} -> ${piece_index_1}`);
          score = newArray[piece_index_1];
          newArray[piece_index_2] = 0;
        } else {
          piece_index_1 += 4;
          piece_index_2 = piece_index_1 + 4;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
        }
      }
    }
  }
  return {
    newArray,
    score,
    position,
    newposition
  };
};

export const handleSwipeDown = (gameState: number[]) => {
  let newArray = [...gameState];
  let score = 0;
  let position = [];
  let newposition = [];

  for (let i = 0; i < 4; i++) {
    let piece_index_1 = 12 + i;
    let piece_index_2 = piece_index_1 - 4;

    while (piece_index_1 > i) {
      if (piece_index_2 < i) {
        piece_index_1 -= 4;
        piece_index_2 = piece_index_1 - 4;
        continue;
      }

      if (newArray[piece_index_2] === 0) {
        piece_index_2 -= 4;
      } else if (newArray[piece_index_1] === 0) {
        newArray[piece_index_1] = newArray[piece_index_2];
        position.push(piece_index_2);
        newposition.push(piece_index_1);
        //console.log(`Move: ${piece_index_2} -> ${piece_index_1}`);
        newArray[piece_index_2] = 0;
      } else {
        if (newArray[piece_index_1] === newArray[piece_index_2]) {
          newArray[piece_index_1] *= 2;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
          //console.log(`Merge: ${piece_index_2} -> ${piece_index_1}`);
          score = newArray[piece_index_1];
          newArray[piece_index_2] = 0;
        } else {
          piece_index_1 -= 4;
          piece_index_2 = piece_index_1 - 4;
          position.push(piece_index_2);
          newposition.push(piece_index_1);
        }
      }
    }
  }
  return {
    newArray,
    score,
    position,
    newposition
  };
};
