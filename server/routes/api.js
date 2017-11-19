const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var loggers = require ('./user.model' )

var db ='mongodb://localhost:27017/log'
mongoose.connect(db,{
    useMongoClient: true,
    /* other options */
  });


router.get('/loglists',function (req, res) {
    loggers.find({})
    .exec(function(err,logs){
        if(err){
            res.send('error has occured')
        }else{
             res.json(logs)
             console.log(logs)
        }
    })
});

router.post('/newuser', (req, res) => {
  var  newLoggers = new loggers();
    newLoggers.name=req.body.name;
    newLoggers.password=req.body.password;

    newLoggers.save(function(err,data){
        if(err){
            console.log('error is occured  in post')
        }else{
            res.send(data);
        }
    })
});
router.put('/newuser/:id', (req, res) => {
    loggers.findOneAndUpdate({
        _id:req.params.id
    },{$set:{
        password:req.body.password
    }},{upsert:true},function(err,newuser){
        if(err){
            console.log('error is occured  in post')
        }else{
            res.send('sucessfully updated');
        }
    })
})

  router.get('/mani',function(req,response){
      response.send('hiiii')
  })

module.exports = router;