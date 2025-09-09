import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  showDeco() {
    const deco = document.getElementById('picture_deco_container');
    deco?.classList.toggle('d-none');
  }

  hideDeco() {
    const deco = document.getElementById('picture_deco_container');
    deco?.classList.add('d-none');
  }
}

