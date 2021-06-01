import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'Header',
    template: `
        <div>
            <header>
                <div class="container">
                    <img  src="/assets/image/img_site_logo.png">
                    <nav class="nav">
                        <ul>
                            <li>
                                <a href="#">회사소개</a>
                            </li>
                            <li>
                                <a href="#">상품소개</a>
                            </li>
                            <li>
                                <a href="#">인재채용</a>
                            </li>
                            <li>
                                <a href="">고객지원</a>
                            </li>
                            <li>
                                <a href="">홍보센터</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    `,
    styles: [` 
    header{
            position: fixed;
            display:flex;
            z-index:9999;
            width:100%;
            height:80px;
            background-color: var(--main-color);
    }
    .container{
        width:100%;
    }
    .container>img{
        position: relative;
        top: 21px;
        left: 40px;
    }
    .nav{
        display: flex;
        height:100%;
        margin-left: 51.3%;
        transform: translate(-50% , -50%);
    }
    .nav>ul{
        height:100%;
    }
    .nav>ul>li{
        font-weight:bold;
        font-style: var(--font-family);
        font-size : 18px;
        float:left;
        line-height:80px;
        margin-left : 90px;
        height:100%;
    }
    .nav>ul>li:hover{
        border-width:30px;
        border-top: 3px solid orange;
        
    }
    .nav>ul>li>a{
        letter-spacing:-4px;
    }
    ` ]
})
export class HeaderComponent {
    constructor() {

    }

    ngOnInit(): void { }
}
