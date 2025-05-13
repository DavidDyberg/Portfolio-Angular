import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { projectType } from '../../../types/projectTypes';
@Component({
  selector: 'app-project',
  imports: [],
  template: `
    <h1 class="text-amber-50 text-3xl">My projects:</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 m-4">
      @for (project of projects; track project._id) {
      <a href="/projects/{{ project._id }}">
        <div class="w-full flex flex-col gap-4">
          <h2 class="text-amber-50 text-2xl">
            {{ project.title }}
          </h2>
          <img src="/project-placeholder-image.png" alt="Project image" />
        </div>
      </a>
      } @empty {
      <p>There are no projects at the moment</p>
      } @if (loading) {
      <p>Loading...</p>
      }
    </div>
  `,
})
export class ProjectComponent implements OnInit {
  projects: projectType[] = [];
  loading: boolean = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        console.log('Projects loaded:', this.projects);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
        this.loading = false;
      },
    });
  }
}
