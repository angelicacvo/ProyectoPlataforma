import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-client',
  templateUrl: './courses-client.component.html',
  styleUrls: ['./courses-client.component.css'],
})
export class CoursesClientComponent {
  coursesClientData = [
    {
      video: 'https://www.youtube.com/embed/zHAaZVdAUC4',
    },
  ];
}
