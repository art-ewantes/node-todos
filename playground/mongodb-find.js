const {MongoClient, ObjectID} = require('mongodb');


// generate new id for new data
var obj = new ObjectID();


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Error to connect by server');
    }
    console.log('Connected to mongodb was seccess');

    db.collection('Todos').find({completed: false}).toArray().then((data) => {
        console.log('Todos fetching was success');
        console.log(JSON.stringify(data, undefined, 2));
    }, (error) => {
        console.log('Enable to fatch data', error);
    });

    db.close();
});