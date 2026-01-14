import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  booksList: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  // Récupérer les livres du sujet "computers"
  loadBooks() {
    this.loading = true;
    this.error = '';
    this.bookService.getBooksList().subscribe({
      next: (data) => {
        console.log('Data works:', data.works);
        this.booksList = data.works || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des livres:', err);
        this.error = 'Impossible de charger la liste des livres. Veuillez réessayer.';
        this.booksList = [];
        this.loading = false;
      }
    });
  }

  // Naviguer vers le détail d’un livre
  goToDetails(book: any) {
    if (book.key) {
      const id = book.key.split('/')[2];
      this.router.navigate(['/book', id]);
    }
  }

  // Retenter le chargement
  retry() {
    this.loadBooks();
  }
}
