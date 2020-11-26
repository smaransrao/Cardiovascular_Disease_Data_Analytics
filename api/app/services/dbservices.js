var MongoClient = require('mongodb').MongoClient;
var conn = require('./../config/dbconfig');
var url = conn.url;

// createCollection = function(name){
//     MongoClient.connect(url, function(err, dbconn) {
//         if (err) throw err;
//         //creating connection
//         var db = dbconn.db(conn.dbname);
//         db.createCollection(name, (err,res)=>{
//             if (err) throw err;
//             console.log("collection " + name + " created");
//         });
//       });
// }

//insert document
exports.insertDB = function(collection, obj){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
            if (err) reject(err);
            else{
                var db = dbconn.db(conn.dbname);
                db.collection(collection).insertOne(obj, function(err, data) {
                    if (err) reject(err);
                    else{
                        console.log("1 document inserted - console");
                        resolve("succesfully inserted");
                        
                    }
                });
            }    
        });
    }); 
}

// //insert many documents
exports.insertDBMany = function(collection,obj){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).insertMany(obj, function(err, res) {
            if (err) throw err;
            console.log(res.insertedCount+" documents inserted");
          });
    });
}

//select documents
exports.findDB = function(collection,query = null){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
            if (err) reject(err);
            else{
                var db = dbconn.db(conn.dbname);
                db.collection(collection).find(query,{projection:{_id: 0}}).limit(100).toArray(function(err, res) {
                    if (err) throw err;
                    resolve(res);
                });
            }    
        });
    }); 
   
}

//update one document
exports.updateDB = function(collection, query, newval){
    console.log("in fn");
    console.log(query);
    console.log(newval);
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
            if (err) reject(err);
            var db = dbconn.db(conn.dbname);
            db.collection(collection).updateOne(query, {$set: newval}, function(err, res) {
                if (err) reject(err);
                
                resolve("1 document updated");
            });
        });
    });
}


// delete many documents - query must be a regex or multiple json
exports.deleteDB = function(collection, query){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
            if (err) reject(err);
            var db = dbconn.db(conn.dbname);
            db.collection(collection).deleteMany(query, function(err, res) {
                if (err) reject(err);
                console.log(res.result.n + " document(s) deleted");
                resolve("delete successful");
            });
        });
    });
}
