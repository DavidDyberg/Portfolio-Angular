import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { projectType } from '../../types/projectTypes';

@Component({
  selector: 'app-edit-project-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (open) {
    <div
      class="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md">
        <h2 class="text-xl font-semibold mb-4">Edit Project</h2>
        <form (ngSubmit)="submit()" class="flex flex-col gap-4">
          <input
            [(ngModel)]="formData.title"
            name="title"
            type="text"
            placeholder="Project name"
            class="border p-2 rounded"
            required
          />
          <textarea
            [(ngModel)]="formData.description"
            name="description"
            placeholder="Project description"
            class="border p-2 rounded"
            rows="4"
            required
          ></textarea>
          <input
            [(ngModel)]="formData.liveDemo"
            name="liveDemo"
            type="url"
            placeholder="Live demo link"
            class="border p-2 rounded"
          />
          <input
            [(ngModel)]="formData.githubLink"
            name="githubLink"
            type="url"
            placeholder="GitHub repo link"
            class="border p-2 rounded"
          />
          <div class="flex justify-end gap-2 mt-4">
            <button
              type="button"
              (click)="cancel.emit()"
              class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    }
  `,
})
export class EditProjectModalComponent {
  @Input() open = false;
  @Input() project!: projectType;
  @Output() save = new EventEmitter<Partial<projectType>>();
  @Output() cancel = new EventEmitter<void>();

  formData: Partial<projectType> = {
    title: '',
    description: '',
    liveDemo: '',
    githubLink: '',
  };

  ngOnChanges() {
    if (this.project) {
      this.formData = {
        title: this.project.title,
        description: this.project.description,
        liveDemo: this.project.liveDemo,
        githubLink: this.project.githubLink,
      };
    }
  }

  submit() {
    this.save.emit(this.formData);
  }
}
