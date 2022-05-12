import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }

  isPlatformBrowser(value: string) {
    console.log(this.platformId);
    console.log(value);
    return this.isPlatformBrowser(this.platformId);
  }
}
