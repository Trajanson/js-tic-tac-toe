// DEBUGGER
var debugCounter = 0;
///////////////////////////////////////////////////////////////////////////

var audio = new Audio('sounds/magic-burst.wav');
var gameOverAudio = new Audio('sounds/youLose.wav');





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

const NEW_GAME_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE = 40;
const NEW_GAME_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE = NEW_GAME_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE * (156/650);


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

const NEW_GAME_POSITION_PERCENT_FROM_BOTTOM_OF_WRAPPER = 0;
const NEW_GAME_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER = 0;


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
const REPLAY_IMAGE_FILE_NAME = 'images/newGame.png';




// Div Names
const WRAPPER_DIV_ID = '#wrapper' ;
const GAME_BOARD_ID = '#gameBoard' ;
const TITLE_DIV_ID = '#title';
const TEXT_DIV_ID = '#text';
const CREDITS_DIV_ID = '#credits';
const REPLAY_DIV_ID = '#playAgainRequest';


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
    
    // Step 6: Set Credits
    resizeTNewGameDivdWithinWrapper ();
    
    
    
    
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


function resizeTNewGameDivdWithinWrapper () {
  // 650px Wide x 156 px Tall
  var newGameDiv = $(REPLAY_DIV_ID),
      wrapper = newGameDiv.parent(),
      parentHeight = wrapper.height(),
      parentWidth = wrapper.width(),
      textHeight = parentHeight * (NEW_GAME_HEIGHT_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      textWidth = parentWidth * (NEW_GAME_WIDTH_AS_PERCENT_OF_WRAPPER_SIZE / 100),
      textPixelsFromBottom = ((NEW_GAME_POSITION_PERCENT_FROM_BOTTOM_OF_WRAPPER / 100) * parentHeight) + 'px',
      textPixelsFromLeft = ((NEW_GAME_POSITION_PERCENT_FROM_LEFT_OF_WRAPPER / 100) * parentWidth) + 'px';
      
  newGameDiv.height(textHeight);
  newGameDiv.width(textWidth);

  newGameDiv.css({
    'background-image': 'url(' + REPLAY_IMAGE_FILE_NAME +')',
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
    position: 'absolute',
    bottom: textPixelsFromBottom,
    left: textPixelsFromLeft,
    'min-height': textHeight + 'px',
    'min-width': textWidth + 'px',
    cursor: 'pointer',
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
        position: 'absolute'
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
        cursor: 'pointer'
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

function hideTile(i) {
  var tileID = window["TILE" + i + "_ID"],
      tile = $(tileID);
      tile.css({
        'background-image': 'initial',
        cursor: 'pointer',
      })
      
}


























$(document).ready(function () {
  // Step 1: Place Components into View
  sizeAndFitEverything();
  
  
  // Step 2: Resize Everything on Resize
  $(window).resize(function () {
      sizeAndFitEverything();
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


function gameEngine(humanType, aiType) {
  this.currentGameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  this.hardSettingChoice;
  
  // 'X' or 'O'
  this.humanType = humanType; 
  this.aiType = aiType;
 
  this.engageTurnEngine = function() {
  $(REPLAY_DIV_ID).hide();
    
    var image,
        moveType;
        
    if (this.isGameOver() ) {
      return this.declareGameOver();
    } else {
      if (this.turnNumber() % 2 === 1) {
        console.log("This was hit on odd turn.");
        if (this.humanType === "X") {
          moveType = 'X';
          image = TYPE_1_X;
          this.requestPlayerTurn(moveType, image);
        } else {
          moveType = 'X';
          image = TYPE_1_X;
          this.requestAITurn(moveType, image);
        }
      } else {
        if (this.humanType === "O") {
          moveType = 'O';
          image = TYPE_1_O;        
          this.requestPlayerTurn(moveType, image);
        } else {
          moveType = 'O';
          image = TYPE_1_O;        
          this.requestAITurn(moveType, image);
        }
      }
    }
    
  } ;
  
  
  this.requestPlayerTurn = function(moveType, image) {
    console.log("It's the human's turn!");
    
    var arrayOfAvailableOptions = this.getAvailableMoves(this.currentGameBoard),
        gameTileID,
        selection,
        clickElements= window["TILE" + arrayOfAvailableOptions[0] + "_ID"],
        newElement,
        context = this; 

        console.log(arrayOfAvailableOptions);

        for (var i = 1; i < arrayOfAvailableOptions.length; i++) {
          newElement = window["TILE" + arrayOfAvailableOptions[i] + "_ID"];
          clickElements += ", " + (newElement);
        }

      $( clickElements ).one( "click", function(event) {
        $(clickElements).off("click");
        console.log("CLICK EVENT OCCURED");
        console.log("Turn#: " + context.turnNumber() );
        selection = $(this).attr( "id" ).match(/\d/)[0];
        setTileToMove(selection, image);
        console.log(context.currentGameBoard);
        context.currentGameBoard[ Number(selection) -1] = moveType;
        audio.play();
        $(this).css({'cursor': 'inherit'});
        
        context.engageTurnEngine();        
      });   


        
        
  };
  
  
  
  
  this.placePlayerTurnRequest = function() {
    
  };
















  
  this.requestAITurn = function(moveType, image) {
    console.log("It's the AI's turn!");
    
    var selection   = this.engageAIAlgorithm(),
        handler     = window["TILE" + selection + "_ID"];
    
    console.log("AI chooses " + selection);
    
    this.currentGameBoard[ Number(selection) -1] = moveType;
    setTileToMove(selection, image);
    $(handler).css({'cursor': 'inherit'});

    this.engageTurnEngine();    
    
  };
  
  this.engageAIAlgorithm = function() {
    if (this.turnNumber() === 1) {
      console.log("AI makes first turn!");
      return String([1,3,7,9][Math.floor(Math.random() * 4)]);
    } else if (this.turnNumber() === 2) {
      console.log("AI makes second turn!");
      return String(this.secondAIMove());
    }
    
    
    this.engageMiniMax(this.currentGameBoard);
    var choiceToMake = this.hardSettingChoice + 1;
    console.log("MiniMax Algorithm chose: " + choiceToMake );
    
    return String(choiceToMake);
  };
  
  
  
  
  
  
  
  
  this.declareGameOver = function() {  
    if (this.isMyVictory(this.currentGameBoard, this.humanType)) {
      return this.declareHumanVictory ();
    } else if ( this.isMyVictory(this.currentGameBoard, this.aiType) ) {
      return this.declareAIVictory ();
    } else if (this.isTie(this.currentGameBoard, this.humanType, this.aiType)) {
      return this.declareDraw ();
    }          
  };
 
  this.declareHumanVictory = function () {
    console.log("Human wins!");  
  };
  
  this.declareAIVictory = function () {
    console.log("AI Wins!");
    this.offerNewGame();
  };
  
  this.declareDraw = function () {
    console.log("Oh noes, it's a draw!");
    this.offerNewGame();
  }; 
 
 this.offerNewGame = function() {
   gameOverAudio.play();
   var replayButton = $(REPLAY_DIV_ID);
   replayButton.fadeIn(2000);
   replayButton.one("click", function() { 
     this.currentGameBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     this.clearGameBoard();
     this.setGamePositions();
     setTimeout(function() {
       this.engageTurnEngine();
     }.bind(this), 100)
   }.bind(this));
 };
 
 this.setGamePositions = function() {
     var randNum = Math.floor(Math.random()*2),
     humanType,
     aiType;
  
     if (randNum === 1) {
       humanType = "X";
       aiType = "O";
     } else {
       humanType = "O",
       aiType    = "X";
     }   
 }
 
 this.clearGameBoard = function() {
   ['1','2','3','4','5','6','7','8','9'].forEach(function(element) {
     hideTile(element);
   });
 }
 
 
 
 
 // AI TURN MAKING /////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////// 
  this.scoreInput = function (gameBoardArray, myType, otherType, turnNumber) {
    if ( this.isMyVictory(gameBoardArray, myType) ) {
      return 100 + turnNumber;
    } else if ( this.isMyVictory(gameBoardArray, otherType) ) {
      return -100 + turnNumber;
    } else if ( this.isTie(gameBoardArray, myType, otherType) ) {
     return 0 + turnNumber; 
    } else {return 0;}
  };

  this.secondAIMove = function () {
    var openSquares = this.getAvailableMoves(this.currentGameBoard);
    console.log(openSquares);
    
    if (       compareObjects( openSquares, ["1","2","3","4","5","6","7","8"] )  ) {
      return 5;
    } else if (compareObjects( openSquares, ["1","2","3","4","5","6","7","9"] )) {
      return 2;
    } else if (compareObjects( openSquares, ["1","2","3","4","5","6","8","9"] )) {
      return 5;
      
      
      
    } else if (compareObjects( openSquares, ["1","2","3","4","5","7","8","9"] )) {
      return 3;
    } else if (compareObjects( openSquares, ["1","2","3","4","6","7","8","9"] )) {
      return 1;
    } else if (compareObjects( openSquares, ["1","2","3","5","6","7","8","9"] )) {
      return 1;
      
      
      
      
    } else if (compareObjects( openSquares, ["1","2","4","5","6","7","8","9"] )) {
      return 5;
    } else if (compareObjects( openSquares, ["1","3","4","5","6","7","8","9"] )) {
      return 1;
    } else if (compareObjects( openSquares, ["2","3","4","5","6","7","8","9"] )) {
      return 5;
    }
    console.log("THERE WAS A MAJOR ERROR IN AI SECOND TURN PICKER")
  };
































  // Credit for Mini-Max Algorithm to http://neverstopbuilding.com/minimax
  this.engageMiniMax = function (game_board) {
    // console.log("Current Game Board: " + game_board);
    debugCounter++;
    // console.log("DEBUG COUNTER: " + debugCounter);
    // base case
    if (
      this.isMyVictory(game_board, this.humanType) ||
      this.isMyVictory(game_board, this.aiType) ||
      this.isTie(game_board, this.humanType, this.aiType)
      ) {
      // console.log("Returning due to game over!")
      return this.scoreInput(game_board, this.aiType, this.humanType, this.calculateTurn(game_board));
    }
    var scores = [],
        moves  = [];
    
    this.getAvailableMoves(game_board).forEach(function (element, index, array) { // Array["1", "3", "9"]
      // console.log("Element in recursion: " + element);
      // console.log("Typeof Element in recursion: " + typeof element);
      
      var move = Number(element) - 1, // 0..8
          possibleGame = game_board.slice(0);
      // console.log(this);
      if ( this.isTheTurnOfThisAI(possibleGame)  ) {
        possibleGame[move] = this.aiType;
      } else {
        possibleGame[move] = this.humanType;
      }
      var newScores = this.engageMiniMax(possibleGame);
      // console.log("The new scores: " + newScores);
      if (newScores) {
        scores.push( newScores );
        moves.push(move);
      }
      // console.log("Scores through iteration: " + scores);
    }.bind(this));
    
    
    // Min or Max Calculation
    if ( this.isTheTurnOfThisAI(game_board)  ) {
      var scoreMax,
          indexOfScoreMax;
          
          scoreMax        = function getMaxOfArray(scores) {
                            return Math.max.apply(null, scores);
                          } (scores);
          
          indexOfScoreMax = scores.indexOf(scoreMax);
          
      // console.log("scores: " + scores);
      // console.log("ScoreMax: " + scoreMax);
      // console.log("indexOfScoreMax: " + indexOfScoreMax);
      this.hardSettingChoice = moves[indexOfScoreMax];
      // console.log("HARD SETTING CHOICE IS: " + this.hardSettingChoice);
      return scores[indexOfScoreMax];
    } else {
      var scoreMin,
          indexOfScoreMin;
          scoreMin        = function getMaxOfArray(scores) {
                            return Math.min.apply(null, scores);
                          } (scores);
          
          indexOfScoreMin = scores.indexOf(scoreMin);
      // console.log("scores: " + scores);
      // console.log("scoreMin: " + scoreMin);
      // console.log("indexOfScoreMin: " + indexOfScoreMax);
      this.hardSettingChoice = moves[indexOfScoreMin];
      // console.log("HARD SETTING CHOICE IS: " + this.hardSettingChoice);
      return scores[indexOfScoreMin];      
    }
  };
  
  this.isTheTurnOfThisAI = function (gameBoardArray) {
    if ( this.calculateTurn(gameBoardArray) % 2 === 1 ) {
      if (this.aiType === "X") {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.aiType === "X") {
        return false;
      } else {
        return true;
      }      
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 // HELPER FUNCTIONS ///////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////
 
 // Identifying Turn Number
  this.calculateTurn = function (gameBoardArray) {
    var calculatedTurn = 1;
    for (var i = 0; i < gameBoardArray.length; i++) {
      if ( gameBoardArray[i] !== String(i+1) ) {
        calculatedTurn++;
      }
    }
    return calculatedTurn;
  }; 


  this.turnNumber = function () {
    return this.calculateTurn(this.currentGameBoard);
  };  
  
  
  
  
  // Reading Current Board
  this.getAvailableMoves = function (gameBoardArray) { // returns Array["1", "3", "9"]
    var output = [];
    for (var i = 0; i < 9; i++) {
      if( gameBoardArray[i] ===  String(i + 1) ) {output.push(String(i+1));}
    }
    return output;
  };
  
  
  
  
  
  // Analyzing Current Board
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
  };
  
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
    
  
  
  
}









































// Utility Functions
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


function compareObjects(o, p)
{
    var i,
        keysO = Object.keys(o).sort(),
        keysP = Object.keys(p).sort();
    if (keysO.length !== keysP.length)
        return false;//not the same nr of keys
    if (keysO.join('') !== keysP.join(''))
        return false;//different keys
    for (i=0;i<keysO.length;++i)
    {
        if (o[keysO[i]] instanceof Array)
        {
            if (!(p[keysO[i]] instanceof Array))
                return false;
            //if (compareObjects(o[keysO[i]], p[keysO[i]] === false) return false
            //would work, too, and perhaps is a better fit, still, this is easy, too
            if (p[keysO[i]].sort().join('') !== o[keysO[i]].sort().join(''))
                return false;
        }
        else if (o[keysO[i]] instanceof Date)
        {
            if (!(p[keysO[i]] instanceof Date))
                return false;
            if ((''+o[keysO[i]]) !== (''+p[keysO[i]]))
                return false;
        }
        else if (o[keysO[i]] instanceof Function)
        {
            if (!(p[keysO[i]] instanceof Function))
                return false;
            //ignore functions, or check them regardless?
        }
        else if (o[keysO[i]] instanceof Object)
        {
            if (!(p[keysO[i]] instanceof Object))
                return false;
            if (o[keysO[i]] === o)
            {//self reference?
                if (p[keysO[i]] !== p)
                    return false;
            }
            else if (compareObjects(o[keysO[i]], p[keysO[i]]) === false)
                return false;//WARNING: does not deal with circular refs other than ^^
        }
        if (o[keysO[i]] !== p[keysO[i]])//change !== to != for loose comparison
            return false;//not the same value
    }
    return true;
}