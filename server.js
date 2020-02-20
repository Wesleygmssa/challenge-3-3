const express = require('express') 
const nunjucks = require('nunjucks') 
const server = express()  
const projects = require("./data") 
const courses = require("./courses")

server.use(express.static('public'))


//template engine
server.set('view engine', 'njk') 

nunjucks.configure('views', { 
    express: server,
    autoescape: false, // - pegando formatação html 
    noCache: true // - tirando o cache
})

//rotas
server.get('/', function (req, res) {
    const about = {
        avatar_url:"https://avatars2.githubusercontent.com/u/41512408?s=460&v=4",
        name:"Wesley Guerra",
        role:"Student - Rocketseat",
        description:"Full-stack programmer, focused on learning the best technology in the market."

    }
    return res.render('about', {about})
})

server.get('/portfolio', function (req, res) {
    return res.render('portfolio', { items: projects }) 
})

server.get('/courses', function (req, res) {
    return res.render('courses', { items: courses}) 
})


// server.use(function (req, res) { 
//     res.status(404).render("not-found");
// });

server.get("/courses/:id", (req, res) => {//-> pegando video.njk
    const id = req.params.id; //-> params pela url

    const course = courses.find((courses) => { return courses.id == id });

    if (!course) {
        return res.render("not-found");
    }

    return res.render("course", { item: course });
});
// server.get('/video',function(req , res){
//     const id = req.query.id //-> pegando dados pela url /?id=teste
//     const video = curses.find(function(video){ //-> find percorrendo array
//         if(video.id == id){
//             return true
//         }
//     })
//    if(!video){
//        return res.send("video not found! ")
//    }

//    return res.render('video',{item:video})
// })



//servidor
server.listen(4000, function () {
    console.log('Server is running')
})



