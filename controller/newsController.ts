import NewsService from "../services/newsService";
import * as HttpStatus from  "http-status"
class NewsController {

    sendResponse = function(res,statusCode,data){
        res.status(statusCode).json({result: data}); 
    }
    get(req,res){
        NewsService.get()
        .then(news => this.sendResponse(res, HttpStatus.Ok, news))
        .catch(error =>console.error.bind(console, `Error ${error}`));
    }
    getById(req,res){
        const _id = req.params.id;

        NewsService.getById(_id)
        .then(news => this.sendResponse(res, HttpStatus.Ok, news))
        .catch(error => console.error.bind(console, `Error ${error}`))
    }
    create(req,res){
        let vm = req.body;
        NewsService.create(vm)
        .then(news => this.sendResponse(res, HttpStatus.Ok, "Notcia cadastrada com sucesso!"))
        .catch(error => console.error.bind(console, `Error ${error}`))
    }
    update(req,res){
        const _id = req.params.id;
        let news = req.body;

        NewsService.update(_id,news)
        .then(news => this.sendResponse(res, HttpStatus.Ok, `${news.title} foi atualizada com sucesso!`))
        .catch(error => console.error.bind(console, `Error ${error}`))
    }
    delete(req,res){
        
    }
}

export default new NewsController();