import { Component, OnInit } from '@angular/core';
import { FacultadService } from '../../services/facultad.service';
import { Facultad } from '../../models/facultad.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {
  torneos: Facultad[] = [];
  nuevaFacultad: Facultad = { nombre: '', decano: '', ubicacion: '' };
  enviando = false;

  constructor(private facultadService: FacultadService) {}

  ngOnInit() {
    this.cargarFacultades();
  }

  cargarFacultades() {
    this.facultadService.listar().subscribe(data => {
      this.torneos = data;
    });
  }

  crearFacultad() {
    this.enviando = true;
    this.facultadService.crear(this.nuevaFacultad).subscribe(() => {
      this.cargarFacultades();
      this.nuevaFacultad = { nombre: '', decano: '', ubicacion: '' };
      this.enviando = false;
    });
  }
}