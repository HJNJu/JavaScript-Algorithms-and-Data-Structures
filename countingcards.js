/*
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck.
This is called Card Counting.
Having more high cards remaining in the deck favors the player.
Each card is assigned a value according to the table below.
When the count is positive (2, 3, 4, 5, 6), the player should bet high.
When the count is zero (7, 8, 9) or negative (10, J, Q, K, A), the player should bet low.
*/

let count = 0;

function cc(card) {

    if (card > 1 && card < 7 ){
      count++;
    }
    else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
      count--;
    }
    else {
      count;
    }
    if (count <= 0) {
      return count + ' Hold';
    }
    else {
      return count + ' Bet';
    }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');