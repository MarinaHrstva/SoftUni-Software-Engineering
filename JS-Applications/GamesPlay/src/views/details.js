import { createComment, deleteGame, getAllGames, getComments, getGameById } from "../api/games.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";


const detailsTemplate = (game, isOwner, onDelete,userData, comments, onComment,commentDetails) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src="images/MineCraft.png" />
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: ${game.maxLevel}</span>
                <p class="type">${game.category}</p>
            </div>
            <p class="text">
                ${game.summary}
            </p>

            <div class="details-comments">
                <h2>Comments:</h2>
             ${comments.length==0
                ? html `<p class="no-comment">No comments.</p>`
                :html `<ul>${comments.map(commentDetails)}</ul>` 
                }
        
            </div>
    
            ${isOwner 
                ? html`
                    <div class="buttons">
                        <a href="/edit/${game._id}" class="button">Edit</a>
                        <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                     </div>`
                : ''}
    
        </div>
    
     
        ${userData && !isOwner
        ? html `
            <article class="create-comment">
                <label>Add new comment:</label>
                    <form class="form" @submit=${onComment}>
                        <textarea name="comment" placeholder="Comment......"></textarea>
                            <input class="btn submit" type="submit" value="Add Comment">
                        </form>
           </article>`
        : ''
    }
         
    </section>
  `

const commentDetails=(comment)=>    html` <li class="comment"> <p>Content: ${c}</p></li>`

export async function detailsView(ctx) {
    const game = await getGameById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData?.id == game._ownerId;
    const comments= await getComments(ctx.params.id);
    console.log(comments);
 
    ctx.render(detailsTemplate(game, isOwner, onDelete,userData,comments,onComment));

    async function onComment(e){
        e.preventDefault()
        const commentText= new FormData(e.target).get('comment')
        const comment={
            gameId:ctx.params.id,
            comment:commentText
          }

        await createComment(comment)

        ctx.page.redirect(`/games/${ctx.params.id}`);


    }

    async function onDelete(){

        const choice= confirm('Are you sure?');

        if(choice){
            await deleteGame(ctx.params.id)
            ctx.page.redirect('/');
        }

    }
}