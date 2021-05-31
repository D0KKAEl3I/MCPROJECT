import { Component } from '@angular/core'

@Component({
    selector: 'Slide',
    template: `
    <div class="container">
        <ul class="slides" [ngClass]="{moved:!slideMoved}">
            <li class="slide" ></li>
            <li class="slide" ></li>
        </ul>
        <div class="controls">
            <span>SCROLL</span><span>{{slideMoved? 1 : 2}} / 2</span>
            <ul class="buttons">
                <li><button (click)="changeSlide();"><img src="/assets/image/left-arrow.svg"></button></li>
                <li>
                    <button (click)="interval?stopSlide():startSlide();" style="font-size:100%;">
                        <img [src]="startOrPauseIMG">
                    </button>
                </li>
                <li><button (click)="changeSlide();"><img src="/assets/image/right-arrow.svg"></button></li>
            </ul>
        </div>
        <div class="toggleCard">
            <div [ngClass]="{toggled: cardMoved}" >
                <div class="card">
                    <a [routerLink]="[ '/' ]">
                        <h2>생명보험</h2>
                        <span>고객 생애 전반의 보장과 금융 이벤트 준비를 위한 종합 솔루션을 제공합니다</span>
                    </a>
                </div>
                <div class="card">
                    <a [routerLink]="[ '/' ]">
                        <h2>손해보험</h2>
                        <span>고객의 신체,재물 상의 손해를 대비하기 위한 금융 솔루션을 제공합니다. </span>
                    </a>
                </div>
                <button (click)="toggleCard()" [ngStyle]="{'background-color': cardMoved?'rgb(240,123,0)':'rgb(240,87,0)'}">
                        <img src="/assets/image/right-arrow.svg" [hidden]="cardMoved">
                        <img src="/assets/image/left-arrow.svg" [hidden]="!cardMoved">  
                </button>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .container{width:100%;height:calc(100vh - 80px);overflow:hidden; position:relative;top:80px;}
        .container::after{
            content:' ';
            width:2px;
            height:40px;
            background-color:var(--background-color);
            position:absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%);
        }
        .slides{width: 200%;height: 100%;display: flex;transition: .6s;position: relative;left: 0%;}
        .slide{width: 50%;height: 100%; background-size:cover; background-repeat:no-repeat;}
        .slide:nth-child(1){background-image: url(/assets/image/slide1.png);}
        .slide:nth-child(2){background-image: url(/assets/image/slide2.png);}
        .moved{left: -100%}
        
        .controls, .controls *{--size:32px;color:var(--background-color);text-align:center; }
        .controls{position:absolute; bottom:64px; left:50%; transform:translateX(-50%); width:240px; height:var(--size); display:flex; justify-content:space-between; align-items:center;}
        .controls>span{width:100%; flex:2; height:var(--size); font-size: 125%;}
        .buttons{display:flex; justify-content:space-around; width:100%; height:var(--size); flex:4; align-items:center;}
        .buttons>li>button{width:var(--size); height:var(--size); border-radius:999px; box-sizing:border-box; border:2px solid var(--background-color); background-color:transparent; cursor: pointer; outline:none; transition:.2s;}
        .buttons>li>button:hover{border-color:var(--main-color); color:var(--main-color);}
        .buttons>li>button>img{filter: invert(100%) sepia(11%) saturate(0%) hue-rotate(350deg) brightness(107%) contrast(100%);transition:inherit;transform:scale(0.7)}
        .buttons>li>button:hover>img{filter: invert(60%) sepia(94%) saturate(3874%) hue-rotate(355deg) brightness(95%) contrast(116%);}
        
        .toggleCard{position:absolute;left:0;bottom:0;width:400px; overflow-x:hidden;}
        .toggleCard>div{display:flex;width:calc(200% - 40px);position:relative;left:0;transition:.4s}
        .card{width:360px;color:white;box-sizing:border-box;padding:48px 40px;}
        .card:nth-child(1){background-color:var(--main-color);order:1}
        .card:nth-child(2){background-color:var(--sub-color);order:3;}
        .card>a>h2{margin-bottom:10px;}
        .card>a>span{font-weight:lighter;}
        .toggleCard>div>button{width:50px;border:none;outline:none;cursor:pointer;order:2;font-weight:bolder;font-size:80px;color:white;position:relative;}
        .toggleCard>div>button>img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(8deg) brightness(109%) contrast(103%);}
        .toggled{transform:translate(calc(-50% + 24px));}
    `]
})

export class SlideComponent {
    public slideMoved: boolean;
    public interval: any;
    public cardMoved: boolean;
    public startOrPauseIMG: string = "";

    constructor() {
        this.slideMoved = false;
        this.startSlide()
        this.cardMoved = false;
    }
    public toggleCard(): void {
        this.cardMoved = !this.cardMoved;
    }
    public changeSlide(): void {
        this.stopSlide()
        this.slideMoved = !this.slideMoved;
        this.startSlide()
    }
    public startSlide(): void {
        this.interval = setInterval(() => this.slideMoved = !this.slideMoved, 5000)
        this.startOrPauseIMG = "/assets/image/pause.svg"
    }

    public stopSlide(): void {
        this.interval = clearInterval(this.interval)
        this.startOrPauseIMG = "/assets/image/play.svg"
    }
}