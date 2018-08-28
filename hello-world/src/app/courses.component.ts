import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

//Pascal naming convention (all words capitalize first letter)
@Component({
    selector: 'courses', //<courses>
    template: `
                <h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>`
    //note that you need to prefix any directives that manipulate the DOM
    //(like ngFor above) with a '*' character!

})
export class CoursesComponent { 
    title = "List of Courses";
    getTitle() {
        return this.title;
    }

    courses;

    constructor (service:CoursesService){
        // let service = new CoursesService();
        
        /* We do not instantiate the CoursesService in here, so that we keep
        this class and the CoursesService class decoupled from each other.
        i.e. now it is a parameter, and we can pass in a fake / mocked 
        CoursesService during unit testing. This is particularly
        helpful if that service was making http requests or doing some
        other complicated thing. */

        this.courses = service.getCourses();
    }

    //logic for calling an HTTP service

}