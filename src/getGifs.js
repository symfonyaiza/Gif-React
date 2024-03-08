const keyAPI = "LWa7s0VN7TrZM6kq0n654U0Kl9p8Cktt";


export default function getGifs({ keyword = ''}) {

    const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${keyAPI}&q=${keyword}&limit=15&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    return fetch(urlAPI)
        .then((res) => res.json())
        .then((dataResponse) => {
        const { data = [] } = dataResponse;
        const gifs = data.map((image) => {
            const {images, title, id} = image
            const {url} = images.original
            return {title,id,url}
            })
        return gifs;
        });
}
