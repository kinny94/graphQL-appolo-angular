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
            return coursesData;
        },

        course: (root, {id}) => {
            return courseModel.findOne({id: id});
        },
    },
    Mutation: {
        upVote: (root, {id}) => {
            const course = coursesData.filter(course => course.id === id)[0];
            course.voteCount++;
            return course; 
        },
        downVote: (root, {id}) => {
            const course = coursesData.filter(course => course.id === id)[0];
            course.voteCount--;
            return course;
        },
        addCourse: (root, {title, author, description, topic, url}) => {
            return null;
        }
    }
}

export default resolvers;