import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExpandOptions]'
})
export class ExpandOptionsDirective {

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.appendChild(this.elRef.nativeElement,this.renderer.createText("IM ALIVE"));
  }
  @HostListener('mouseleave') mouseexit() {

  }

}
