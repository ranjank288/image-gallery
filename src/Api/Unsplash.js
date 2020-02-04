import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ecee43b82263c268b9e0707a9a264e88c638bbc215ffa749b6add0adde9365cc'
    }
});