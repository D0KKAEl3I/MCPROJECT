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
            <section>




            </section>
            <section class="section">




            </section>
        </div>
        s
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
    .nav>ul>li{
        font-weight:bold;
        font-style: var(--font-family);
        font-size : 18px;
        float:left;
    }
    
    ` ]
})
export class HeaderComponent {
    constructor() {

    }

    ngOnInit(): void { }
}
