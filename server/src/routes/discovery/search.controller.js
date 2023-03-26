import {SearchService} from './search.service'
import BadRequestParameterError from '../../lib/errors/bad-request-parameter.error'
import NoRecordFoundError from '../../lib/errors/no-record-found.error'
const searchService = new SearchService();

class SearchController {

    /**
    * search
    * @param {*} req    HTTP request object
    * @param {*} res    HTTP response object
    * @return {callback}
    */
    search(req, res, next) {
        const searchRequest = req.body;

        searchService.search(searchRequest).then(response => {
            if(!response || response === null)
                throw new NoRecordFoundError("No result found");
            else
                res.json(response);
        }).catch((err) => {
            console.log(err)
        });
    }

    /**
    * on search 
    * @param {*} req    HTTP request object
    * @param {*} res    HTTP response object
    * @return {callback}
    */
    onSearch(req, res, next) {
        const { query } = req;
        const { messageId } = query;

        if(messageId) {
            searchService.onSearch(query).then(result => {
                res.json(result);
            }).catch((err) => {
                console.log(err)
            });
        }
        else
            throw new BadRequestParameterError();
    }

}

export default SearchController;
