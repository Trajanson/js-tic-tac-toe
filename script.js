var audio = new Audio('sounds/magic-burst.wav');





// SETTINGS

// Colors
const BACKGROUND_COLOR_ORIGIN = '#3A3939';
const GAME_BOARD_COLOR = '#5D7B93';
const DEFAULT_COLOR_FOR_GAME_BOARD_DIVIDERS = 'rgba(111, 92, 92, 0.6)';

const TILE_BACKGROUND_COLOR_A = 'rgba(93, 123, 147, .9)';





// Sizes
const GAME_BOARD_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE = 65;
const GAME_BOARD_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE = 65;

const TITLE_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE = 3;
const TITLE_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE = TITLE_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE * (425 / 70);

const TEXT_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE = 97;
const TEXT_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE = TEXT_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE * (150/1311);

const CREDITS_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE = 100;
const CREDITS_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE = 5;

const VERTICAL_COLUMN_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE = 3;
const VERTICAL_COLUMN_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE = 100;

const HORIZONTAL_ROW_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE = 100;
const HORIZONTAL_ROW_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE = 3;

const GAME_PIECE_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE = (100 - (2 * HORIZONTAL_ROW_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE)) / 3;
const GAME_PIECE_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE = (100 - (2 * VERTICAL_COLUMN_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE)) / 3;


// Positions
const GAME_BOARD_POSITION_PERCENT_FROM_TOP_OF_WRAPPER = 26;
const GAME_BOARD_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER = 15;

const TITLE_POSITION_PERCENT_FROM_TOP_OF_WRAPPER = 2;
const TITLE_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER = 2;

const TEXT_POSITION_PERCENT_FROM_TOP_OF_WRAPPER = 10;
const TEXT_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER = 1.5;

const CREDITS_POSITION_PERCENT_FROM_TOP_OF_WRAPPER = 1;
const CREDITS_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER = 1;

const FIRST_VERTICAL_COLUMN_POSITION_FROM_LEFT_OF_GAME_BOARD = (100 - (2 * VERTICAL_COLUMN_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE) ) / 3;
const SECOND_VERTICAL_COLUMN_POSITION_FROM_RIGHT_OF_GAME_BOARD = FIRST_VERTICAL_COLUMN_POSITION_FROM_LEFT_OF_GAME_BOARD;

const FIRST_VERTICAL_COLUMN_POSITION_FROM_TOP_OF_GAME_BOARD = 0;
const SECOND_VERTICAL_COLUMN_POSITION_FROM_TOP_OF_GAME_BOARD = FIRST_VERTICAL_COLUMN_POSITION_FROM_TOP_OF_GAME_BOARD;

const FIRST_HORIZONTAL_ROW_POSITION_FROM_TOP_OF_GAME_BOARD = (100 - (2 * HORIZONTAL_ROW_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE) ) / 3;
const SECOND_HORIZONTAL_ROW_POSITION_FROM_BOTTOM_OF_GAME_BOARD = FIRST_HORIZONTAL_ROW_POSITION_FROM_TOP_OF_GAME_BOARD;

const FIRST_HORIZONTAL_ROW_POSITION_FROM_LEFT_OF_GAME_BOARD = 0;
const SECOND_HORIZONTAL_ROW_POSITION_FROM_RIGHT_OF_GAME_BOARD = FIRST_HORIZONTAL_ROW_POSITION_FROM_LEFT_OF_GAME_BOARD;

const GAME_PIECE_1_POSITION_FROM_LEFT = 0;
const GAME_PIECE_1_POSITION_FROM_TOP = 0;

const GAME_PIECE_2_POSITION_FROM_LEFT = GAME_PIECE_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE + VERTICAL_COLUMN_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE;
const GAME_PIECE_2_POSITION_FROM_TOP = GAME_PIECE_1_POSITION_FROM_TOP;

const GAME_PIECE_3_POSITION_FROM_LEFT = 2 * (GAME_PIECE_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE + VERTICAL_COLUMN_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE);
const GAME_PIECE_3_POSITION_FROM_TOP = GAME_PIECE_1_POSITION_FROM_TOP;




const GAME_PIECE_4_POSITION_FROM_LEFT = GAME_PIECE_1_POSITION_FROM_LEFT;
const GAME_PIECE_4_POSITION_FROM_TOP = GAME_PIECE_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE + HORIZONTAL_ROW_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE;

