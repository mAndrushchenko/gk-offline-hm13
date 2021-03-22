import { AfterViewInit, Component } from '@angular/core'
import { imagesDataTop, imagesDataBottom } from "./image/images-data/images-data"
import { animate, style, transition, trigger } from "@angular/animations"
import { onDrag } from "../../services/drag-switcher"

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  animations: [
    trigger('imageAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          padding: 0,
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          padding: '*'
        })),
        animate(100)
      ]),
    ])
  ]
})
export class ImagesComponent implements AfterViewInit {
  imagesTop: string[] = []
  imagesBottom: string[] = []

  startNumber = 0

  getImageList(count: number) {
    this.imagesTop = imagesDataTop.slice(count, count + 2)
    this.imagesBottom = imagesDataBottom.slice(count, count + 2)
  }

  onPrev() {
    if (!(this.startNumber <= 0)) {
      this.startNumber = this.startNumber - 1
      this.getImageList(this.startNumber)
    } else {
      this.startNumber = 6
      this.getImageList(this.startNumber)
    }
  }

  onNext() {
    if (!(this.startNumber >= 6)) {
      this.startNumber = this.startNumber + 1
      this.getImageList(this.startNumber)
    } else {
      this.startNumber = 0
      this.getImageList(this.startNumber)
    }
  }

  ngAfterViewInit() {
    onDrag('images', this.onPrev.bind(this), this.onNext.bind(this))
  }

  ngOnInit(): void {
    this.getImageList(this.startNumber)
  }
}
