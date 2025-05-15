import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule], // Import RouterTestingModule for routerLink
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to the Home page', () => {
    const homeLink = fixture.debugElement.query(By.css('a[routerLink="/"]'));
    expect(homeLink).toBeTruthy();
    expect(homeLink.nativeElement.textContent.trim()).toBe('Home');
  });

  it('should have a link to the Projects page', () => {
    const projectsLink = fixture.debugElement.query(
      By.css('a[routerLink="/projects"]')
    );
    expect(projectsLink).toBeTruthy();
    expect(projectsLink.nativeElement.textContent.trim()).toBe('Projects');
  });
});
