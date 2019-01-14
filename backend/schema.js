import { makeExecutableSchema, SchemaDirectiveVisitor } from 'apollo-server';
import resolvers from './resolvers';

const typeDefs = [`
    type Course {
        id: String,
        title: String,
        author: String,
        topic: String,
        url: String,
        voteCount: Int 
    }

    type Query {
        allCourses(search: String): [Course]
        course(id: String!): Course
    }

    type Mutation {
        addCourse(title: String!, author: String!, description: String!, topic: String!, url: String): Course
        upVote(id: String!): Course
        downVote(id: String!): Course
    }
`];

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;