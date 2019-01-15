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
    this.courseService.upVoteCourse(id).subscribe(data => console.log('upvote', data));
  }

  downVote(id: string) {
    this.courseService.downVoteCourse(id).subscribe(data => console.log('downvoted', data));
  }


}
