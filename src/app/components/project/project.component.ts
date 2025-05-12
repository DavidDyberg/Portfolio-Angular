import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

type projectType = {
  _id: string;
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  githubLink?: string;
  liveDemo?: string;
};

@Component({
  selector: 'app-project',
  imports: [],
  template: `
    <h1 class="text-amber-50">My project component</h1>
    @for (project of projects; track project._id) {
    <div>
      <h2 class="text-amber-50">{{ project.title }}</h2>
    </div>
    } @empty {
    <p>There are no projects at the moment</p>
    } @if (loading) {
    <p>Loading...</p>
    }
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
