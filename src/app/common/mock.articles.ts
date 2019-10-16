import { QueryResponseItem, ArticlesQueryFields, ArticleDetailsQueryFields } from "./app.constants";

export class MockArticles {
  static QUERY_RESPONSE: Array<QueryResponseItem<ArticlesQueryFields>> = [
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/0eFqoDrwm9IMDaeBhgq6",
        fields: {
          info: {
            stringValue: "DEMO AVAILABLE"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "AR/VR"
                },
                {
                  stringValue: "Game"
                },
                {
                  stringValue: "Android"
                },
                {
                  stringValue: "Unity"
                }
              ]
            }
          },
          title: {
            stringValue: "Barnland Security"
          },
          thumbnail: {
            stringValue:
              "https://timedotcom.files.wordpress.com/2015/05/google-cardboard-iphone-vr.jpg"
          },
          description: {
            stringValue: "VR game using Unity3D and Cardboard SDK"
          },
          route: {
            stringValue: "barnland-security"
          }
        },
        createTime: "2019-10-13T19:43:25.547336Z",
        updateTime: "2019-10-16T17:19:12.446480Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/5zKHKQMMEwlZkojy9u2c",
        fields: {
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "iOS"
                }
              ]
            }
          },
          title: {
            stringValue: "Bar Buddies"
          },
          thumbnail: {
            stringValue: "https://i.ytimg.com/vi/2gwmTOdga24/hqdefault.jpg"
          },
          description: {
            stringValue: "iOS Social App using XCode and Bluetooth"
          },
          route: {
            stringValue: "bar-buddies"
          },
          info: {
            stringValue: "CODE AVAILABLE"
          },
          type: {
            stringValue: "project"
          }
        },
        createTime: "2019-10-13T19:39:24.967968Z",
        updateTime: "2019-10-16T17:24:50.127926Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/J7Rs5YMrN2xIwWJbJN0A",
        fields: {
          info: {
            stringValue: "CANCELLED"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Game"
                },
                {
                  stringValue: "Unity"
                }
              ]
            }
          },
          title: {
            stringValue: "A New Game"
          },
          thumbnail: {
            stringValue:
              "http://orig04.deviantart.net/65a7/f/2015/345/1/6/pixel_art_rpg_mockup_by_benjirokun-d9jqob5.png"
          },
          description: {
            stringValue: "2D Pixel-graphics RPG using Unity with friends"
          },
          route: {
            stringValue: "a-new-game"
          }
        },
        createTime: "2019-10-13T16:58:37.905323Z",
        updateTime: "2019-10-16T16:52:42.136250Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/MjnlBlsRJhP2ICCMhbCd",
        fields: {
          thumbnail: {
            stringValue:
              "http://static.techspot.com/articles-info/702/images/leap-motion-review.jpg"
          },
          description: {
            stringValue:
              "Windows interface using Leap Motion Controller and SDK"
          },
          route: {
            stringValue: "hci-leap-motion-project"
          },
          info: {
            stringValue: "LEAP MOTION"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Research"
                },
                {
                  stringValue: "Computer Vision"
                }
              ]
            }
          },
          title: {
            stringValue: "HCI Leap Motion Project"
          }
        },
        createTime: "2019-10-13T19:47:51.511759Z",
        updateTime: "2019-10-16T16:53:07.532681Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/SSFuFBOHEHpr1XPOYOaZ",
        fields: {
          info: {
            stringValue: "UNITY WEB PLAYER"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Game"
                },
                {
                  stringValue: "Unity"
                }
              ]
            }
          },
          title: {
            stringValue: "Zombie Project"
          },
          thumbnail: {
            stringValue:
              "https://yt3.ggpht.com/-n9YqjJCKHak/AAAAAAAAAAI/AAAAAAAAAAA/FJmfOSwUIuc/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
          },
          description: {
            stringValue:
              "3D multiplayer zombie survival game using Unity and UNET"
          },
          route: {
            stringValue: "zombie-project"
          }
        },
        createTime: "2019-10-13T20:19:01.898343Z",
        updateTime: "2019-10-16T16:53:27.164978Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/YU18Vj0RAfeBCYlB2Au5",
        fields: {
          info: {
            stringValue: "EMBEDDED SYSTEMS"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Research"
                },
                {
                  stringValue: "Unity"
                },
                {
                  stringValue: "Android"
                },
                {
                  stringValue: "AR/VR"
                },
                {
                  stringValue: "Computer Vision"
                }
              ]
            }
          },
          title: {
            stringValue: "AR Training Renderer"
          },
          thumbnail: {
            stringValue:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/SRI_International_Building.jpg/220px-SRI_International_Building.jpg"
          },
          description: {
            stringValue:
              "AR-Mentor Goes Mobile: A Hacker’s Approach to ARM Development"
          },
          route: {
            stringValue: "ar-training-renderer"
          }
        },
        createTime: "2019-10-13T17:31:42.767130Z",
        updateTime: "2019-10-16T16:54:38.382709Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/Z0AOxSP9a6yhv1oMeBcp",
        fields: {
          info: {
            stringValue: "DEMO AVAILABLE"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Game"
                },
                {
                  stringValue: "Unity"
                }
              ]
            }
          },
          title: {
            stringValue: "Bakemono Blitz"
          },
          thumbnail: {
            stringValue:
              "https://static1.squarespace.com/static/55463e4fe4b0ebc5baf316ef/555b3432e4b0dbc924f60fd2/555b348ae4b0a3d7af139659/1432040591250/Cover.png"
          },
          description: {
            stringValue: "2D platformer runner game using Unity with classmates"
          },
          route: {
            stringValue: "bakemono-blitz"
          }
        },
        createTime: "2019-10-13T17:44:47.761181Z",
        updateTime: "2019-10-16T16:54:50.988384Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/go44MHX0SBYxhzaPBMPZ",
        fields: {
          route: {
            stringValue: "android-claw"
          },
          info: {
            stringValue: "CODE AVAILABLE"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Game"
                },
                {
                  stringValue: "Android"
                }
              ]
            }
          },
          title: {
            stringValue: "Android Claw"
          },
          thumbnail: {
            stringValue:
              "https://cdn1.pcadvisor.co.uk/cmsdata/features/3613985/android_800_thumb800.jpg"
          },
          description: {
            stringValue: "Simple Arcade game using Android SDK"
          }
        },
        createTime: "2019-10-13T17:41:34.205836Z",
        updateTime: "2019-10-16T16:55:03.774575Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/mxKHtH7vI6cWYogsl1uf",
        fields: {
          thumbnail: {
            stringValue:
              "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg"
          },
          description: {
            stringValue:
              "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect"
          },
          route: {
            stringValue: "taiko-capstone"
          },
          info: {
            stringValue: "PUBLISHED ON ICMA"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Research"
                },
                {
                  stringValue: "Computer Vision"
                }
              ]
            }
          },
          title: {
            stringValue: "Taiko Capstone"
          }
        },
        createTime: "2019-10-13T20:10:18.628617Z",
        updateTime: "2019-10-16T16:55:27.065895Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/pqPgEHz4K663Bt3u91rA",
        fields: {
          thumbnail: {
            stringValue:
              "https://github.com/huawillian/CodeWithWillian/raw/master/src/codewithwillian-app/images/league-of-love.png"
          },
          description: {
            stringValue: "Real-time Public Speaking Evaluation Tool"
          },
          route: {
            stringValue: "why-are-they-so-angry"
          },
          info: {
            stringValue: "HACKATHON WINNER"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Web"
                },
                {
                  stringValue: "Computer Vision"
                }
              ]
            }
          },
          title: {
            stringValue: "Why Are They So Angry?"
          }
        },
        createTime: "2019-10-13T20:14:38.837064Z",
        updateTime: "2019-10-16T16:56:45.944426Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/w1saU0xqTwTuJ3fhJgp5",
        fields: {
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Research"
                }
              ]
            }
          },
          title: {
            stringValue: "Datamining Capstone"
          },
          thumbnail: {
            stringValue:
              "http://soshable.com/wp-content/uploads/2013/01/Tweet1.jpg"
          },
          description: {
            stringValue:
              "Threshold and Associative Based Classification for Social Spam Profile Detection on Twitter"
          },
          route: {
            stringValue: "datamining-capstone"
          },
          info: {
            stringValue: "PUBLISHED ON IEEE"
          },
          type: {
            stringValue: "project"
          }
        },
        createTime: "2019-10-13T20:07:31.234585Z",
        updateTime: "2019-10-16T17:15:56.772498Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/w9XiKkrRPUqBnAp6DwxV",
        fields: {
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Web"
                },
                {
                  stringValue: "Unity"
                },
                {
                  stringValue: "Game"
                }
              ]
            }
          },
          title: {
            stringValue: "Otaku Beatdown"
          },
          thumbnail: {
            stringValue:
              "https://raw.githubusercontent.com/huawillian/CodeWithWillian/master/src/codewithwillian-app/images/otaku-beatdown.png"
          },
          description: {
            stringValue: "Multiplayer Online Battle Arena Ninja Fighting Game"
          },
          route: {
            stringValue: "otaku-beatdown"
          },
          info: {
            stringValue: "DEMO AVAILABLE"
          },
          type: {
            stringValue: "project"
          }
        },
        createTime: "2019-10-13T19:59:44.953774Z",
        updateTime: "2019-10-16T16:57:22.325165Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    },
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/articles/yMY1EN8FCDkAZ4w7sqS0",
        fields: {
          info: {
            stringValue: "HACKATHON"
          },
          type: {
            stringValue: "project"
          },
          categories: {
            arrayValue: {
              values: [
                {
                  stringValue: "Game"
                },
                {
                  stringValue: "Computer Vision"
                }
              ]
            }
          },
          title: {
            stringValue: "Project Moses"
          },
          thumbnail: {
            stringValue:
              "http://www.intorobotics.com/wp-content/uploads/2016/01/1440154976-e1453303963627.png"
          },
          description: {
            stringValue: "Top-down space shooter game using OpenCV"
          },
          route: {
            stringValue: "project-moses"
          }
        },
        createTime: "2019-10-13T20:03:44.334481Z",
        updateTime: "2019-10-16T16:57:47.538177Z"
      },
      readTime: "2019-10-16T17:25:08.348939Z"
    }
  ];

  static ARTICLE_DETAILS_RESPONSE: Array<QueryResponseItem<ArticleDetailsQueryFields>> = [
    {
      document: {
        name:
          "projects/code-with-willian/databases/(default)/documents/article-details/tANLCXadTqRJJCZ5Di8Y",
        fields: {
          type: {
            stringValue: "project"
          },
          route: {
            stringValue: "ar-training-renderer"
          },
          body: {
            stringValue:
              "<p>In this poster we elaborate on the steps taken to port the ARMentor rendering client to an Android ARM platform through unconventional means.</p> <p>View Poster: https://firebasestorage.googleapis.com/v0/b/polymer-website.appspot.com/o/AR-Mentor%20Goes%20Mobile-v7.pdf?alt=media&token=9368d4e8-6172-4a27-a8f1-d65bfb43fe2b</p> <p>I worked on this project during my internship at SRI International, Princeton, Summer of 2014. When I started working, the training renderer system used a Mac Mini. I ported the system to Android on the Odroid-XU. However, there were many things I had to do to ensure that all the features worked as it did on the Mac Mini.</p> <p>1) Rebuild the Android ARM Kernel - While the Mac Mini supported USB/Serial devices for the system's sensors, the Odroid did not natively support them. I needed to rebuild the kernel so the motion estimation libraries could use the sensors.</p> <p>2) CHROOT Hacking the Android ARM Shell - Instead of rebuilding the entire motion estimation libraries, I decided to CHROOT the Android shell into a Linux shell.</p> <p>3) Developing the Training Renderer for Android - The Mac mini build used .dlls. However, dlls do not work on the Android platform. Therefore, I needed to create plugins from the Android SDK such as Text to Speech and Video2D. Other plugins needed to be recompiled into Native Plugins in C++. This was done using the Android NDK (Native Development Kit).</p> <p>As a result, I successfully ported the system to an Android Odroid-XU device. While the performance was not optimal when compared to the more powerful Mac Mini, the system was a proof of concept, of which allowed for the entire system to be recompiled for Android months later.</p>"
          }
        },
        createTime: "2019-10-13T17:36:47.626009Z",
        updateTime: "2019-10-16T15:40:08.104831Z"
      },
      readTime: "2019-10-16T17:33:03.326235Z"
    }
  ];

  static ARTICLE_FAILED_RESPONSE: Array<QueryResponseItem<undefined>> = [
    {
      readTime: "2019-10-16T20:39:24.605900Z"
    }
  ];
}
