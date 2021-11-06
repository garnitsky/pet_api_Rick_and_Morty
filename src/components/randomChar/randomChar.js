import "./randomChar.scss";
import { Component } from "react";
import ApiService from "../../services";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

class RandomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: false
    }

    apiService = new ApiService();

    onCharLoaded = (char) => {
        this.setState({ char, loading: false })
    }

    onCharloading = () => {
        this.setState({ loading: true })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (671 - 1) + 1);
        this.onCharloading();
        this.apiService
            .getRandomCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        this.updateChar()
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
                        <div onClick={this.updateChar} className="inner">try it</div>
                    </button>
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
                    <a href="www" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;
