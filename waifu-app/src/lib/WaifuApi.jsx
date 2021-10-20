import axios from 'axios';

export default class WaifuApi {
    constructor(baseurl="https://api.waifu.pics") {
        this.baseurl = baseurl;
    }

    getOneRandom = (type, category) => {
        if (type === "sfw" || type === "nsfw") 
            return axios.get(`${this.baseurl}/${type}/${category}`)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }


    getThirtyRandom = (type, category) => {
        console.log('type: ', type);
        if (type === "sfw" || type === "nsfw") 
            return axios.post(`${this.baseurl}/many/${type}/${category}`, {
                exclude: []
            })
            .then(res => {
                console.log(res.data.files);
                return res.data.files;
            })
            .catch(err => {
                console.log(err);
                return err;
            })
    }
}