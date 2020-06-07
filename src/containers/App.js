import React from 'react';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../css/App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(respose => respose.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.length) {
            return (
                <div>
                    <Scroll>
                        <header>
                            <h1> robofriends</h1>
                            <SearchBox searchChange={this.onSearchChange} />
                        </header>
                    </Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </div>
            )
        } else {
            return <h1> Loading.. </h1>
        }
    }
};

export default App;