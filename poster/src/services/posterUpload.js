import axios from 'axios'


class PosterService {
    static uploadImg(onSuccess, onError) {
        axios.get('https://source.unsplash.com/random')
            .then(onSuccess)
            .catch(onError)
    }

    static uploadNewImg(onSuccess, onError) {
        axios.get('https://source.unsplash.com/random')
            .then(onSuccess)
            .catch(onError)
    }

}

export default PosterService 