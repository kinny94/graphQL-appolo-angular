import mongoose from 'mongoose';
import courseModel from './models/course';


const coursesData = [
    {
        id: '1',
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world application withb Node, Express',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs',
        voteCount: 0
    },
    {
        id: '2',
        title: 'Node.js, Express and MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications',
        topic: 'Node.js',
        url: 'https:codingthesmartway.com/courses/nodejs-express-mongodb/',
        voteCount: 0
    },
    {
        id: '3',
        title: 'JavaScript: Understanding the weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced Javascript course for everyone!. Scope, closures, prototype etc',
        topic: 'JavaScript',
        url: 'https:codingthesmartway.com/courses/understand-javascript/',
        voteCount: 0
    },
];

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
            if(searchTerm !== ''){
                return courseModel.find({$text: {$search: searchTerm}}).sort({voteCount: 'desc'});
            }else{
                return courseModel.find().sort({voteCount: 'desc'});
            }
        },

        course: (root, {id}) => {
            return courseModel.findOne({id: id});
        },
    },

    Mutation: {
        upVote: (root, {id}) => {
            return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount": 1}});
        },
        downVote: (root, {id}) => {
            return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount": -1}});
        },
        addCourse: (root, {title, author, description, topic, url}) => {
            const course = new courseModel({title: title, author: author, description: description, topic: topic, url: url});
            return course.save();
        }
    }
}

export default resolvers;