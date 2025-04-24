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
  selectedProject: { 
    id: string;
    title: string;
    description: string;
    technologies: string;
    image: string;
  } | null = null; 


  projects = [
    {
      id: 'join',
      title: 'JOIN',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      image: 'assets/imgs/test1.png'
    },
    {
      id: 'elPolloLoco',
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript | HTML | CSS',
      image: 'assets/imgs/test1.png'
    }
  ];

  openOverlay(projectId: string): void {
    this.selectedProject = this.projects.find(project => project.id === projectId) || null;
    this.isOverlayOpen = true;
  }

  closeOverlay(): void {
    this.isOverlayOpen = false;
    this.selectedProject = null;
  }
}
