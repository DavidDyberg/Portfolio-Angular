import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

type AboutType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
  bio?: string;
  phoneNumber?: string;
  profileImage?: string;
  skills?: string[];
  socials?: {
    platformLogo?: string;
    url?: string;
  }[];
};

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    @if (aboutData.length > 0) {

    <div>
      <h2 class="text-amber-50 text-5xl">David Dyberg</h2>
      <p class="text-amber-50 text-3xl">
        I am a <span class="text-cyan-400">Fullstack Developer</span>
      </p>
      <p class="text-amber-50">{{ aboutData[0].bio }}</p>
    </div>
    } @else {
    <p class="text-amber-50">Loading...</p>
    }
  `,
})
export class AboutComponent implements OnInit {
  aboutData: AboutType[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }

  loadAboutData() {
    this.aboutService.getAboutData().subscribe({
      next: (data) => {
        this.aboutData.push(data);
        console.log('About data loaded:', this.aboutData);
      },
      error: (error) => {
        console.error('Error fetching about data:', error);
      },
    });
  }
}