const GAME_PIECE_5_POSITION_FROM_LEFT = GAME_PIECE_2_POSITION_FROM_LEFT;
const GAME_PIECE_5_POSITION_FROM_TOP = GAME_PIECE_4_POSITION_FROM_TOP;

const GAME_PIECE_6_POSITION_FROM_LEFT = GAME_PIECE_3_POSITION_FROM_LEFT;
const GAME_PIECE_6_POSITION_FROM_TOP = GAME_PIECE_4_POSITION_FROM_TOP;




const GAME_PIECE_7_POSITION_FROM_LEFT = GAME_PIECE_1_POSITION_FROM_LEFT;
const GAME_PIECE_7_POSITION_FROM_TOP = 2 * (GAME_PIECE_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE + HORIZONTAL_ROW_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE);

const GAME_PIECE_8_POSITION_FROM_LEFT = GAME_PIECE_2_POSITION_FROM_LEFT;
const GAME_PIECE_8_POSITION_FROM_TOP = GAME_PIECE_7_POSITION_FROM_TOP;

const GAME_PIECE_9_POSITION_FROM_LEFT = GAME_PIECE_3_POSITION_FROM_LEFT;
const GAME_PIECE_9_POSITION_FROM_TOP = GAME_PIECE_7_POSITION_FROM_TOP;












// File Names
const TITLE_IMAGE_FILE_NAME = 'images/Title.png';
const TEXT_IMAGE_FILE_NAME = 'images/Text.png';
const TYPE_1_O = 'images/Scurlock-O.png';
const TYPE_1_X = 'images/Scurlock-X.png';




// Div Names
const WRAPPER_DIV_ID = '#wrapper' ;
const GAME_BOARD_ID = '#gameBoard' ;
const TITLE_DIV_ID = '#title';
const TEXT_DIV_ID = '#text';
const CREDITS_DIV_ID = '#credits';

const VERTICAL_BAR_1_ID = "#verticalBar1";
const VERTICAL_BAR_2_ID = "#verticalBar2";
const HORIZONTAL_BAR_1_ID = "#horizontalBar1";
const HORIZONTAL_BAR_2_ID = "#horizontalBar2";

const TILE1_BACKGROUND_ID = "#backgroundTile1";
const TILE2_BACKGROUND_ID = "#backgroundTile2";
const TILE3_BACKGROUND_ID = "#backgroundTile3";

const TILE4_BACKGROUND_ID = "#backgroundTile4";
const TILE5_BACKGROUND_ID = "#backgroundTile5";
const TILE6_BACKGROUND_ID = "#backgroundTile6";

const TILE7_BACKGROUND_ID = "#backgroundTile7";
const TILE8_BACKGROUND_ID = "#backgroundTile8";
const TILE9_BACKGROUND_ID = "#backgroundTile9";



const TILE1_ID = "#tile1";
const TILE2_ID = "#tile2";
const TILE3_ID = "#tile3";

const TILE4_ID = "#tile4";
const TILE5_ID = "#tile5";
const TILE6_ID = "#tile6";

const TILE7_ID = "#tile7";
const TILE8_ID = "#tile8";
const TILE9_ID = "#tile9";


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



function sizeAndFitEverything () {
  console.log('heytest!');
  var viewPort = $(window),
      viewPortHeight = viewPort.height(),
      viewPortWidth = viewPort.width(),
      smallestSize;
      
    if (viewPortWidth > viewPortHeight) {
        smallestSize = viewPortHeight;
    } else {
        smallestSize = viewPortWidth;
    }    

    // Step 1: Set Wrapper
    resizeWrapperDiv(viewPortWidth, viewPortHeight, smallestSize);

    // Step 2: Set Game Board
    resizeGameBoardWithinWrapper ();
    
    // Step 3: Set Title
    resizeTitleDivdWithinWrapper ();
    
    // Step 4: Set Text
    resizeTextDivdWithinWrapper ();
    
    // Step 5: Set Credits
    resizeCreditsDivdWithinWrapper ();
    
    
    
    
    
    
    // Temporary
    setGameBoardForPlay ();
    placeGameBackgroundTiles();
    
    
    
}


