import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'ngx-search-fields',
  templateUrl: 'search-fields.component.html',
})
export class SearchComponent {
  constructor(
    private searchService: NbSearchService,
  ) {
    this.searchService.onSearchSubmit()
      .subscribe((value: { term: String; tag?: String }) => {
        console.log(value);
      });
  }
}
