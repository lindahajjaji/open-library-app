import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-search-bar',
    standalone: true,
  imports: [FormsModule],

  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
/*@Output() searchTitleEvent = new EventEmitter<string>();
  @Output() searchYearEvent = new EventEmitter<number>();

  // Méthode appelée par le bouton "Rechercher" pour le titre
  onSearchTitle(title: string) {
    if (title && title.trim() !== '') {
      this.searchTitleEvent.emit(title);
    }
  }

  // Méthode appelée par le bouton "Filtrer" pour l'année
  onSearchYear(year: string) {
    const yearNum = Number(year);
    if (!isNaN(yearNum)) {
      this.searchYearEvent.emit(yearNum);
    }}*/
    title: string = '';
  year!: number;

  @Output() searchTitle = new EventEmitter<string>();
  @Output() searchYear = new EventEmitter<number>();

  onSearchTitle() { this.searchTitle.emit(this.title); }
  onSearchYear() { this.searchYear.emit(this.year); }
}
