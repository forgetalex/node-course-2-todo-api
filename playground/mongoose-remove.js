const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({
    _id: '58713328483893fa9392fa59'
}).then(() => {
    
});

Todo.findByIdAndRemove('58713328483893fa9392fa59').then((todo) => {
    console.log(todo);
});