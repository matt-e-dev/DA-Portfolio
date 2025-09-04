import { Component, AfterViewInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {}

  //Imported from afterviewinit component

  ngAfterViewInit(): void {
    // Simulate hover effect on page load
    const logoElement = document.querySelector('.logo img');
    const mouthElement = document.querySelector('.mouth');
    const handElement = document.querySelector('.hand-logo');

    logoElement?.classList.add('hovered');
    mouthElement?.classList.remove('d-none');
    handElement?.classList.remove('d-none');

    setTimeout(() => {
      logoElement?.classList.remove('hovered');
      mouthElement?.classList.add('d-none');
      handElement?.classList.add('d-none');
    }, 2000);
  }

  handleLogoHover(): void {
    const mouthElement = document.querySelector('.mouth');
    const handElement = document.querySelector('.hand-logo');

    mouthElement?.classList.remove('d-none');
    handElement?.classList.remove('d-none');
  }

  handleLogoMouseLeave(): void {
    const mouthElement = document.querySelector('.mouth');
    const handElement = document.querySelector('.hand-logo');

    mouthElement?.classList.add('d-none');
    handElement?.classList.add('d-none');
  }

  toggleOverlay(): void {
    const overlay = document.getElementById('navbarOverlay');
    overlay?.classList.toggle('d-none'); //
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
