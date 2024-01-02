import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true,
})
export class CustomStyleDirective {
  constructor(private obj: ElementRef, private renderer: Renderer2) {
    this.obj.nativeElement.style.backgroundColor = 'yellow';
    this.obj.nativeElement.style.fontWeight = 'bold';
    // this.renderer.setStyle(this.obj.nativeElement, 'font-weight', 'bold');
  }
}
