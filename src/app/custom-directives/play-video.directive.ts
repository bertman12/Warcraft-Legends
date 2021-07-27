import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPlayVideo]'
})
export class PlayVideoDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') mouseover() {
    this.elRef.nativeElement.play();
  }
  @HostListener('mouseleave') mouseexit() {
    this.elRef.nativeElement.pause();
  }

}
