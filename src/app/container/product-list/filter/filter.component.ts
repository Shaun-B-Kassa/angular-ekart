import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() all: number;
  @Input() inStock: number;
  @Input() outOfStock: number;

  @Output() selectedFilterRadioValueChanged : EventEmitter<string>  = new EventEmitter<string>();

  selectedFilterRadioValue: string = 'All';

  onSelectedFilterRadioValueChanged () {
    this.selectedFilterRadioValueChanged.emit(this.selectedFilterRadioValue)
  }


}
