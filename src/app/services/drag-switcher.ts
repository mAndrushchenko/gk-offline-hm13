import { fromEvent } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export function onDrag(name: string, onPrev: () => void, onNext: () => void): void {
  const element = document.getElementById(name);
  if (!element) {
    return;
  }
  const mouseUp$ = fromEvent(element, 'mouseup');
  const mouseDown$ = fromEvent(element, 'mousedown');
  let start = 0;
  let end = 0;

  const onEnd = () => mouseUp$.pipe(
    map((event: any) => {
      return end = event.clientX;
    })
  );
  mouseDown$.pipe(
    map((event: any) => start = event.clientX),
    switchMap(onEnd)
  ).subscribe(() => {
    const dif = Math.abs(start - end);
    if (dif > 100) {
      if (start > end) {
        onNext();
      } else if (start < end) {
        onPrev();
      }
    }
  });
}


