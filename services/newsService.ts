import newsRepository from "../repository/newsRepository";

class NewsService{
get(){
    return newsRepository.find({});
}

getById(_id){
    return newsRepository.findById(_id);


}
}

export default new NewsService;