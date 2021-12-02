import Express from 'express';
import bodyParser from 'body-parser';
import ContaApi from './api/ContaApi.js';


const api = Express();
api.use(bodyParser.json());
api.listen(3000, ()=>console.log('Rodando....'));
api.use('/api/conta', ContaApi);



