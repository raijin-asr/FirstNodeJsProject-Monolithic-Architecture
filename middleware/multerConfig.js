const multer = require('multer')

const storage= multer.diskStorage({ //handling file received or uploaded
    destination: function(req,file,cb){
        cb(null,'./storage') //cb is callback function, cb(error, success) parameter
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+'-'+ file.originalname)
    }
})

module.exports ={
    multer,
    storage
}