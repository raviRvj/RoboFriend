import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';
// import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <React.StrictMode>
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange}/><br />
                    <Scroll>
                        <CardList rob={filteredRobots} />
                    </Scroll>
                </div>
            </React.StrictMode >
        );
    }
}

export default App;
