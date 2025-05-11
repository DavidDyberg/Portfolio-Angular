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
    <div class="flex-col gap-4 flex justify-between items-center sm:flex-row">
      <div class="flex flex-col gap-2">
        <h2 class="text-amber-50 text-5xl text-center">
          {{ aboutData[0].firstName }} {{ aboutData[0].lastName }}
        </h2>
        <p class="text-amber-50 text-3xl text-center">
          I am a <span class="text-cyan-400">Fullstack Developer</span>
        </p>
        <p class="text-amber-50 text-center">{{ aboutData[0].bio }}</p>
      </div>
      <div>
        <img
          class="rounded-full sm:w-xs sm:h-xs w-3xs"
          src="https://media.licdn.com/dms/image/v2/D4D03AQEJ22lp8UIvow/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718285883389?e=2147483647&v=beta&t=LRBayTE30MM64HDOI89fnzsK1ycsT77j1XWBeL6-rWM"
          alt="Profila image"
        />
      </div>
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
