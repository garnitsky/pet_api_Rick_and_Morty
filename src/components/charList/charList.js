import "./charList.css"
import { Component } from "react";
import ApiService from "../../services";
import ErrorMessage from "../errorMessage/errorMessage";
import Spinner from "../spinner/spinner";

class CharList extends Component {

    state = {
        loading: true,
        error: false,
        charList: [],
        newItemLoading: false,
        page: 40,
        charEnded: false,
    }

    apiService = new ApiService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (page) => {
        this.onCharListLoading();
        this.apiService.getAllCharacters(page)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 20) {
            ended = true;
        }

        this.setState(({ page, charList }) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            page: page + 1,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    charInfo = () => {

    }

    renderItems = (arr) => {
        return arr.map(item => {
            return (
                <div className="char__item" key={item.id} onClick={this.charInfo}>
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
        const { newItemLoading, charList, loading, error, page, charEnded } = this.state;
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(error || loading) ? items : null;
        return (
            <div>
                <div className="charList">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
                <button className="button__long"
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(page)}>
                    load more
                </button>
            </div >
        )
    }
};

export default CharList;