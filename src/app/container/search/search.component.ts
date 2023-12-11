import { Component, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('searchInput') searchInputEl : ElementRef;

  onUpdatedSearchText() {
    this.searchTextChanged.emit(this.searchInputEl.nativeElement.value);
  }

}
