import { Component } from '@angular/core'

@Component({
    selector: 'slide',
    template: `
        <ul class="container">
            <li class="slide"></li>
            <li class="slide"></li>
        </ul>
    `,
    styles: [`
        .container{
            width:100%;
            height:100vh;
            overflow:hidden;
        }
        .slide{
            width:100%;
            height:100%;
            transition:.4s;
        }
        .slide:nth-child(1){
            background-image:url(/assets/image/slide1.png)
        }
    `]
})

export class SlideComponent {
}