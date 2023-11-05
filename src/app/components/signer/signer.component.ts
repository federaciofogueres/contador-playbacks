import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent, concatMap, takeUntil, tap, Subscription, pairwise, switchMap } from 'rxjs';


@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.scss']
})
export class SignerComponent {
  @Input() width = 512;
  @Input() height = 418;
  @ViewChild('canvas') myCanvas!: ElementRef;
  public context!: CanvasRenderingContext2D;
  public isDrawing = false;
  private lastX = 0;
  private lastY = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.context = (this.myCanvas.nativeElement as HTMLCanvasElement).getContext('2d')!;
    this.myCanvas.nativeElement.width = this.width;
    this.myCanvas.nativeElement.height = this.height;

    // set some default properties about the line
    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#000';
  }

  startDrawing(event: MouseEvent | TouchEvent): void {
    this.isDrawing = true;
    const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    this.lastX = (event as MouseEvent).clientX - rect.left || (event as TouchEvent).touches[0].clientX - rect.left;
    this.lastY = (event as MouseEvent).clientY - rect.top || (event as TouchEvent).touches[0].clientY- rect.top;
    /*
    this.isDrawing = true;
    this.context.beginPath();
    const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    this.context.moveTo(
      (event as MouseEvent).clientX - rect.left || (event as TouchEvent).touches[0].clientX - rect.left,
      (event as MouseEvent).clientY - rect.top || (event as TouchEvent).touches[0].clientY - rect.top
    );*/
  }

  draw(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing) {
      return;
    }

    event.preventDefault();
    const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    const currentX = ((event as MouseEvent).clientX || (event as TouchEvent).touches[0].clientX) - rect.left;
    const currentY = ((event as MouseEvent).clientY || (event as TouchEvent).touches[0].clientY) - rect.top;
    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY);
    this.context.lineTo(currentX, currentY);
    this.context.stroke();

    /*
    const distance = this.distanceBetween(this.lastX, this.lastY, currentX, currentY);
    const angle = this.angleBetween(this.lastX, this.lastY, currentX, currentY);

    for (let i = 0; i < distance; i += 5) {
      const x = this.lastX + Math.cos(angle) * i;
      const y = this.lastY + Math.sin(angle) * i;
      this.context.lineTo(x, y);
      this.context.stroke();
    }*/

    this.lastX = currentX;
    this.lastY = currentY;

    /*
    const rect = this.myCanvas.nativeElement.getBoundingClientRect();
    this.context.lineTo(
      (event as MouseEvent).clientX - rect.left || (event as TouchEvent).touches[0].clientX - rect.left,
      (event as MouseEvent).clientY - rect.top || (event as TouchEvent).touches[0].clientY - rect.top
    );
    this.context.stroke();*/
  }

  stopDrawing(): void {
    this.isDrawing = false;
    this.context.closePath()
  }

  clearSigner() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  private distanceBetween(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  private angleBetween(x1: number, y1: number, x2: number, y2: number): number {
    return Math.atan2(y2 - y1, x2 - x1);
  }

}
