import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    { name: 'HTML', icon: 'assets/icons/html.png' },
    { name: 'CSS', icon: 'assets/icons/css.png' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
    { name: 'Material Design', icon: 'assets/icons/material-design.png' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
    { name: 'Angular', icon: 'assets/icons/angular.png' },
    { name: 'Firebase', icon: 'assets/icons/firebase.png' },
    { name: 'GIT', icon: 'assets/icons/git.png' },
    { name: 'Rest-API', icon: 'assets/icons/rest-api.png' },
    { name: 'Scrum', icon: 'assets/icons/scrum.png' },
    { name: 'Linux', icon: 'assets/icons/linux.png' },
    
  ];

  onSkillClick(skillName: string): void {
    if (skillName === 'Growth mindset') {
       let overlayRef = document.getElementById('overlay');
       overlayRef?.classList.toggle('d-none');

    }
}

}
