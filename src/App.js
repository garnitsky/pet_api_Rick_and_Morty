import { Component } from 'react';
import './App.css';
import CharList from './components/charList/charList';
import Header from './components/header/header';
import RandomChar from './components/randomChar/randomChar';

class App extends Component() {
    render() {
        return (
            <div className="App">

                <Header />
                <RandomChar />
                <CharList />

            </div>
        );
    }

}

export default App;
