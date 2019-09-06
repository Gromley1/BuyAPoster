import axios from 'axios'


class PosterService {
    static uploadImg(onSuccess, onError) {
        //axios.get('https://source.unsplash.com/random')
        axios.get('https://loremflickr.com/g/320/240/paris')
            .then(onSuccess)
            .catch(onError)
    }

    static uploadNewImg(onSuccess, onError) {
        //  axios.get('https://source.unsplash.com/random')
        axios.get('https://loremflickr.com/g/320/240/paris')
            .then(onSuccess)
            .catch(onError)
    }

}

export default PosterService 