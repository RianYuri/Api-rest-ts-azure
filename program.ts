import startUp from "./startUp";

let port = '3000';


startUp.app.listen(port, function(){
    console.log(`servidor escutando na porta ${port}`)
})