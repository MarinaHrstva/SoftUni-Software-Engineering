class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!')
        }

        let existArticle = this.listOfArticles.find(a => a.articleModel == articleModel && a.articleName == articleName);

        if (existArticle) {
            existArticle.quantity += quantity;
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity });

        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let existGuest = this.guests.find(g => g.guestName == guestName);

        if (existGuest) {
            throw new Error(`${guestName} has already been invited.`)

        } else {
            let pointsObj = {
                'Vip': 500,
                'Middle': 250,
                'Normal': 50
            }

            this.guests.push({
                guestName,
                points: pointsObj[personality],
                purchaseArticle: 0
            })

            return `You have successfully invited ${guestName}!`
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        let surchedAtricle = this.listOfArticles.find(a => a.articleName == articleName && a.articleModel == articleModel)
        let guest = this.guests.find(g => g.guestName == guestName);

        if (!surchedAtricle) {
            throw new Error('This article is not found.')
        }

        if (surchedAtricle.quantity == 0) {
            return `The ${articleName} is not available.`
        }

        if (!guest) {
            return 'This guest is not invited.'
        }

        let neededPoints = this.possibleArticles[articleModel];

        if (guest.points >= neededPoints) {
            guest.points -= neededPoints;
            guest.purchaseArticle++;
            surchedAtricle.quantity--

            return `${guestName} successfully purchased the article worth ${neededPoints} points.`
        } else {
            return 'You need to more points to purchase the article.'
        }
    }

    showGalleryInfo(criteria) {
        if (criteria == 'article') {
            let result = ['Articles information:']

            for (const obj of this.listOfArticles) {
                result.push(`${obj.articleModel} - ${obj.articleName} - ${obj.quantity}`)

            }

            return result.join('\n')

        } else if (criteria == 'guest') {
            let result = ['Guests information:']
            for (const g of this.guests) {
                result.push(`${g.guestName} - ${g.purchaseArticle}`)
            }

            return result.join('\n')

        }
    }

}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
