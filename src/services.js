class ApiService {
    _apiBase
    _apiKey

    getResurce = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResurce(`https://rickandmortyapi.com/api/character`);
        console.log(res);
        return res;
    }

    transformCharacter = (char) => {

        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default ApiService