import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  @ViewChild('bgImg', { static: true }) bgImg;
  private scrollSubscription: Subscription;
  private isRaf = false;
  public filterCriteria: string;
  public items = [
    {
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/SRI_International_Building.jpg/220px-SRI_International_Building.jpg',
      title: 'AR Training Renderer',
      description: 'AR-Mentor Goes Mobile: A Hacker’s Approach to ARM Development',
      tags: 'All,Music,Games,Other',
      link: '/test1',
      show: true
    },
    {
      thumbnail: 'https://raw.githubusercontent.com/huawillian/CodeWithWillian/master/src/codewithwillian-app/images/otaku-beatdown.png',
      title: 'Otaku Beatdown',
      description: 'Multiplayer Online Battle Arena Ninja Fighting Game',
      tags: 'All,Music,Games',
      link: '/test2',
      show: true
    },
    {
      thumbnail: 'https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg',
      title: 'Barnland Security',
      description: 'VR game using Unity3D and Cardboard SDK',
      tags: 'All,Tech,Music,Other',
      link: '/test3',
      show: true
    },
    {
      thumbnail: 'http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg',
      title: 'Taiko Capstone',
      description: 'Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ',
      tags: 'All,Tech,Games',
      link: '/test4',
      show: true
    }
  ];
  public animate = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.handleScroll();

    this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
      if (!this.isRaf) {
        this.isRaf = true;
        window.requestAnimationFrame(this.handleScroll.bind(this));
      }
    });

    this.filter('All');
  }

  handleScroll() {
    if (this.isRaf) {
      this.bgImg.nativeElement.style.transform = `translateY(-${window.scrollY / 3}px)`;
      this.isRaf = false;
    }
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  public filter(tagName) {
    if (tagName !== this.filterCriteria) {
      this.filterCriteria = tagName;


      const nodes = this.elementRef.nativeElement.querySelectorAll('.item-container');
      const itemsAnimConfig = [];

      // Set start locations for each item
      nodes.forEach(node => {
        itemsAnimConfig.push({
          start: {
            top: node.offsetTop,
            left: node.offsetLeft
          }
        })
      });
      nodes.forEach((node, idx) => {
        const show = this.items[idx].tags.includes(this.filterCriteria);
        node.style.display = show || this.items[idx].show ? 'block' : 'none';
      });
      nodes.forEach((node, idx) => {
        itemsAnimConfig[idx].start = {
          top: itemsAnimConfig[idx].start.top - node.offsetTop,
          left: itemsAnimConfig[idx].start.left - node.offsetLeft
        };
      });
      nodes.forEach((node, idx) => {
        node.style.display = '';
      });

      // Set end locations for each item
      nodes.forEach((node, idx) => {
        const show = this.items[idx].tags.includes(this.filterCriteria);
        node.style.display = show ? 'block' : 'none';
      });
      nodes.forEach((node, idx) => {
        itemsAnimConfig[idx].end = {
          top: node.offsetTop,
          left: node.offsetLeft
        };
      });
      nodes.forEach((node, idx) => {
        const show = this.items[idx].tags.includes(this.filterCriteria);
        node.style.display = show || this.items[idx].show ? 'block' : 'none';
        itemsAnimConfig[idx].show = show;
      });
      nodes.forEach((node, idx) => {
        itemsAnimConfig[idx].end = {
          top: itemsAnimConfig[idx].end.top - node.offsetTop,
          left: itemsAnimConfig[idx].end.left - node.offsetLeft
        };
      });
      nodes.forEach((node, idx) => {
        node.style.display = '';
      });

      // Set start animations configs
      nodes.forEach((node, idx) => {
        const config = itemsAnimConfig[idx];
        if (this.items[idx].show && config.show) {
          // Set start location if currently showing and will still be showing
          node.style.transform = `translate(${config.start.left}px,${config.start.top}px) scale(1)`;
        } else if (!this.items[idx].show && itemsAnimConfig[idx].show) {
          // Set start location if currently not showing and will be showing
          node.style.transform = `translate(${config.end.left}px,${config.end.top}px) scale(0)`;
          node.style.display = 'block';
          node.style.opacity = '0';
        } else if (this.items[idx].show && !itemsAnimConfig[idx].show) {
          // Set start location if currently showing and will not be showing
          node.style.transform = `translate(${config.start.left}px,${config.start.top}px) scale(1)`;
          node.style.opacity = '1';
        } else {
          // Do nothing if currently not showing and will still not be showing
          node.style.display = 'none';
        }
      });

      // Set end animation configs
      setTimeout(() => {
        this.animate = true;
        // Set animation classes
        nodes.forEach((node, idx) => {
          const config = itemsAnimConfig[idx];
          if (this.items[idx].show && config.show) {
            // Translate if currently showing and will still be showing
            node.style.transform = `translate(${config.end.left}px,${config.end.top}px) scale(1)`;
          } else if (!this.items[idx].show && itemsAnimConfig[idx].show) {
            // Animate in if currently not showing and will be showing
            node.style.transform = `translate(${config.end.left}px,${config.end.top}px) scale(1)`;
            node.style.opacity = '1';
          } else if (this.items[idx].show && !itemsAnimConfig[idx].show) {
            // Animate out if currently showing and will not be showing
            node.style.transform = `translate(${config.start.left}px,${config.start.top}px) scale(0)`;
            node.style.opacity = '0';
          } else {
            // Do nothing if currently not showing and will still not be showing
          }
        });
      }, 0);

      setTimeout(() => {
        this.animate = false;
        nodes.forEach((node, idx) => {
          this.items[idx].show = itemsAnimConfig[idx].show;
          node.style.display = '';
          node.style.transform = '';
          node.style.opacity = '';
        });
      }, 600);

      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.item-container.show .item-link').focus({ preventScroll: true });
      }, 1000);
    }
  }
}
