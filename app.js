/* Functions that are returning React components need to be capitalized in order to be referenced with XML syntax */

function Header(props){

    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            {/* Component composition */}
            <Counter score={ props.score }/>
        </div>
    );
}

function Counter(props) {

    return (
        <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">
                    { props.score }
                </span>
                <button className="counter-action increment">+</button>
        </div>
    );

}

function App(){
    return (     
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={987}/> 
            {/* List of players: */}    
            <Player name="Balazs" score={99}/>
            <Player name="Aasd" score={84}/>
            <Player name="Yyxc" score={54}/>
            <Player name="Qertz" score={64}/>
            <Player name="Hgfsda" score={87}/>
        </div>           
    );
}

// ReactDOM provides render function to create a DOM element from the React element
setTimeout(()=>{
ReactDOM.render(
    <App />,
    document.getElementById("root")
)},
335);