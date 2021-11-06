
import './App.css';
import CharList from './components/charList/charList';
import Header from './components/header/header';
import RandomChar from './components/randomChar/randomChar';

const App = () => {


    return (
        <div className="App">
            <div className="container">

                <Header />
                <RandomChar />
                <CharList />
            </div>
        </div>
    );
}

export default App;
