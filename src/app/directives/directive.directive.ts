import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el:ElementRef<any>) { 
    this.el.nativeElement.style.backgroundColor="red"
  }

}
