import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPlayVideo]'
})
export class PlayVideoDirective {
/**
 * This directive should listen to the mouse-enter event and access the video DOM element .play()
 * 
 */
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter') mouseover() {
    this.elRef.nativeElement.play();
  }
  @HostListener('mouseleave') mouseexit() {
    this.elRef.nativeElement.pause();
  }

}
