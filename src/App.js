import './App.css';
import CharList from './components/charList/charList';
import Header from './components/header/header';
import RandomChar from './components/randomChar/randomChar';

function App() {

    return (
        <div className="App">

            <Header />
            <RandomChar />
            <CharList />

        </div>
    );
}

export default App;
