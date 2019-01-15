import courseModel from './models/course';

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
            if(searchTerm !== ''){
                return courseModel.find({$text: {$search: searchTerm}}).sort({voteCount: 'desc'}).exec();
            }else{
                return courseModel.find().sort({voteCount: 'desc'}).exec();
            }
        },

        course: (root, {id}) => {
            return courseModel.findOne({id: id});
        },
    },

    Mutation: {
        upVote: (root, {id}) => {   
            return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount": 1}}).exec();
        },
        downVote: (root, {id}) => {
            return courseModel.findOneAndUpdate({id: id}, {$inc: {"voteCount": -1}}).exec();
        },
        addCourse: (root, {title, author, description, topic, url}) => {
            const course = new courseModel({title: title, author: author, description: description, topic: topic, url: url});
            return course.save();
        }
    }
}

export default resolvers;