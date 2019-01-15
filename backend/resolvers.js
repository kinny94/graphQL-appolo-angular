import courseModel from './models/course';

const resolvers = {
    Query: {
        allCourses: (root, {searchTerm}) => {
            if(searchTerm !== ''){
                console.log('reached!');
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