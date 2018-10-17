import React from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Logo from './logo.png';
import ShowFilms from './ShowFilms';
import ShowPeople from './ShowPeople';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: [],
            shownFilms: false,
            shownPeople: false
        };
    }

    makeHeader() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <img 
                className="card-img-top p-3" 
                src={Logo}
                alt="logo"
                style={{ width: "1100px", height: "400px" }} />
            </div>
        )
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => {
            this.setState({
                films: obj
            })
        })
        
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj2 => {
            this.setState({
                people: obj2
            })
        })
    }

    toggleFilms() {
		this.setState({
            shownFilms: !this.state.shownFilms
		});
    }

    togglePeople() {
		this.setState({
            shownPeople: !this.state.shownPeople
		});
    }
    
    renderFilms() {
        if (this.state.shownFilms) {
            return <ShowFilms films={this.state.films} />;
        }
    }

    renderPeople() {
        if (this.state.shownPeople) {
            return <ShowPeople people={this.state.people} />;
        }
    }

    render() {
        return (
            <React.Fragment>
                { this.makeHeader() }

                <div className="d-flex justify-content-center m-3">
                    <button className="d-flex btn btn-outline-danger justify-item-center m-3" onClick={this.toggleFilms.bind(this)}>Load Films</button>
                    <button className="d-flex btn btn-outline-danger justify-item-center m-3" onClick={this.togglePeople.bind(this)}>Load People</button>
                </div>
                
                { this.renderFilms() }
                { this.renderPeople() }

            </React.Fragment>
        )
    }
}

export default App;