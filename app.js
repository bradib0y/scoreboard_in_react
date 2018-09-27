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

function App(props){
    return (     
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}/> 
            {/* List of players: */}  
            {
                props.initialPlayers.map(
                    (player) => {
                        return (
                            <Player 
                                name={player.name} 
                                score={player.score} 
                                key={player.id.toString()}
                            />
                        );
                    }
                )
            }
          
        </div>           
    );
}

const players =   [{
    id: 1,
    name: "Guil",
    score: 50
  },
  {
    id: 2,
    name: "Treasure",
    score: 85
  },
  {
    id: 3,
    name: "Ashley",
    score: 95
  },
  {
    id: 4,
    name: "James",
    score: 80
  }];

// ReactDOM provides render function to create a DOM element from the React element
setTimeout(()=>{
ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById("root")
)},
335);