import { Component, OnInit } from '@angular/core';
import { titles, menus } from '../objects/menu';

@Component({
    selector: 'Footer',
    template: `
        <div class="container">
            <div class="main">
                <div class="logo">
                    <img src="/assets/image/logo_white_text.png">
                </div>
                <nav>
                    <ul>
                        <li *ngFor="let title of navTitles">{{title}}</li>
                    </ul>
                    <ul>
                        <li *ngFor="let menuArr of navMenus">
                            <ul>
                                <li *ngFor="let menu of menuArr">{{menu}}</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                </div>
                <button class="toggleButton"></button>
            <div class="copyright">COPYRIGHT &copy; KIM AN LEE</div>
        </div>
    `,
    styles: [`
        .container{
            width:100%;
            position:relative;
            padding:60px 80px;
            box-sizing:border-box;
            background-color:#3c3c3c
        }
        .main{
            width:100%;
            height:300px;
            background-color:inherit;
            overflow-y:hidden;
            display:flex;
            justify-content:space-between;
        }
        .main>.logo{
            
        }
        .main>nav{
            width:600px;
            text-align:center;
        }
        .toggleButton{
            width:80px;
            height:24px;
            position:absolute;
            top:0;
            left:50%;
            transform:translate(-50%,-100%);
            background-color:inherit;
            border:none;
            outline:none;
            border-radius:8px 8px 0 0;
        }
        .copyright{
            --height:60px;
            width:100%;
            height:var(--height);
            background-color:rgb(32,32,32);
            text-align:center;
            line-height:var(--height);
            position:absolute;
            bottom:0;
            left:0;
            right:0;
            color:rgb(128,128,128);
        }
    `]
})
export class FooterComponent implements OnInit {
    public navTitles: string[]
    public navMenus: string[][];
    constructor() {
        this.navTitles = titles
        this.navMenus = menus
    }

    ngOnInit(): void { }
}
