import { Component, OnInit } from '@angular/core';
import { titles, menus } from '../objects/menu';

@Component({
    selector: 'Footer',
    template: `
        <div class="container">
            <div class="main" [ngClass]="{hide: !showFooter}">
                <div class="logo">
                    <img src="/assets/image/logo_white_text.png">
                </div>
                <nav>
                    <ul class="titles">
                        <li *ngFor="let title of navTitles; let i = index">
                            <a>{{title}}</a>
                            <ul class="menus">
                                <li *ngFor="let menuArr of navMenus[i]">
                                    {{menuArr}}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="familySite">
                    
                </div>
            </div>
            <button class="toggleButton" (click)="toggleFooter()"></button>
            <div class="copyright">COPYRIGHT &copy; KIM AN LEE</div>
        </div>
    `,
    styles: [`
        .container{
            width:100%;
            position:relative;
            background-color:#3c3c3c
        }
        .main{width:100%;height: 418px;padding: 66px 88px;box-sizing:border-box;background-color:inherit;overflow-y:hidden;display:flex;justify-content:space-between;}
        .main.hide{height:60px;padding:0;}
        nav{width:600px;}
        .titles{width:100%;display:flex;justify-content:space-around;font-weight:bold;font-size:16px;color:#d0d0d0;}
        .titles>li>a{display:block;padding: 9px 0;}
        .menus{
            font-weight:bold;
            font-size:14px;
            color:#909090;
        }
        .menus>li{
            padding: 7px 0;
        }
        .toggleButton{width:80px;height:24px;position:absolute;top:0;left:50%;transform:translate(-50%,-100%);background-color:inherit;border:none;outline:none;border-radius:8px 8px 0 0;}
        .copyright{--height:60px;width:100%;height:var(--height);background-color:rgb(32,32,32);text-align:center;line-height:var(--height);position:absolute;bottom:0;left:0;right:0;color:rgb(128,128,128);}
    `]
})
export class FooterComponent implements OnInit {
    public navTitles: string[]
    public navMenus: string[][];
    public showFooter: boolean;
    constructor() {
        this.navTitles = titles;
        this.navMenus = menus;
        this.showFooter = true;
    }
    public toggleFooter() {
        this.showFooter = !this.showFooter;
    }


    ngOnInit(): void { }
}
