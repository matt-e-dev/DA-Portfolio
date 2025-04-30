import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

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

}
