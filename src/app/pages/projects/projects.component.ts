import { Component } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent],
  template: `
    <h1 class="text-amber-50 text-3xl">My projects:</h1>
    <app-project></app-project>
  `,
})
export class ProjectsComponent {}
