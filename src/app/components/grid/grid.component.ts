import { Component, OnInit, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  animations: [
    trigger("fadeAnimation", [
      state(
        "false",
        style({
          opacity: 0
        })
      ),
      state(
        "true",
        style({
          opacity: 1
        })
      ),
      transition(
        ":enter",
        [
          style({ opacity: 0 }),
          animate("600ms {{delay}} ease-in-out", style({ opacity: 1 }))
        ],
        {
          params: {
            delay: "0ms"
          }
        }
      ),
      transition("* => *", [animate("600ms")])
    ]),
    trigger("itemAnimation", [
      state(
        "false, true",
        style({
          width: "{{width}}",
          height: "{{height}}",
          transform: "{{transform}}"
        }),
        {
          params: {
            width: "0",
            height: "0",
            transform: ""
          }
        }
      ),
      transition(
        ":enter",
        [
          style({
            width: "{{width}}",
            height: "{{height}}",
            transform: "{{transform}}"
          }),
          animate("600ms ease-in-out")
        ],
        {
          params: {
            width: "0",
            height: "0",
            transform: ""
          }
        }
      ),
      transition(
        "false => true",
        [
          animate(
            "600ms ease-in-out",
            style({
              width: "{{width}}",
              height: "{{height}}",
              transform: "{{transform}}"
            })
          )
        ],
        {
          params: {
            width: "0",
            height: "0",
            transform: ""
          }
        }
      ),
      transition("true => false", [animate(0)])
    ])
  ]
})
export class GridComponent implements OnInit, OnChanges {
  @Input() filterCriteria: string;
  @Input() items: any;
  @Input() gridCssClass : string;
  public displayedItems = [];
  public animate = false;
  public slots = [];
  public active = false;

  constructor(private elementRef: ElementRef,) { }

  ngOnInit() {
    this.filter(this.filterCriteria);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.filterCriteria) {
      this.filter(changes.filterCriteria.currentValue);
    }
  }


  updateSlots() {
    const grids = this.elementRef.nativeElement.querySelectorAll(".grid-item");
    grids.forEach((el, i) => {
      const slot = {
        top: el.offsetTop,
        left: el.offsetLeft,
        width: el.offsetWidth,
        height: el.offsetHeight
      };
      this.slots[i] = slot;
    });
  }

  render() {
    const newDisplayedItems = this.items.filter(item =>
      item.tags.includes(this.filterCriteria)
    );
    if (newDisplayedItems.length > this.displayedItems.length) {
      this.displayedItems = newDisplayedItems;
    }

    setTimeout(() => {
      this.updateSlots();

      let counter = 0;
      this.items.forEach(item => {
        if (item.tags.includes(this.filterCriteria)) {
          item.slot = counter;
          item.show = true;
          counter++;
        } else {
          item.show = false;
        }
      });

      this.active = false;
      this.animate = true;
    }, 0);

    setTimeout(() => {
      this.animate = false;
      this.displayedItems = newDisplayedItems;
      this.active = true;
    }, 600);
  }

  filter(criteria: string) {
    this.filterCriteria = criteria;
    this.render();
  }

  withPx(i = 0, prop: string) {
    return this.slots[i][prop] + "px";
  }

  transform(i = 0, show = false) {
    return `translate(${this.slots[i].left}px, ${this.slots[i].top}px) scale(${
      show ? 1 : 0
    })`;
  }

  opacity(show = false) {
    return show ? 1 : 0;
  }

  delay(i) {
    return i * 250 + "ms";
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.updateSlots();
  }

  @HostListener("mouseover", ["$event"])
  onMouseOver() {
    this.active = false;
  }
}
