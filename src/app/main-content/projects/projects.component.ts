import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
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

  isOverlayOpen = false;
  selectedProject = '';

  openOverlay(projectName: string): void {
    this.isOverlayOpen = true;
    this.selectedProject = projectName;
  }

  closeOverlay(): void {
    this.isOverlayOpen = false;
    this.selectedProject = '';
  }
}