function resizeWrapperDiv (screemWidth, screenHeight, smallestLengthOrHeight) {
  var distanceFromTop = (screenHeight - smallestLengthOrHeight) / 2;
  var distanceFromLeft = (screemWidth - smallestLengthOrHeight) / 2;
    
  $(WRAPPER_DIV_ID).height(smallestLengthOrHeight);
  $(WRAPPER_DIV_ID).width(smallestLengthOrHeight);
  $(WRAPPER_DIV_ID).css({
    position: 'absolute',
    top: distanceFromTop,
    left: distanceFromLeft,
    'background-color': BACKGROUND_COLOR_ORIGIN,
  });
  
}



function resizeGameBoardWithinWrapper () {
  var gameBoard = $(GAME_BOARD_ID),
      wrapper = gameBoard.parent(),
      parentHeight = wrapper.height(),
      parentWidth = wrapper.width(),
      gameBoardHeight = parentHeight * (GAME_BOARD_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      gameBoardWidth = parentWidth * (GAME_BOARD_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      gameBoardPixelsFromTop = ((GAME_BOARD_POSITION_PERCENT_FROM_TOP_OF_WRAPPER / 100) * parentHeight) + 'px',
      gameBoardPixelsFromLeft = ((GAME_BOARD_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER / 100) * parentWidth) + 'px';
      

  gameBoard.height(gameBoardHeight);
  gameBoard.width(gameBoardWidth);
  gameBoard.css({
    'background-color': GAME_BOARD_COLOR,
    position: 'absolute',
    top: gameBoardPixelsFromTop,
    left: gameBoardPixelsFromLeft,
  });
  
}
      




function resizeTitleDivdWithinWrapper () {
  // 425px Wide x 70 px Tall
  var titleDiv = $(TITLE_DIV_ID),
      wrapper = titleDiv.parent(),
      parentHeight = wrapper.height(),
      parentWidth = wrapper.width(),
      TitleHeight = parentHeight * (TITLE_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      TitleWidth = parentWidth * (TITLE_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      TitlePixelsFromTop = ((TITLE_POSITION_PERCENT_FROM_TOP_OF_WRAPPER / 100) * parentHeight) + 'px',
      TitlePixelsFromLeft = ((TITLE_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER / 100) * parentWidth) + 'px';
      

  titleDiv.height(TitleHeight);
  titleDiv.width(TitleWidth);
  titleDiv.css({
    'background-image': 'url(' + TITLE_IMAGE_FILE_NAME +')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
    position: 'absolute',
    top: TitlePixelsFromTop,
    right: TitlePixelsFromLeft,
    'min-height': TitleHeight + 'px',
    'min-width': TitleWidth + 'px'
  });
  
}






function resizeTextDivdWithinWrapper () {
  // 1311px Wide x 150 px Tall
  var textDiv = $(TEXT_DIV_ID),
      wrapper = textDiv.parent(),
      parentHeight = wrapper.height(),
      parentWidth = wrapper.width(),
      textHeight = parentHeight * (TEXT_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      textWidth = parentWidth * (TEXT_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      textPixelsFromTop = ((TEXT_POSITION_PERCENT_FROM_TOP_OF_WRAPPER / 100) * parentHeight) + 'px',
      textPixelsFromLeft = ((TEXT_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER / 100) * parentWidth) + 'px';
      
  textDiv.height(textHeight);
  textDiv.width(textWidth);

  textDiv.css({
    'background-image': 'url(' + TEXT_IMAGE_FILE_NAME +')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
    position: 'absolute',
    top: textPixelsFromTop,
    left: textPixelsFromLeft,
    'min-height': textHeight + 'px',
    'min-width': textWidth + 'px'
  });
  
}


function resizeCreditsDivdWithinWrapper () {
  var creditsDiv = $(CREDITS_DIV_ID),
      wrapper = creditsDiv.parent(),
      parentHeight = wrapper.height(),
      parentWidth = wrapper.width(),
      creditsHeight = parentHeight * (CREDITS_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      creditsWidth = parentWidth * (CREDITS_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      creditsPixelsFromTop = ((CREDITS_POSITION_PERCENT_FROM_TOP_OF_WRAPPER / 100) * parentHeight) + 'px',
      creditsPixelsFromLeft = ((CREDITS_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER / 100) * parentWidth) + 'px';
      
  creditsDiv.height(creditsHeight);
  creditsDiv.width(creditsWidth);

  creditsDiv.css({
    position: 'absolute',
    bottom: creditsPixelsFromTop,
    right: creditsPixelsFromLeft,
    color: 'white',
    'font-size': '2.5vh',
    'text-align': 'right'
  });
}






























function setGameBoardForPlay () {
  setBarsOnGameBoard ();
}


function setBarsOnGameBoard () {
  var first_vertical = $(VERTICAL_BAR_1_ID),
      second_vertical = $(VERTICAL_BAR_2_ID),
      first_horizontal = $(HORIZONTAL_BAR_1_ID),
      second_horizontal = $(HORIZONTAL_BAR_2_ID),
      game_board = $(GAME_BOARD_ID),
      game_board_width = game_board.width(),
      game_board_height = game_board.height(),
      vertical_column_height = game_board_height * ( VERTICAL_COLUMN_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE /100),
      vertical_column_width = game_board_width * (VERTICAL_COLUMN_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE / 100),
      
      firstVerticalColumnPixelsFromLeftOfGameBoard =  game_board_width * (FIRST_VERTICAL_COLUMN_POSITION_FROM_LEFT_OF_GAME_BOARD / 100) + 'px',
      secondVerticalColumnPixelsFromRightOfGameBoard = game_board_width * (SECOND_VERTICAL_COLUMN_POSITION_FROM_RIGHT_OF_GAME_BOARD / 100) + 'px',
      
      firstVerticalColumnPixelsFromTopOfGameBoard = game_board_height * (FIRST_VERTICAL_COLUMN_POSITION_FROM_TOP_OF_GAME_BOARD / 100) + 'px',
      secondVerticalColumnPixelsFromTopOfGameBoard = game_board_height * (SECOND_VERTICAL_COLUMN_POSITION_FROM_TOP_OF_GAME_BOARD / 100) + 'px',



      horizontal_row_height = game_board_height * ( HORIZONTAL_ROW_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE /100),
      horizontal_row_width = game_board_width * (HORIZONTAL_ROW_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE / 100),
      
      firstHorizontalRowPixelsFromLeftOfGameBoard =  game_board_width * (FIRST_HORIZONTAL_ROW_POSITION_FROM_LEFT_OF_GAME_BOARD / 100) + 'px',
      secondHorizontalRowPixelsFromRightOfGameBoard = game_board_width * (SECOND_HORIZONTAL_ROW_POSITION_FROM_RIGHT_OF_GAME_BOARD / 100) + 'px',
      
      firstHorizontalRowPixelsFromTopOfGameBoard = game_board_height * (FIRST_HORIZONTAL_ROW_POSITION_FROM_TOP_OF_GAME_BOARD / 100) + 'px',
      secondHorizontalRowPixelsFromBottomOfGameBoard = game_board_height * (SECOND_HORIZONTAL_ROW_POSITION_FROM_BOTTOM_OF_GAME_BOARD / 100) + 'px';

      first_vertical.css({
        'background-color': DEFAULT_COLOR_FOR_GAME_BOARD_DIVIDERS,
        position: 'absolute',
        top:  firstVerticalColumnPixelsFromTopOfGameBoard,
        left: firstVerticalColumnPixelsFromLeftOfGameBoard,
        'min-height': vertical_column_height + 'px',
        'min-width': vertical_column_width + 'px'
      });
  
      second_vertical.css({
        'background-color': DEFAULT_COLOR_FOR_GAME_BOARD_DIVIDERS,
        position: 'absolute',
        top:  secondVerticalColumnPixelsFromTopOfGameBoard,
        right: secondVerticalColumnPixelsFromRightOfGameBoard,
        'min-height': vertical_column_height + 'px',
        'min-width': vertical_column_width + 'px'
      });  


      first_horizontal.css({
        'background-color': DEFAULT_COLOR_FOR_GAME_BOARD_DIVIDERS,
        position: 'absolute',
        top:  firstHorizontalRowPixelsFromTopOfGameBoard,
        left: firstHorizontalRowPixelsFromLeftOfGameBoard,
        'min-height': horizontal_row_height + 'px',
        'min-width': horizontal_row_width + 'px'
      });
      
      second_horizontal.css({
        'background-color': DEFAULT_COLOR_FOR_GAME_BOARD_DIVIDERS,
        position: 'absolute',
        bottom:  secondHorizontalRowPixelsFromBottomOfGameBoard,
        left: secondHorizontalRowPixelsFromRightOfGameBoard,
        'min-height': horizontal_row_height + 'px',
        'min-width': horizontal_row_width + 'px'
      });      
}



function placeGameBackgroundTiles () {
  var gameBoard = $(GAME_BOARD_ID),
      gameBoardHeight = gameBoard.height(),
      gameBoardWidth  = gameBoard.width();
  
  for (var i = 1; i <= 9; i++) {
    placeIndividualTile(i, gameBoardHeight, gameBoardWidth);
  }
  

}

function placeIndividualTile(i, gameBoardHeight, gameBoardWidth) {
  var backgroundTileID = window["TILE" + i + "_BACKGROUND_ID"],
      tileID = window["TILE" + i + "_ID"],
      positionFromTop = window["GAME_PIECE_" + i + "_POSITION_FROM_TOP"],
      positionFromLeft = window["GAME_PIECE_" + i + "_POSITION_FROM_LEFT"],
      
      
      backgroundTile = $(backgroundTileID),
      tile = $(tileID),

      tileHeight = (gameBoardHeight * GAME_PIECE_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE / 100),
      tileWidth = (GAME_PIECE_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE / 100 * gameBoardWidth);
      
      
      backgroundTile.css({
        'background-color': TILE_BACKGROUND_COLOR_A,
        top: positionFromTop + '%',
        left: positionFromLeft + '%',
        'min-height': tileHeight + 'px',
        'max-height': tileHeight + 'px',
        'min-width': tileWidth + 'px',
        'max-width': tileWidth + 'px',
        position: 'absolute',
      });

      tile.css({
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        top: positionFromTop + '%',
        left: positionFromLeft + '%',
        'min-height': tileHeight + 'px',
        'max-height': tileHeight + 'px',
        'min-width': tileWidth + 'px',
        'max-width': tileWidth + 'px',
        position: 'absolute',
      });  
  
}



function setTileToMove  (i, image, gameBoardHeight, gameBoardWidth) {
  var tileID = window["TILE" + i + "_ID"],
      positionFromTop = window["GAME_PIECE_" + i + "_POSITION_FROM_TOP"],
      positionFromLeft = window["GAME_PIECE_" + i + "_POSITION_FROM_LEFT"],
      
      
      tile = $(tileID),

      tileHeight = (gameBoardHeight * GAME_PIECE_HEIGHT_AS_PERCENT_OF_GAME_BOARD_SIZE / 100),
      tileWidth = (GAME_PIECE_WIDTH_AS_PERCENT_OF_GAME_BOARD_SIZE / 100 * gameBoardWidth);



      tile.css({
        'background-image': 'url(' + image +')',
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        top: positionFromTop + '%',
        left: positionFromLeft + '%',
        'min-height': tileHeight + 'px',
        'max-height': tileHeight + 'px',
        'min-width': tileWidth + 'px',
        'max-width': tileWidth + 'px',
        position: 'absolute',
      });  
  
}


























$(document).ready(function () {
  // Step 1: Place Components into View
  sizeAndFitEverything();
  
  
  // Step 2: Resize Everything on Resize
  $(window).resize(function () {
      sizeAndFitEverything();
  });
  
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $('#gameBoard').click(function () {
    audio.play();

  });
  playNewGame();

});




















































// Controller
///////////////////////////////////////////////////////////////////////////////
function playNewGame() {
  var randNum = Math.floor(Math.random()*2),
  humanType,
  aiType;

  if (randNum === 1) {
    humanType = "X";
    aiType = "O";
  } else {
    humanType = "O",
    aiType = "X";
  }
  
  var newGame = new gameEngine(humanType, aiType);


console.log(newGame.isGameOver ());
console.log("Game Board: " + newGame.currentGameBoard);
console.log("Available Moves: " + newGame.getAvailableMoves(newGame.currentGameBoard));

  
  newGame.engageTurnEngine ();        
}







function gameEngine (humanType, aiType) {
  this.currentGameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  this.humanType = humanType;
  this.aiType = aiType;
  
  this.turnNumber = 1;
  

  
  this.engageTurnEngine = function () {
    var turnSelection,
        image,
        moveType;
        
    if (this.isMyVictory(this.currentGameBoard, this.humanType)) {
      this.declareHumanVictory ();
    } else if ( this.isMyVictory(this.currentGameBoard, this.aiType) ) {
      this.declareAIVictory ();
    } else if (this.isTie(this.currentGameBoard, this.humanType, this.aiType)) {
      this.declareDraw ();
    }
        
    if (this.turnNumber % 2 === 1) {
      if (this.humanType === "X") {
        turnSelection = this.requestPlayerTurn();
        moveType = 'X';
        image = TYPE_1_X;
      } else {
        turnSelection = this.requestAITurn();
        moveType = 'X';
        image = TYPE_1_X;
      }
    } else {
      if (this.humanType === "O") {
        turnSelection =  this.requestPlayerTurn();
        moveType = 'O';
        image = TYPE_1_O;
      } else {
        turnSelection =  this.requestAITurn();
        moveType = 'O';
        image = TYPE_1_O;
      }
    }
    setTileToMove(turnSelection, image);
    this.currentGameBoard[ Number(turnSelection) -1] = moveType;
    this.turnNumber++;
  };
  
  this.requestPlayerTurn = function () {
    return this.lookForHumanChoice(
      this.getAvailableMoves(this.currentGameBoard)
      );
  };
  
  
  this.lookForHumanChoice = function (arrayOfAvailableOptions) {
    var gameTileID;
    arrayOfAvailableOptions.forEach(function (element, index) {
      gameTileID = window["TILE" + element + "_BACKGROUND_ID"];
      $( gameTileID ).one( "click", function() {
        return $(this).attr( "id" ).match(/\d/);
      });      
    });
  };
  
  
  

  
  this.getAvailableMoves = function (gameBoardArray) {
    var output = [];
    for (var i = 0; i < 9; i++) {
      if( gameBoardArray[i] ===  String(i + 1) ) {output.push(i+1);}
    }
    return output;
  };
  
  
  this.isGameOver = function () {
    
    //this.currentGameBoard
    if ( this.isMyVictory(this.currentGameBoard, this.humanType) || 
         this.isMyVictory(this.currentGameBoard, this.aiType)    ||
         this.isTie(this.currentGameBoard, this.humanType, this.aiType)
      ) {
      return true;
    } else {
      return false;
    }
  }
  
  
  this.isMyVictory = function (gameBoardArray, myType) {
    if ( (gameBoardArray[0] === myType && gameBoardArray[1] === myType && gameBoardArray[2] === myType) ||
         (gameBoardArray[3] === myType && gameBoardArray[4] === myType && gameBoardArray[5] === myType) ||
         (gameBoardArray[6] === myType && gameBoardArray[7] === myType && gameBoardArray[8] === myType) ||
         
         (gameBoardArray[0] === myType && gameBoardArray[3] === myType && gameBoardArray[6] === myType) ||
         (gameBoardArray[1] === myType && gameBoardArray[4] === myType && gameBoardArray[7] === myType) ||
         (gameBoardArray[2] === myType && gameBoardArray[5] === myType && gameBoardArray[8] === myType) ||
         
         (gameBoardArray[0] === myType && gameBoardArray[4] === myType && gameBoardArray[8] === myType) ||
         (gameBoardArray[2] === myType && gameBoardArray[4] === myType && gameBoardArray[6] === myType)
       ) {
         console.log("someone won");
      return true;
    } else {return false;}
  };
  
  this.isTie = function (gameBoardArray, firstType, secondType) {
    if (  ( gameBoardArray[0] === firstType || gameBoardArray[0] === secondType ) &&
          ( gameBoardArray[1] === firstType || gameBoardArray[1] === secondType ) &&
          ( gameBoardArray[2] === firstType || gameBoardArray[2] === secondType ) &&
          
          ( gameBoardArray[3] === firstType || gameBoardArray[3] === secondType ) &&
          ( gameBoardArray[4] === firstType || gameBoardArray[4] === secondType ) &&
          ( gameBoardArray[5] === firstType || gameBoardArray[5] === secondType ) &&
          
          ( gameBoardArray[6] === firstType || gameBoardArray[6] === secondType ) &&
          ( gameBoardArray[7] === firstType || gameBoardArray[7] === secondType ) &&
          ( gameBoardArray[8] === firstType || gameBoardArray[8] === secondType ) 
      ) {
      return true;
    } else {return false;}
  };
  
  
  
  this.requestAITurn = function () {
    var availableMoves = this.getAvailableMoves(this.currentGameBoard),
        selection = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        
    return selection;
  };
  
  this.declareHumanVictory = function () {
    
  };
  
  this.declareAIVictory = function () {
    
  };
  
  this.declareDraw = function () {
    
  };
  
  
  
}



// Easy Mode