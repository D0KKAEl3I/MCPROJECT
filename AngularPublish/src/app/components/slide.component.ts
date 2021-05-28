import { Component } from '@angular/core'

@Component({
    selector: 'slide',
    template: `
    <div class="container">
        <ul class="slides" [ngClass]="{moved:!moved}">
            <li class="slide" ></li>
            <li class="slide" ></li>
        </ul>
        <div class="controls">
            <span>SCROLL</span><span>{{moved? 1 : 2}} / 2</span>
            <ul class="buttons">
                <li><button (click)="slideLeft();">&#x2039;</button></li>
                <li><button (click)="interval?stopSlide():startSlide();" style="font-size:100%;">{{
                    interval? '&#x23f8;'
                    : '&#x23f5;'
                }}</button></li>
                <li><button (click)="slideRight();">&#x203a;</button></li>
            </ul>
        </div>
    </div>
    `,
    styles: [`
        .container{width:100%;height:100vh;overflow:hidden; position:relative;}
        .slides {width: 200%;height: 100%;display: flex;transition: .4s;position: relative;left: 0;}
        .slide {width: 50%;height: 100%;}
        .slide:nth-child(1) {background-image: url(/assets/image/slide1.png)}
        .slide:nth-child(2) {background-image: url(/assets/image/slide2.png)}
        .moved {left: -100%}
        .controls, .controls *{
            --size:32px;
            color:var(--main-color);
            text-align:center;
        }
        .controls{position:absolute; bottom:80px; left:50%; transform:translateX(-50%); width:240px; height:var(--size); display:flex; justify-content:space-between; align-items:center;}
        .controls>span{width:100%; flex:2; height:var(--size); font-size: 125%}
        .buttons{display:flex; justify-content:space-around; width:100%; height:var(--size); flex:4; align-items:center;}
        .buttons>li>button{width:var(--size); height:var(--size); font-size:150%; border-radius:999px; box-sizing:border-box; border:2px solid var(--main-color); background-color:transparent; cursor: pointer; outline:none;}
        .buttons>li>button:hover{border-color:var(--sub-color); color:var(--sub-color); }
    `]
})

export class SlideComponent {
    public moved: boolean;
    public interval: any;

    constructor() {
        this.moved = false;
        this.startSlide()
    }

    public slideRight(): void {
        this.stopSlide()
        this.moved = true;
        this.startSlide()
    }
    public slideLeft(): void {
        this.stopSlide()
        this.moved = false;
        this.startSlide()
    }

    public startSlide(): void {
        this.interval = setInterval(() => this.moved = !this.moved, 5000)
        this.moved = !this.moved;
    }

    public stopSlide(): void {
        this.interval = clearInterval(this.interval)
    }
}