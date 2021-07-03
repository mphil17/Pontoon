yourCards = [];
total = 0;

function initialCardPick(){
    let card1 = Math.floor((Math.random() * 13) + 1);
    document.getElementById("cardHolder").innerHTML = card1;
    let card2 = Math.floor((Math.random() * 13) + 1);
    document.getElementById("cardHolder2").innerHTML = card2;
    document.getElementById("start").disabled = true;
    if (card1 > 10) {
        card1 = 10;
    }
    else {
        card1 = card1;
    }
    if (card2 > 10) {
        card2 = 10;
    }
    else {
        card2 = card2;
    }
    yourCards.push(card1, card2)
    document.getElementById("currentCards").innerHTML = yourCards;
    addCards();
}

function cardPick(){
    let card = Math.floor((Math.random() * 13) + 1);
    document.getElementById("cardHolder").innerHTML = card;
    if (card > 10) {
        card = 10;
    }
    else {
        card = card;
    }
    yourCards.push(card)
    document.getElementById("currentCards").innerHTML = yourCards;
    addCards();
}

function addCards() {
    let total = yourCards.reduce((a, b) => {
        return a + b;
      });
      document.getElementById("currentTotal").innerHTML = total;
      if (total > 21){
        document.getElementById("bust").innerHTML = "BUST";
        document.getElementById("twist").disabled = true;

      }
      else {
        document.getElementById("bust").innerHTML = "";
      }
}

function stick() {
    document.getElementById("twist").disabled = true;
    document.getElementById("finalTotal").innerHTML = document.getElementById("currentTotal").innerHTML;
}

function restart() {
    document.getElementById("twist").disabled = false;
    yourCards.splice(0, yourCards.length);
    document.getElementById("finalTotal").innerHTML = "";
    initialCardPick();
}