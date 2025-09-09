import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

document.addEventListener('mousemove', (e) => {
  const shadow = document.getElementById('cursor-shadow');
  if (shadow) {
    shadow.style.left = `${e.clientX}px`;
    shadow.style.top = `${e.clientY}px`;
  }
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
