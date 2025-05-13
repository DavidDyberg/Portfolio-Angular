import { Component, OnInit } from '@angular/core';
import { projectType } from '../../../types/projectTypes';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-details',
  imports: [],
  template: ` <p class="text-amber-50">Project details page</p> `,
})
export class ProjectDetailsComponent implements OnInit {
  project: projectType | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectsService.getProjectById(id).subscribe({
        next: (data) => {
          this.project = data;
          console.log('Project details loaded:', this.project);
        },
        error: (error) => {
          console.error('Error fetching project:', error);
        },
      });
    }
  }
}
