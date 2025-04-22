import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  toggleJoin(): void {
    const element = document.getElementById('join')?.querySelector('img');
    if (element) {
      element.classList.toggle('d-none');
    }
  }

  toggleElPolloLoco(): void {
    const element = document.getElementById('elPolloLoco')?.querySelector('img');
    if (element) {
      element.classList.toggle('d-none');
    }
  }
}
