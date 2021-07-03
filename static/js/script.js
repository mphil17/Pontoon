yourCards = [];

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

function restart() {
    document.getElementById("twist").disabled = false;
    yourCards.splice(0, yourCards.length);
    cardPick();
}