import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <h2 class="text-amber-50 text-5xl">David Dyberg</h2>
    <p class="text-amber-50 text-3xl">
      I am a <span class="text-cyan-400">Fullstack Developer</span>
    </p>
  `,
})
export class AboutComponent {}
