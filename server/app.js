const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://paulvazo:test123@ds257640.mlab.com:57640/gql-test')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () =>{
    console.log('now listening on port 4k');
});