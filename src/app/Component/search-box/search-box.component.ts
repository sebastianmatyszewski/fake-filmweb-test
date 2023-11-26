import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchQuery: string = '';

  onSearch() {
    this.searchEvent.emit(this.searchQuery.trim());
  }
}