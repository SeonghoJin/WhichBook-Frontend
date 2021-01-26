import Axios from 'axios';
import UriBuilder from '../UriBuilder';
class HomeUtils {

    static getBookList = async (bookRequestDto) => {
        const uri = new UriBuilder("http://localhost:8080/book/search", bookRequestDto)
            .build();
        try {
            let response = await Axios.get(uri);
            return response;
        } catch (err) {
            return err;
        }
    };

}

export default HomeUtils;