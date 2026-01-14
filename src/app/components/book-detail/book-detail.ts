import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-detail',
  imports: [CommonModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements OnInit {
 bookId: string = '';
  book: any = null;
  loading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    this.loadBook();
  }

  loadBook() {
    this.loading = true;
    this.error = '';
    this.bookService.getBookById(this.bookId).subscribe({
      next: (data) => {
        console.log('Book data:', data); // 🔹 debug
        this.book = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du livre:', err);
        this.error = 'Impossible de charger les détails du livre.';
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/books']);
  }
}
