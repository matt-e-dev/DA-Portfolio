import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MainContentComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DA-Portfolio';

  constructor(private translate: TranslateService) {
    // Set default language
    translate.setDefaultLang('en');

    // Set translations manually for testing
    translate.setTranslation('en', {
      navigation: {
        about: 'About me',
        skills: 'Skills',
        projects: 'Projects',
      },
      aboutMe: {
        title: 'Who I am',
        subtitle: 'About Me',
        description:
          'After completing my training in E-Commerce Management, including my IHK exam, I decided to expand my expertise and immerse myself in the world of coding.',
        description2:
          "During my college time, I regularly joined the programmers group in the afternoons to learn and practice coding, which further fueled my motivation to pursue web development more seriously. To build on this foundation, I joined Developer Akademie, where I recently completed a comprehensive frontend development training program.",
        location: 'Based in Berlin, open to remote work opportunities.',
        mindset: 'Happy to push my boundaries and embrace new challenges.',
        learning:
          "I approach every challenge as an opportunity to grow and learn. Whether it's debugging complex code or architecting new features, I thrive on finding elegant solutions through analytical thinking and creative problem-solving. I love pushing beyond my limits, constantly expanding my skill set, and collaborating with others to achieve the best results..",
      
      },
      skills: {
        title: 'Technologies',
        subtitle: 'Skill Set',
        description:
          'Through my training in frontend development at Developer Akademie, I gained practical experience with core technologies such as HTML, CSS, JavaScript, and Angular, along with tools like version control (Git/GitHub) and responsive design best practices. I enjoy building user-friendly and visually appealing interfaces that bring ideas to life.',
        description2:
          "At the same time, I understand how quickly the web development landscape evolves, so I make it a priority to continually learn and adapt — whether that's diving deeper into modern frameworks, exploring new frontend tools, or improving my workflow. Staying curious and open-minded helps me not only keep up with rapid changes in the industry but also grow into a more versatile developer.",
        needSkill: {
          you: 'You',
          need: 'need',
          another: 'another',
          skill: 'skill',
          question: '?',
        },
        contactText:
          'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        letsTalk: "Let's talk",
        growthOverlay: "I've got a special interest in learning",
      },
      projects: {
        portfolio: 'Portfolio',
        featuredProjects: 'Featured Projects',
        description:
          'Explore a selection of my work here - Interact with projects to see my skills in action.',
        livetest: 'Live Test',
        github: 'GitHub',
        nextProject: 'Next Project',
        join: {
          question: 'What is the project about?',
          description:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        pokemon: {
          question: 'What is the project about?',
          description:
            'Project based on the Pokemon API. Search for your favorite Pokemon and see its stats, abilities and types.',
        },
      },
      contact: {
        title: 'Contact',
        letsWork: "Let's work",
        together: 'together',
        gotProblem: 'Got a problem to solve?',
        needDeveloper: 'Need a Frontend developer?',
        letsTalk: "Let's talk!",
        encourageText:
          'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        nameQuestion: "What's your name?",
        namePlaceholder: 'Your name goes here',
        nameError: 'Please enter your name',
        emailQuestion: "What's your email?",
        emailPlaceholder: 'your.email@enterhere.com',
        emailError: 'Please enter a valid email',
        helpQuestion: 'How can I help you?',
        messagePlaceholder: 'Hello, my name is Matthias, I am interested in...',
        messageError: 'Please enter a message',
        submit: 'Say hello :)',
        privacyText: "I've read the",
        privacyPolicy: 'privacy policy',
        privacyAgree: 'and agree to the processing of my data as outlined.',
        privacyError: 'You must accept the privacy policy',
      },
      slider: {
        availableRemote: 'Available for remote work',
        frontendDeveloper: 'Frontend Developer',
        basedBerlin: 'Based in Berlin',
        openToWork: 'Open to work',
      },
      header: {
        title: 'Frontend Developer',
        checkWork: 'Check my work',
        contactMe: 'Contact me',
      },
      footer: {
        webDeveloper: 'Web Developer',
        location: 'Berlin, Germany',
        github: 'Github',
        linkedin: 'LinkedIn',
        legalNotice: 'Legal Notice',
        email: 'Email',
      },
    });

    translate.setTranslation('de', {
      navigation: {
        about: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
      },
      aboutMe: {
        title: 'Wer ich bin',
        subtitle: 'Über mich',
        description:
          'Nach dem Abschluss meiner Umschulung im E-Commerce Management, einschließlich meiner IHK-Prüfung, beschloss ich, meine Expertise zu erweitern und in die Welt des Programmierens einzutauchen.',
        description2:
          'Während meiner Studienzeit ging ich regelmäßig nachmittags zur Programmierergruppe, um das Programmieren zu lernen und zu üben, was meine Motivation verstärkte, Webentwicklung ernsthafter zu verfolgen. Um auf diesem Fundament aufzubauen, trat ich der Developer Akademie bei, wo ich kürzlich ein umfassendes Frontend-Entwicklungstrainingsprogramm abgeschlossen habe.',
        location: 'Mit Sitz in Berlin, offen für Remote-Arbeitsmöglichkeiten.',
        mindset:
          'Ich freue mich darauf, meine Grenzen zu überschreiten und neue Herausforderungen anzunehmen.',
        learning:
          'Ich betrachte jede Herausforderung als Gelegenheit zu wachsen und zu lernen. Ob beim Debuggen komplexen Codes oder beim Entwickeln neuer Features, ich liebe es, elegante Lösungen durch analytisches Denken und kreative Problemlösung zu finden. Ich liebe es, über meine Grenzen hinauszugehen, meinen Fähigkeitsbereich ständig zu erweitern und mit anderen zusammenzuarbeiten, um die besten Ergebnisse zu erzielen.',
      },
      skills: {
        title: 'Technologien',
        subtitle: 'Fähigkeiten',
        description:
          'Durch meine Ausbildung in der Frontend-Entwicklung bei der Developer Akademie sammelte ich praktische Erfahrungen mit Kerntechnologien wie HTML, CSS, JavaScript und Angular sowie Tools wie Versionskontrolle (Git/GitHub) und responsive Design Best Practices. Ich entwickle gerne benutzerfreundliche und visuell ansprechende Oberflächen, die Ideen zum Leben erwecken.',
        description2:
          'Gleichzeitig verstehe ich, wie schnell sich die Webentwicklungslandschaft entwickelt, daher ist es für mich eine Priorität, kontinuierlich zu lernen und mich anzupassen — sei es das Vertiefen in moderne Frameworks, das Erkunden neuer Frontend-Tools oder das Verbessern meines Workflows. Neugierig und aufgeschlossen zu bleiben hilft mir nicht nur, mit den schnellen Veränderungen in der Branche Schritt zu halten, sondern auch zu einem vielseitigeren Entwickler zu werden.',
        needSkill: {
          you: 'Sie ',
          need: 'benötigen ',
          another: 'eine weitere ',
          skill: 'Fähigkeit',
          question: '?',
        },
        contactText:
          'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
        letsTalk: 'Sprechen wir',
        growthOverlay: 'Ich habe ein besonderes Interesse an ',
      },
      projects: {
        portfolio: 'Portfolio',
        featuredProjects: 'Ausgewählte Projekte',
        description:
          'Entdecken Sie eine Auswahl meiner Arbeiten hier - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
        livetest: 'Live Test',
        github: 'GitHub',
        nextProject: 'Nächstes Projekt',
        join: {
          question: 'Worum geht es bei dem Projekt?',
          description:
            'Task Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
        },
        pokemon: {
          question: 'Worum geht es bei dem Projekt?',
          description:
            'Projekt basierend auf der Pokemon API. Suchen Sie nach Ihrem Lieblings-Pokemon und sehen Sie seine Statistiken, Fähigkeiten und Typen.',
        },
      },
      contact: {
        title: 'Kontakt',
        letsWork: 'Lassen Sie uns',
        together: 'kooperieren',
        gotProblem: 'Haben Sie ein Problem zu lösen?',
        needDeveloper: 'Benötigen Sie einen Frontend-Entwickler?',
        letsTalk: 'Sprechen wir!',
        encourageText:
          'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein bisheriges Wissen zu erweitern.',
        nameQuestion: 'Wie ist Ihr Name?',
        namePlaceholder: 'Ihr Name kommt hier hin',
        nameError: 'Bitte geben Sie Ihren Namen ein',
        emailQuestion: 'Wie lautet Ihre E-Mail?',
        emailPlaceholder: 'ihre.email@hierangeben.com',
        emailError: 'Bitte geben Sie eine gültige E-Mail ein',
        helpQuestion: 'Wie kann ich Ihnen helfen?',
        messagePlaceholder:
          'Hallo, mein Name ist Matthias, ich interessiere mich für...',
        messageError: 'Bitte geben Sie eine Nachricht ein',
        submit: 'Sag hallo :)',
        privacyText: 'Ich habe die',
        privacyPolicy: 'Datenschutzerklärung',
        privacyAgree:
          'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        privacyError: 'Sie müssen der Datenschutzerklärung zustimmen',
      },
      slider: {
        availableRemote: 'Verfügbar für Remote-Arbeit',
        frontendDeveloper: 'Frontend Entwickler',
        basedBerlin: 'Ansässig in Berlin',
        openToWork: 'Bereit für neue Projekte',
      },
      header: {
        title: 'Frontend Entwickler',
        checkWork: 'Meine Arbeit ansehen',
        contactMe: 'Kontaktieren Sie mich',
      },
      footer: {
        webDeveloper: 'Web Entwickler',
        location: 'Berlin, Deutschland',
        github: 'Github',
        linkedin: 'LinkedIn',
        legalNotice: 'Impressum',
        email: 'E-Mail',
      },
    });

    translate.use('en');
  }
}
