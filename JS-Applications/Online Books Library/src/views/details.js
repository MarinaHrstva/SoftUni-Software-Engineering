
import { deleteBook, getAllLikes, getBookById, getLikesByUserId, likeBook } from "../api/books.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";



const detailsTemplate = (book, isOwner, onDelete,likes,isLiked,isLogin,onLike) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                  ${isOwner
                        ? html `<a class="button" href="/edit/${book._id}">Edit</a>
                                <a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>`
                        :''}
                    
        
                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${!isOwner &&isLogin &&!isLiked
                    ?html `<a class="button" href="javascript:void(0)" @click=${onLike} id="likeBtn" >Like</a> `
                    :''}
                    
        
                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`

export async function detailsView(ctx) {
    const userData = getUserData();
    const isLogin=Boolean(userData?.email);
    const book = await getBookById(ctx.params.id);
    const likes= await getAllLikes(ctx.params.id);
    let isLiked='';
    
   if(userData?.email){
    let currentLikes=await getLikesByUserId(ctx.params.id, userData.id);
    isLiked=Boolean(currentLikes);
   } 

    const isOwner = userData?.id == book._ownerId;

    ctx.render(detailsTemplate(book, isOwner, onDelete,likes, isLiked, isLogin,onLike));

    async function onDelete() {

        const choice = confirm('Are you sure you want to delete this book?');

        if (choice) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/');
        }

    }

    async function onLike(){
     await likeBook(ctx.params.id);
     ctx.page.redirect('/books/'+ctx.params.id);
    }

}