const { ApolloServer, gql } = require('apollo-server');
var text=[];
const db=require("./db")
const sqlSelect = "SELECT * FROM Text";
db.query(sqlSelect,(err,result)=>{
  text=result;
})

const typeDefs = gql`
  type Text {
    id: Int
    Text: String
  }
  type Query {
    text: [Text]
  }
`;

const resolvers = {
    Query: {
      text: () => text,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



