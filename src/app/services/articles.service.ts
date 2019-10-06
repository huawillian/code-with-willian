import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ArticleType } from '../common/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticles(articleType: ArticleType) {
    return of([
      {
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/SRI_International_Building.jpg/220px-SRI_International_Building.jpg",
        title: "AR Training Renderer",
        description:
          "AR-Mentor Goes Mobile: A Hacker’s Approach to ARM Development",
        tags: "All,Music,Games,Other",
        link: "/project/test1",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://raw.githubusercontent.com/huawillian/CodeWithWillian/master/src/codewithwillian-app/images/otaku-beatdown.png",
        title: "Otaku Beatdown",
        description: "Multiplayer Online Battle Arena Ninja Fighting Game",
        tags: "All,Music,Games",
        link: "/test2",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg",
        title: "Barnland Security",
        description: "VR game using Unity3D and Cardboard SDK",
        tags: "All,Tech,Music,Other",
        link: "/test3",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/SRI_International_Building.jpg/220px-SRI_International_Building.jpg",
        title: "AR Training Renderer",
        description:
          "AR-Mentor Goes Mobile: A Hacker’s Approach to ARM Development",
        tags: "All,Music,Games,Other",
        link: "/test1",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://raw.githubusercontent.com/huawillian/CodeWithWillian/master/src/codewithwillian-app/images/otaku-beatdown.png",
        title: "Otaku Beatdown",
        description: "Multiplayer Online Battle Arena Ninja Fighting Game",
        tags: "All,Music,Games",
        link: "/test2",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg",
        title: "Barnland Security",
        description: "VR game using Unity3D and Cardboard SDK",
        tags: "All,Tech,Music,Other",
        link: "/test3",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg",
        title: "Barnland Security",
        description: "VR game using Unity3D and Cardboard SDK",
        tags: "All,Tech,Music,Other",
        link: "/test3",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg",
        title: "Barnland Security",
        description: "VR game using Unity3D and Cardboard SDK",
        tags: "All,Tech,Music,Other",
        link: "/test3",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg",
        title: "Barnland Security",
        description: "VR game using Unity3D and Cardboard SDK",
        tags: "All,Tech,Music,Other",
        link: "/test3",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      },
      {
        thumbnail:
          "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg",
        title: "Taiko Capstone",
        description:
          "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect ",
        tags: "All,Tech,Games",
        link: "/test4",
        footerText: 'November 11, 2019'
      }
    ]);
  }
}
