window.onload = function() {
    const cards_player = {
    ".\\6_of_hearts.png" : 6,
    ".\\7_of_hearts.png" : 7,
    ".\\8_of_hearts.png" : 8,
    ".\\9_of_hearts.png" : 9,
    ".\\10_of_hearts.png" : 10,
    ".\\jack_of_hearts2.png" : 2,
    ".\\queen_of_hearts2.png" : 3,
    ".\\king_of_hearts2.png" : 4,
    ".\\ace_of_hearts.png" : 11,
};

    const cards_computer = {
    ".\\6_of_spades.png": 6,
    ".\\7_of_spades.png" : 7,
    ".\\8_of_spades.png" : 8,
    ".\\9_of_spades.png" : 9,
    ".\\10_of_spades.png":10,
    ".\\jack_of_spades2.png" : 2,
    ".\\queen_of_spades2.png" : 3,
    ".\\king_of_spades2.png" : 4,
    ".\\ace_of_spades2.png" : 11,
};

    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");

    var img1 = document.getElementById("card_player1");
    var img2 = document.getElementById("card_player2");
    var img3 = document.getElementById("card_player3");

    var img4 = document.getElementById("card_player4");
    var img5 = document.getElementById("card_player5");
    var img6 = document.getElementById("card_player6");

    function GetRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let player = 0, computer = 0, score_player = 1, score_computer = 0, who_has_won = 0;
    card1.onclick = function() {

        player = GetRandom(0, 8);
        computer = GetRandom(0, 8);

        img1.setAttribute("src", Object.keys(cards_player)[player]);
        img4.setAttribute("src", Object.keys(cards_computer)[computer]);

        score_player += Object.values(cards_player)[player];
        score_computer += Object.values(cards_computer)[computer];
        console.log(score_player);
        console.log(score_computer);

        card1.style.pointerEvents = "none";

        who_has_won++;
        whoHasWon();
    }

    card2.onclick = function() {

        player = GetRandom(0, 8);
        computer = GetRandom(0, 8);

        img2.setAttribute("src", Object.keys(cards_player)[player]);
        img5.setAttribute("src", Object.keys(cards_computer)[computer]);

        score_player += Object.values(cards_player)[player];
        score_computer += Object.values(cards_computer)[computer];
        console.log(score_player);
        console.log(score_computer);

        card2.style.pointerEvents = "none";
        who_has_won++;
        whoHasWon();
    }

    card3.onclick = function() {

        player = GetRandom(0, 8);
        computer = GetRandom(0, 8);

        img3.setAttribute("src", Object.keys(cards_player)[player]);
        img6.setAttribute("src", Object.keys(cards_computer)[computer]);

        score_player += Object.values(cards_player)[player];
        score_computer += Object.values(cards_computer)[computer];

        console.log(score_player);
        console.log(score_computer);

        card3.style.pointerEvents = "none";
        who_has_won++;
        console.log(who_has_won);
        whoHasWon();
    }

function whoHasWon()
{
    if(who_has_won == 3)
    {
        if(score_player > score_computer)
        {
           alert("Player Won");
        }
        else if(score_player < score_computer)
        {
            alert("Computer Won");
        }
        else 
        {
            alert("Draw");
        }
    }
}

}
