import { useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = ({
    games,
    addComment
}) => {
    const { gameId } = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: ''
    })

    const game = games.find(game => game._id == gameId);

    const onChangeHandler = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name] : e.target.value
        }));
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
       
        addComment(gameId,`${comment.username}: ${comment.comment}`)

    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel:{game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no games in the database */}
                    <p className="no-comment">No comments.</p>
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input
                        type="text"
                        name='username'
                        placeholder='Ivan Ivanov' 
                        onChange={onChangeHandler}
                        value={comment.username}/>


                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        onChange={onChangeHandler}
                        value={comment.comment}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}

export default GameDetails;