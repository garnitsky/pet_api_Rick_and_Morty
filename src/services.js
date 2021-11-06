class ApiService {
    _apiBase = 'https://rickandmortyapi.com/api/character';

    getResurce = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResurce(`${this._apiBase}/?page=2`);
        console.log(res);
        return res.results.map(this.transformCharacter);
    }

    getRandomCharacter = async (id) => {
        const res = await this.getResurce(`${this._apiBase}/${id}`);
        return this.transformCharacter(res)
    }

    transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            status: char.status,
            image: char.image,
            url: char.url,
            gender: char.gender,
            species: char.species
        }
    }
}

export default ApiService