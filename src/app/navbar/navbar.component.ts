import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  currentLanguage = 'en';
  isOverlayOpen = false;

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
    this.isOverlayOpen = !this.isOverlayOpen;
    
    if (this.isOverlayOpen) {
      overlay?.classList.remove('d-none');
    } else {
      overlay?.classList.add('d-none');
    }
  }

  closeOverlay(): void {
    const overlay = document.getElementById('navbarOverlay');
    overlay?.classList.add('d-none');
    this.isOverlayOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.isOverlayOpen) {
      const overlay = document.getElementById('navbarOverlay');
      const burgerMenu = document.getElementById('navbarBurgerMenu');
      const target = event.target as HTMLElement;
      
      // Check if click is outside overlay and not on burger menu
      if (overlay && !overlay.contains(target) && burgerMenu && !burgerMenu.contains(target)) {
        this.closeOverlay();
      }
    }
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
