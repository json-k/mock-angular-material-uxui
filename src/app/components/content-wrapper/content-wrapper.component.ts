import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


export enum Position {
  Only = 'only', First = 'first', Middle = 'middle', Last = 'last'
}

@Component({
  selector: 'content-wrapper',
  template: `<ng-content></ng-content> `,
  styles: [':host { box-sizing: border-box; }'
  ]
})
export class ContentWrapperComponent implements OnChanges {
  @HostBinding('style.overflow-y')
  @Input()
  overflow: string = 'hidden';

  @HostBinding('style.padding')
  @Input()
  _margin: string = '33px';

  @Input()
  position: Position = Position.Only;

  @Input()
  padding: number = 33;

  _refresh(): void {
    switch (this.position) {
      case Position.First: {
        this._margin = `${this.padding}px ${this.padding}px 0 ${this.padding}px`;
        break;
      }
      case Position.Middle: {
        this._margin = `0 ${this.padding}px`;
        break;
      }
      case Position.Last: {
        this._margin = `0 ${this.padding}px ${this.padding}px ${this.padding}px`;
        break;
      }
      default: {
        this._margin = `${this.padding}px`;
        break;
      }
    }
  }

  constructor() { this._refresh(); }
  ngOnChanges(changes: SimpleChanges): void {
    this._refresh();
  }


}
