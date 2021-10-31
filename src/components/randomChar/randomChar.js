import "./randomChar.scss";
import { Component } from "react";
import ApiService from "../../services";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar()
    }
    state = {
        char: {},
        loading: true,
        error: false
    }

    apiService = new ApiService();

    onCharLoaded = (char) => {
        this.setState({ char, loading: false })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (671 - 1) + 1);
        this.apiService
            .getRandomCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const { char, loading, error } = this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(error || loading) ? <View char={char} /> : null;

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src="#" alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
}

const View = ({ char }) => {
    const { image, name, gender, url } = char
    return (
        <div className="randomchar__block">
            <img src={image} alt="Random character" className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {gender}
                </p>
                <div className="randomchar__btns">
                    <a href={url} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href="#" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default RandomChar;



//id: null,
//    name: null,
//        status: null,
//            species: "Human",
//                type: "",
//                    gender: "Male",
//                        origin: {
//    name: "Earth",
//        url: "https://rickandmortyapi.com/api/location/1"
//},
//location: {
//    name: "Earth",
//        url: "https://rickandmortyapi.com/api/location/20"
//},
//image: `https://rickandmortyapi.com/api/character/avatar/${this.id}.jpeg`,
//    episode: [
//        "https://rickandmortyapi.com/api/episode/1",
//        "https://rickandmortyapi.com/api/episode/2",
//        // ...
//    ],
//        url: `https://rickandmortyapi.com/api/character/${this.id}`,
//            created: "2017-11-04T18:50:21.651Z",