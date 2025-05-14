import { Component, OnInit } from '@angular/core';
import { projectType } from '../../../types/projectTypes';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Router } from '@angular/router';
import { EditProjectModalComponent } from '../../components/edit-project-modal-component';

@Component({
  selector: 'app-project-details',
  imports: [EditProjectModalComponent],
  template: `
    <a
      href="/projects"
      class="text-amber-50  rounded-full cursor-pointer underline"
    >
      <- Back
    </a>
    @if (project) {
    <div class="flex justify-between">
      <h2 class="text-amber-50 text-3xl">{{ project.title }}</h2>
      <div class="flex gap-4">
        <button
          (click)="showModal = true"
          class="pr-4 pl-4 bg-cyan-400 hover:bg-cyan-300 rounded-full cursor-pointer"
        >
          Edit
        </button>
        <button
          class="text-amber-50 pr-4 pl-4 bg-red-700 hover:bg-red-600 rounded-full cursor-pointer"
          (click)="handleDeleteProject()"
        >
          Delete
        </button>
      </div>
    </div>
    <div class="pt-8">
      <img
        class="w-full h-96 object-cover rounded-lg"
        src="/project-placeholder-image.png"
        alt="Project image"
      />
      <div class="pt-5">
        <p class="text-amber-50">{{ project.description }}</p>
        <p class="text-amber-50 font-light text-lg pt-6">Technologies used:</p>
        <ul class="text-amber-50 pl-6">
          @for (techStack of project.techStack; track techStack) {
          <li class="list-disc">{{ techStack }}</li>
          }
        </ul>
        <div class="flex gap-4 pt-6 pb-6">
          <div>
            <a
              class="text-amber-50 font-bold underline"
              href="{{ project.liveDemo }}"
              target="_blank"
              >Link to live project</a
            >
          </div>
          <div>
            <a
              class="text-amber-50 font-bold underline"
              href="{{ project.githubLink }}"
              target="_blank"
              >Link to source code</a
            >
          </div>
        </div>
      </div>
    </div>

    @if (showModal) {
    <app-edit-project-modal
      [open]="showModal"
      [project]="project!"
      (save)="handleEditProject($event)"
      (cancel)="handleEditCancel()"
    />
    } }
  `,
})
export class ProjectDetailsComponent implements OnInit {
  project: projectType | null = null;
  showModal = false;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject(): void {
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

  handleDeleteProject(): void {
    if (this.project && this.project._id) {
      this.projectsService.deleteProject(this.project._id).subscribe({
        next: () => {
          console.log('Project deleted successfully');
          this.router.navigate(['/projects']);
        },
        error: (error) => {
          console.error('Error deleting project:', error);
        },
      });
    }
  }

  handleEditProject(updatedData: Partial<projectType>) {
    if (!this.project?._id) return;
    this.projectsService
      .updateProject(this.project._id, updatedData)
      .subscribe({
        next: (updatedProject) => {
          this.project = updatedProject;
          this.loadProject();
          this.showModal = false;
        },
        error: (err) => console.error('Edit failed', err),
      });
  }

  handleEditCancel() {
    this.showModal = false;
  }
}
