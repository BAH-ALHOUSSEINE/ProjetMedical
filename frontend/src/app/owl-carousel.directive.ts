import { AfterViewInit, Directive, ElementRef } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appOwlCarousel]' // tu l'utilises comme attribut
})
export class OwlCarouselDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {


  }
}

