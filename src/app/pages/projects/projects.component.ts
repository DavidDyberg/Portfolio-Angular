import { Component } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  template: ` <app-project></app-project> `,
})
export class ProjectsComponent {}
