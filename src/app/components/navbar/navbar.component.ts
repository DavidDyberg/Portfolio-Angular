import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="flex p-4 gap-2 text-amber-50 w-full justify-end pb-28">
      <div>
        <a routerLink="/">Home</a>
      </div>
      <div>
        <a routerLink="/projects">Projects</a>
      </div>
    </nav>
  `,
})
export class NavbarComponent {}
