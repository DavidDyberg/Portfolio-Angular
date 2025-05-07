import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
