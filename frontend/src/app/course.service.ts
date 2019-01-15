import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, filter } from 'rxjs/operators';

import { Query, Course } from './types';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apollo: Apollo) { }

  getAllCourses(searchTerm: string) {
    return this.apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
        query allCourses($searchTerm: String){
          allCourses(searchTerm: $searchTerm){
            id
            title
            author
            description
            topic
            url
            voteCount
          }
        }
      `,
      variables: {
        searchTerm: searchTerm
      }
    })
    .valueChanges
    .pipe(
      map(result => result.data.allCourses)
    );
  }

  upVoteCourse(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation upVote($id: String!){
          upVote(id: $id){
            id
            title
            voteCount
          }
        }
      `,
      variables: {
        id: id
      }
    });
  }

  downVoteCourse(id: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation downVote($id: String!){
          downVote(id: $id){
            id
            title
            voteCount
          }
        }
      `,
      variables: {
        id: id
      }
    });
  }
}
