import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-project-modal',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (open) {
    <div
      class="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md">
        <h2 class="text-xl font-semibold mb-4">Add New Project</h2>
        <form (ngSubmit)="submit()" class="flex flex-col gap-4">
          <input
            [(ngModel)]="title"
            name="title"
            type="text"
            placeholder="Project name"
            class="border p-2 rounded"
            required
          />
          <textarea
            [(ngModel)]="description"
            name="description"
            placeholder="Project description"
            class="border p-2 rounded"
            rows="4"
            required
          ></textarea>
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
              class="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-white cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
    }
  `,
})
export class AddProjectModalComponent {
  @Input() open = false;
  @Output() add = new EventEmitter<{ title: string; description: string }>();
  @Output() cancel = new EventEmitter<void>();

  title = '';
  description = '';

  submit() {
    this.add.emit({ title: this.title, description: this.description });
    this.title = '';
    this.description = '';
  }
}
