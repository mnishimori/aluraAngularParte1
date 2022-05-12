import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.platFormDetector.isPlatformBrowser
      && this.element.nativeElement.click();
  }

}
