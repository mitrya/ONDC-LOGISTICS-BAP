import {Router} from 'express';
import {SearchController} from './search.controller'

const searchRouter = new Router();
const searchController = new SearchController();

//search post query to gateway
searchRouter.post('/search',searchController.search);

// on search get replies via gateway
searchRouter.get('/search',searchController.onSearch);

export default searchRouter;