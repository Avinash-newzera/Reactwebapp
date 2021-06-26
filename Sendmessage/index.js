const { ApolloServer, gql } = require('apollo-server');
const db=require("./db")

const PORT = 5000;
const typeDefs = gql`
  type Contact {
    id: Int
    Name: String
    Email:String
    Message:String
  }
  type Query {
    Contact: [Contact]
  }
  type Mutation {
    createUser (id:Int, Name: String, Email: String, Message: String): Contact

  }
`;

const resolvers = {
    Mutation:{
        
        createUser(parent,{Name,Email,Message}){
            const sqlInsert = "INSERT INTO Contact (Name,Email,Message) VALUES (?,?,?);"
            db.query(sqlInsert,[Name,Email,Message],(err,result)=>{
              if (err){
                return(err)
              }
              else{
              return(true)}
            });

        }
    }
     };



const server = new ApolloServer({ typeDefs, resolvers });
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});



