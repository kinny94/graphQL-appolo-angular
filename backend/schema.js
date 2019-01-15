import { makeExecutableSchema } from 'apollo-server';
import resolvers from './resolvers';

const typeDefs = [`
    type Course {
        id: String,
        title: String,
        author: String,
        topic: String,
        url: String,
        description: String,
        voteCount: Int 
    }

    type Query {
        allCourses(searchTerm: String): [Course]
        course(id: String!): Course
    }

    type Mutation {
        addCourse(title: String!, author: String!, description: String!, topic: String!, url: String!): Course
        upVote(id: String!): Course
        downVote(id: String!): Course
    }
`];

const schema = makeExecutableSchema({
    typeDefs,  
    resolvers
});

export default schema;