let model = {
    boardsize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,

    ships:[
        {locations: [0,0,0], hits: ["","",""]},
        {locations: [0,0,0], hits: ["","",""]},
        {locations: [0,0,0], hits: ["","",""]}
    ],

    fire: function(guess) {

    },

    isSunk: function(ship) {

    },

    generateShipLocations: function() {

    },

    generateShip: function() {
        let direction = Math.floor(Math.random() * 2)
        let row, col;

        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * 
            (this.boardSize - this.shipLength + 1));
        }

        else { // vertical
            row = Math.floor(Math.random() *
            (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize)
        }

        let newShipLocations = [];
        for (let i = 0; i < this.shipLength; i++) {
            if (direction == 1 )
        }
    },

    collision: function(location) {

    }
};

let view = {
    displyMessage: function(msg) {
        let messageArea = document.getElementById("messageArea")
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {

    },

    displayMiss: function(location) {

    }
};

let controller = {
    guesses: 0,

    processGuess: function(guess) {

    }
}

// helper function to parse a guess from the user
function parseGuess(guess) {

}

// event handlers
function handleFireButton() {

}

function handleKeyPress(e) {

}

// init - called when the page has completed loading