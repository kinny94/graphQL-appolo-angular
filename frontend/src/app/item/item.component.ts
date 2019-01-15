import { Component, OnInit, Input } from '@angular/core';

import { Course } from './../types';
import { CourseService } from './../course.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() course: Course;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  upVote(id: string) {
    this.courseService.upVoteCourse(id).subscribe(
      ({data}) => {
        console.log('upvoted!', data);
      },
      (error) => {
        console.log('failed to upvote!', error);
      }
    );
  }

  downVote(id: string) {
    this.courseService.downVoteCourse(id).subscribe(
      ({data}) => {
        console.log('downvoted!', data);
      },
      (error) => {
        console.log('failed to downvote!', error);
      }
    );
  }


}
