function deckOfCards(cards) {
    let invalidCard = '';
    try {
       
        for (const line of card) {
            invalidCard=line
createCard(line[0],line[1])
        }
    } catch (error) {
    console.log(`Invalid card: ${invalidCard}`);
}



    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }

        if (!suits[suit]) {
            throw new Error('Invalid suit!')
        }
        if (!faces.includes(face)) {
            throw new Error('Invalid face!')

        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit
            }
        }
    }

}

deckOfCards(['AS', '10D', 'KH', '2C'])
deckOfCards(['5S', '3D', 'QD', '1C'])
