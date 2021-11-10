
import { Component } from 'react';
import './App.css';
import CharList from './components/charList/charList';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import Header from './components/header/header';
import RandomChar from './components/randomChar/randomChar';

class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <ErrorBoundary>
                        <RandomChar />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharList onCharSelected={this.onCharSelected} />
                    </ErrorBoundary>

                </div>
            </div>
        );
    }
}

export default App;
