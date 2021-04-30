import { File } from '@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system';
import { imagesDataTop, imagesDataBottom } from './modal/images-data/images-data';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type TImagesData = {
  imagesTop: File[],
  imagesBottom: File[]
};

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private images$ = new Subject<TImagesData>();

  private imagesData: TImagesData = {
    imagesTop: [],
    imagesBottom: []
  };

  private startNumber = 0;

  constructor() {
    this.images$.next(this.imagesData);
  }

  setImageList(count = 0) {
    this.imagesData.imagesTop = imagesDataTop.slice(count, count + 2);
    this.imagesData.imagesBottom = imagesDataBottom.slice(count, count + 2);
    this.images$.next(this.imagesData);
  }

  onPrev() {
    this.startNumber = !(this.startNumber <= 0) ? this.startNumber - 1 : 6;
    this.setImageList(this.startNumber);
  }

  onNext() {
    this.startNumber = !(this.startNumber >= 6) ? this.startNumber + 1 : 0;
    this.setImageList(this.startNumber);
  }

  getImageList() {
    return this.images$.asObservable();
  }
}
