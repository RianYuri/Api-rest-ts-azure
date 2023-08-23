import * as express from 'express'
import DataBase from './infra/db';
class startUp{
    public app: express.Application;
    private db: DataBase;



    constructor() {

        this.app = express();
        this.db = new DataBase();
        this.db.createConection();
        this.routes()
    }

routes(){
    this.app.route('/').get((req,res)=>{

        res.send({versao: '0.0.1'})
    })
}

}

export default new startUp()