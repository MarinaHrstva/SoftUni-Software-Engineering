class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        listOfArticles = [];
        guests = []
    }

    //     addArticle( articleModel, articleName, quantity )
    //  This method adds article to the art gallery. Method accepts 3 arguments:
    // o	articleModel (string);
    // o	articleName (string);

    // Note that the resulting articleModel argument can be submitted in both lowercase and uppercase letters and will be correct, and no error should be thrown see the example below: 
    // articleModel - ("picture") ->correct
    // articleModel - ("Picture") ->correct
    // articleModel - ("PICTURE") ->correct
    // •	If the articleName already exists in listOfArticles array and the articleModel 
    // is the same just add the new quantity to the old one.
    // •	Otherwise, should add the articleModel, articleName, quantity to listOfArticles array in following format: {articleModel, articleName, quantity}. The articleModel must be toLowerCase().
    // •	And finally, return the following message:
    // "Successfully added article {articleName} with a new quantity- {quantity}."

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!')
        }
    }

}