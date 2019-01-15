export interface Course {
  id: string;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
  voteCount: number;
}

export interface Query {
  allCourses: Course[];
}
