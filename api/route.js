var db=require('./app/services/dbservices');
var coll = 'cardio';

exports.routers = function(route)
{
  route.post('/insert',(req,res) => {
    console.log(req.body);
    db.insertDB(coll,req.body).then(response=>{
      console.log(response);
      res.send({success:'true'});
    }).catch(err=>{
      console.log(err);
    })
  });

  route.post('/findSpecific',(req,res) => {
    console.log(req.body);
    db.findDB(coll,req.body).then(response=>{
      console.log(response);
      res.send(response);
    }).catch(err=>{
      console.log(err);
    })
  });

  route.get('/findAll',(req,res) => {
    db.findDB(coll).then(response=>{ 
      res.send(response);
    }).catch(err=>{
      console.log(err);
    })
  });

  route.post('/delete',(req,res) => {
    console.log(req.body);
    db.deleteDB(coll,req.body).then(response=>{
      console.log(response);
      res.send({success:'true'});
    }).catch(err=>{
      console.log(err);
    })
  });

  route.post('/update',(req,res) => {
    console.log(req.body);
    console.log(req.body[0]);
    console.log(req.body[1]);
    db.updateDB(coll,req.body[0],req.body[1]).then(response=>{
      console.log(response);
      res.send({success:'true'});
    }).catch(err=>{
      console.log(err);
    })
  });

  return route;
}