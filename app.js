/* Functions that are returning React components need to be capitalized in order to be referenced with XML syntax */

function Header(props) {

    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button onClick={() => props.removePlayer(props.id)} className="remove-player">✖</button>
                {props.name}
            </span>
            {/* Component composition */}
            <Counter score={props.score} />
        </div>
    );
}

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            score: 0
        };
    }

    decrementScore = () => {
        if (this.state.score > 0) {
            this.setState((prevState) => {
                return {
                    score: prevState.score - 1
                };
            });
        }
    }

    incrementScore = () => {
        if (this.state.score < 1000) {
            this.setState((prevState) => {
                return {
                    score: prevState.score + 1
                };
            });
        }
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.decrementScore} className="counter-action decrement">-</button>
                <span className="counter-score">
                    {this.state.score}
                </span>
                <button onClick={this.incrementScore} className="counter-action increment">+</button>
            </div>
        );
    }
}


class App extends React.Component {

    state = {
        players: [{
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
        }]
    };

    handleRemovePlayer = (id) => {
        this.setState((prevState) => {
            return {
                players: prevState.players.filter(p => p.id != id)
            };
        }
        );
    };

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length} />
                {/* List of players: */}
                {
                    this.state.players.map(
                        (player) => {
                            return (
                                <Player
                                    name={player.name}
                                    score={player.score}
                                    key={player.id.toString()} 
                                    id={player.id} 
                                    removePlayer={this.handleRemovePlayer}
                                />
                            );
                        }
                    )
                }

            </div>
        );
    }
}


// ReactDOM provides render function to create a DOM element from the React element
setTimeout(() => {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    )
},
    335);