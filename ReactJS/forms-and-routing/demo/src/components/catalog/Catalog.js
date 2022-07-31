import GameItem from "./GameItem";


function Catalog(
    {games}
) {

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
                    {
                games.length > 0
                    ? games.map(game => <GameItem game={game} key={game._id} />)
                    : < p className="no-articles">No games yet</p>
            }
            {/* <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div>
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                </div>
            </div> */}
            {/* Display paragraph: If there is no games  */}
        
        </section>
    )
}

export default Catalog;