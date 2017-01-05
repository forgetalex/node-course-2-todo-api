//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('586e2b27483893fa9392fa58')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    
    
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('586d315affb569318c42a2e5')
    }, {
        $set: {
            name: "Alexei"
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    //db.close();
});
