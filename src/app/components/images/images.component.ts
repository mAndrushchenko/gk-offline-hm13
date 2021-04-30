import { File } from '@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system';
import { animate, style, transition, trigger } from '@angular/animations';
import { ImagesService } from '../../services/images.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { onDrag } from '../../services/drag-switcher';

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
          padding: 0
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          padding: '*'
        })),
        animate(100)
      ])
    ])
  ]
})
export class ImagesComponent implements OnInit, AfterViewInit {
  imagesTop: File[] = [];
  imagesBottom: File[] = [];
  private screenWidth = window.innerWidth;
  amountOfImages = this.screenWidth > 1200 ? 0 : 1;


  constructor(private slider$: ImagesService) {
    this.getImages();
  }

  getImages() {
    this.slider$.getImageList().subscribe(imagesList => {
      this.imagesTop = imagesList.imagesTop;
      this.imagesBottom = imagesList.imagesBottom;
    });
  }

  changeImagesAmount(amount: number) {
    this.amountOfImages = amount;
  }

  onPrev() {
    this.slider$.onPrev();
  }

  onNext() {
    this.slider$.onNext();
  }

  ngAfterViewInit() {
    onDrag('images', this.onPrev.bind(this), this.onNext.bind(this));
  }

  ngOnInit(): void {
    this.slider$.setImageList();
  }
}
