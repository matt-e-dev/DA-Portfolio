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

  toggleImage(projectId: string, show: boolean): void {
    const element = document.getElementById(projectId);
    if (element) {
      if (show) {
        element.classList.remove('d-none'); 
      } else {
        element.classList.add('d-none'); 
      }
    }
  }

  isOverlayOpen = false; 
  
  selectedProject: { 
    id: string;
    count: string;
    title: string;
    question: string;
    description: string;
    technologies: string;
    image: string;
    skills: { name: string; icon: string }[]; 
  } | null = null;


  projects = [
    {
      id: 'join',
      count: '01',
      title: 'JOIN',
      question: 'What is the project about?',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      image: 'assets/imgs/test1.png',
      icon: 'assets/icons/join-icon.svg',
      skills: [
        { name: 'Angular', icon: 'assets/icons/angular.png' },
        { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
        { name: 'HTML', icon: 'assets/icons/html.png' },
        { name: 'CSS', icon: 'assets/icons/css.png' },
        { name: 'Firebase', icon: 'assets/icons/firebase.png' }
      ]
    },
    {
      id: 'elPolloLoco',
      count: '02',
      title: 'El Pollo Loco',
      question: 'What is the project about?',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: 'JavaScript | HTML | CSS',
      image: 'assets/imgs/test1.png',
      icon: 'assets/icons/el-pollo-loco-icon.svg',
      skills: [
        { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
        { name: 'HTML', icon: 'assets/icons/html.png' },
        { name: 'CSS', icon: 'assets/icons/css.png' }
      ]
    }
  ];

  nextProject(): void {
    if (this.selectedProject) {
     
      const currentIndex = this.projects.findIndex(project => project.id === this.selectedProject?.id);
  
      const nextIndex = (currentIndex + 1) % this.projects.length;
  
      this.selectedProject = this.projects[nextIndex];
    }
  }

  openOverlay(projectId: string): void {
    this.selectedProject = this.projects.find(project => project.id === projectId) || null;
    this.isOverlayOpen = true;
  
    document.body.classList.add('no-scroll');
  }
  
  closeOverlay(): void {
    this.isOverlayOpen = false;
    this.selectedProject = null;
  
    document.body.classList.remove('no-scroll');
  }
}
