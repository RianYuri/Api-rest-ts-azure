import * as express from 'express'

class startUp{
    public app: express.Application;

    constructor() {
        this.app = express();        
    }

routes(){
    this.app.route('/').get((req,res)=>{

        res.send({versao: '0.0.1'})
    })
}

}

export default new startUp()