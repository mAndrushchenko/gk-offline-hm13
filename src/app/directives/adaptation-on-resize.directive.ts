import { Directive, HostListener, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[adaptOnResize]'
})
export class AdaptationOnResizeDirective implements AfterViewInit {

  @Input() sliderType = '';
  private minIndex = 0;
  private screenWidth = window.innerWidth;

  @Output() amountOfItems = new EventEmitter();

  constructor() {
  }

  ngAfterViewInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
    if (this.sliderType === 'cards') {
      this.minIndex = this.screenWidth > 1650 ? 0 : this.screenWidth > 1200 ? 1 : 2;
    } else if (this.sliderType === 'images') {
      this.minIndex = this.screenWidth > 1200 ? 0 : 1;
    }
    this.amountOfItems.emit(this.minIndex);
  }
}
