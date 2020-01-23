const express = require('express')
const {MongoClient,ObjectID} = require('mongodb')
const assert = require('assert');



const app = express()
app.use(express.json())

const mongo_url ='mongodb://localhost:27017'
const database ='contact-api'

MongoClient.connect(mongo_url,{ useUnifiedTopology: true },(err,client)=>{
 assert.equal(err,null ,'data base connexion failed');
 const db =client.db(database);


app.post('/addcontact' , (req , res)=>{
    let newcontact= req.body;
    db.collection('contacts').insertOne(newcontact,(err,data)=>{
        if (err) res.send('cant add contact')
        else res.send("contact added")
    })
     res.send(newcontact);
})

app.get('/getcontacts', (req , res)=>{
    db.collection('contacts').find().toArray((err,data)=>{
        if (err) res.send('cant find contact')
        else res.json(data)
})
    
})
app.get('/contacts/:id' , (req , res)=>{
    const id=ObjectID(req.params.id)
    db.collection('contacts').findOne({_id:id},(err,data)=>{
        console.log(id)
        if (err) res.send('cant find contact')
        else res.send(data)
})
    
})
app.put('/EditContact/:id' , (req , res)=>{
    const id=ObjectID(req.params.id)
    const updatedContact=req.body
    db.collection('contacts').findOneAndUpdate({_id: id}, {$set: {...updatedContact}}, (err,data)=>{
        if (err) res.send('cant update')
        else res.send("Updated")
})

})
app.delete('/DeleteContact/:id' , (req , res)=>{
    const id=ObjectID(req.params.id)
    db.collection('contacts').findOneAndDelete({_id :id},(err,data)=>{
        if (err) res.send('cant Delete')
        else res.send("Contact Deleted")
})

})

})




app.listen(5000, (err)=>{
    if (err) console.log("server err")
    else 
    console.log('server is running 5000')
})