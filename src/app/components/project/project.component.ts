import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { projectType } from '../../../types/projectTypes';
import { AddProjectModalComponent } from '../add-project-modal.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-project',
  imports: [AddProjectModalComponent, FormsModule],
  template: `
    <div class="flex justify-between">
      <h1 class="text-amber-50 text-3xl">My projects:</h1>
      <button
        (click)="openModal()"
        class="pr-4 pl-4 bg-cyan-400 hover:bg-cyan-300 rounded-full cursor-pointer"
      >
        Add project
      </button>
    </div>
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

    @if (showModal) {
    <app-add-project-modal
      [open]="showModal"
      (add)="handleAddProject($event)"
      (cancel)="closeModal()"
    />
    }
  `,
})
export class ProjectComponent implements OnInit {
  projects: projectType[] = [];
  loading: boolean = false;
  showModal = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.loading = true;
    this.projectsService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
        this.loading = false;
      },
    });
  }

  handleAddProject(newProject: { title: string; description: string }): void {
    this.projectsService.addProject(newProject).subscribe({
      next: (createdProject) => {
        this.projects.push(createdProject);
        console.log('Project added:', createdProject);
        this.showModal = false;
        this.loadProjects();
      },
      error: (error) => {
        console.error('Error adding project:', error);
        this.showModal = false;
      },
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
