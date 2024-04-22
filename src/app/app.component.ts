import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  move(): void {
    this.curX += (this.tgX - this.curX) / 20;
    this.curY += (this.tgY - this.curY) / 20;
    const interBubble = document.querySelector('.interactive') as HTMLDivElement;
    interBubble.style.transform = `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`;
    requestAnimationFrame(() => {
      this.move();
    });
  }

  onMouseMove(event: MouseEvent): void {
    this.tgX = event.clientX;
    this.tgY = event.clientY;
  }


  ngOnInit(): void {
    this.move();
  }

  curX = 0;
  curY = 0;
  tgX = 0;
  tgY = 0;
}
