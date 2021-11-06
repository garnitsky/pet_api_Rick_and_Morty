import "./charList.scss"
import { Component } from "react";
import ApiService from "../../services";
import ErrorMessage from "../errorMessage/errorMessage";
import Spinner from "../spinner/spinner";

class CharList extends Component {

    state = {
        loading: true,
        error: false,
        charList: []
    }

    apiService = new ApiService();

    componentDidMount() {
        this.apiService.getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    //updateCharList = () => {
    //    //const id = Math.floor(Math.random() * (671 - 1) + 1);
    //    this.onCharloading();
    //    this.apiService
    //        .getAllCharacters()
    //        .then(this.onCharLoaded)
    //        .catch(this.onError);
    //}

    //onCharloading = () => {
    //    this.setState({ loading: true })
    //}

    renderItems = (arr) => {
        return arr.map(item => {

            return (
                <div className="char__item">
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <h2>{item.name}</h2>
                        <span>{item.status}</span> - <span>{item.species}</span>
                    </div>
                </div>
            )
        })
    }



    render() {
        const { charList, loading, error } = this.state;
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(error || loading) ? items : null;
        return (
            <div className="charList">
                {errorMessage}
                {spinner}
                {content}
            </div >
        )
    }
};

export default CharList;