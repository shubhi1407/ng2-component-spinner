import { Component, Input  } from '@angular/core';



@Component({
    selector: 'spinner-component',
    template: `<div *ngIf="spinnerShow" class="sc-background"></div>
  <div *ngIf="spinnerShow" [ngClass]="{'sc-default-spinner' : ref.children.length == 0 }"  class="sc-center">
  <div #ref><ng-content></ng-content></div></div>`,
    styles: [`
        .sc-default-spinner {
            width: 20px;
            height: 20px;
            background-color: orange;
            -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
            animation: sk-rotateplane 1.2s infinite ease-in-out;
    }

    @-webkit-keyframes sk-rotateplane {
      0% { -webkit-transform: perspective(120px) }
      50% { -webkit-transform: perspective(120px) rotateY(180deg) }
      100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }

    @keyframes sk-rotateplane {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
      } 50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
      } 100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      }
    }

    .sc-background{
        content : "";
        z-index: 1;
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom: 0;
        background-color: rgba(255,255,255,0.8);
    }
    .sc-center{
      top: 50%;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      z-index: 2;
      transform: translatey(-50%);
    }
`]
})
export class SpinnerComponent {
    @Input() spinnerShow: boolean;
}
