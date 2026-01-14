import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeadBar } from './components/head-bar/head-bar';
import { SearchBar } from './components/search-bar/search-bar';
import { BookList } from './components/book-list/book-list';
import { BookDetail } from './components/book-detail/book-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterModule, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('open-library-app');
}
