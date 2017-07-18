import {Component} from '@angular/core';
import {CourseService} from '../services/courses.service'

@Component({
  selector: 'courses',
  templateUrl: '../templates/courses.component.html',
  providers: [CourseService]
})


export class AppComponent{
  courses;
  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }
}
