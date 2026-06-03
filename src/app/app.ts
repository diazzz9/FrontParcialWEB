import { Component } from '@angular/core';
import { FacultadComponent } from './components/facultad/facultad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FacultadComponent],
  template: '<app-facultad />'
})
export class App {}