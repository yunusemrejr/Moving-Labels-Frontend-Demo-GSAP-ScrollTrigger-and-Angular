import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title(title: any) {
  }

  @ViewChild('dropdownMenu', { static: true })
  dropdownMenu!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.animation();
   }

   animation(): void {
    gsap.from(this.dropdownMenu.nativeElement.childNodes, {
      duration: 1.5,
      opacity: 0.1,
      y:  50,
      x: -50,
      stagger: 1.2,
      delay: 0.5,
    });


  }

}

