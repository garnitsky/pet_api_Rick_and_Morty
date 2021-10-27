import { Component } from "react";
import ApiService from "../../services";

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar()
    }
    state = {
        id: null,
        name: null,
        status: null,
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/20"
        },
        image: `https://rickandmortyapi.com/api/character/avatar/${this.id}.jpeg`,
        episode: [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            // ...
        ],
        url: `https://rickandmortyapi.com/api/character/${this.id}`,
        created: "2017-11-04T18:50:21.651Z"
    }

    apiService = new ApiService();

    updateChar = () => {
        const id = Math.floor(Math.random() * (671 - 1) + 1);
        this.apiService.getRandomCharacter(id).then(res => {
            this.setState({
                name: res.name,
                status: res.status,
                image: res.image,
                url: res.url
            })
        })
    }
    render() {
        const { id, name, status, species, type, gender, origin, location, image, episode, url, created } = this.state
        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={image} alt="Random character" className="randomchar__img" />
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
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
};

export default RandomChar;