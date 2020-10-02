const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://bhaun:1234@learn.kviow.mongodb.net/learn-graphql?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("listening to port 4000")
});

