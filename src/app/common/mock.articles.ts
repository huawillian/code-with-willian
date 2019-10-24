import {
  GetArticlesResponse,
  GetArticlesResponseDocument
} from "./app.constants";

export class MockArticles {
  static GET_ARTICLES_RESPONSE: GetArticlesResponse = {
    documents: [
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/a-new-game",
        fields: {
          info: {
            stringValue: "CANCELLED"
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
          }
        },
        createTime: "2019-10-18T03:22:51.187221Z",
        updateTime: "2019-10-18T03:22:51.187221Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/android-claw",
        fields: {
          info: {
            stringValue: "CODE AVAILABLE"
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
        createTime: "2019-10-18T03:22:51.485138Z",
        updateTime: "2019-10-18T03:22:51.485138Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/ar-training-renderer",
        fields: {
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
          info: {
            stringValue: "EMBEDDED SYSTEMS"
          }
        },
        createTime: "2019-10-18T03:22:51.358291Z",
        updateTime: "2019-10-18T03:22:51.358291Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/bakemono-blitz",
        fields: {
          info: {
            stringValue: "DEMO AVAILABLE"
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
          }
        },
        createTime: "2019-10-18T03:22:51.386593Z",
        updateTime: "2019-10-18T03:22:51.386593Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/bar-buddies",
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
          info: {
            stringValue: "CODE AVAILABLE"
          }
        },
        createTime: "2019-10-18T03:22:51.209181Z",
        updateTime: "2019-10-18T03:22:51.209181Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/barnland-security",
        fields: {
          info: {
            stringValue: "DEMO AVAILABLE"
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
          }
        },
        createTime: "2019-10-18T03:21:33.846204Z",
        updateTime: "2019-10-18T03:21:33.846204Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/datamining-capstone",
        fields: {
          thumbnail: {
            stringValue:
              "http://soshable.com/wp-content/uploads/2013/01/Tweet1.jpg"
          },
          description: {
            stringValue:
              "Threshold and Associative Based Classification for Social Spam Profile Detection on Twitter"
          },
          info: {
            stringValue: "PUBLISHED ON IEEE"
          },
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
          }
        },
        createTime: "2019-10-18T03:22:51.403692Z",
        updateTime: "2019-10-18T03:22:51.403692Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/hci-leap-motion-project",
        fields: {
          thumbnail: {
            stringValue:
              "http://static.techspot.com/articles-info/702/images/leap-motion-review.jpg"
          },
          description: {
            stringValue:
              "Windows interface using Leap Motion Controller and SDK"
          },
          info: {
            stringValue: "LEAP MOTION"
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
        createTime: "2019-10-18T03:22:51.192526Z",
        updateTime: "2019-10-18T03:22:51.192526Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/otaku-beatdown",
        fields: {
          info: {
            stringValue: "DEMO AVAILABLE"
          },
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
          }
        },
        createTime: "2019-10-18T03:22:51.374760Z",
        updateTime: "2019-10-18T03:22:51.374760Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/project-moses",
        fields: {
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
          info: {
            stringValue: "HACKATHON"
          }
        },
        createTime: "2019-10-18T03:22:51.386836Z",
        updateTime: "2019-10-18T03:22:51.386836Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/taiko-capstone",
        fields: {
          description: {
            stringValue:
              "Automatic Transcription of Japanese Taiko Drumming Using the Microsoft Kinect"
          },
          info: {
            stringValue: "PUBLISHED ON ICMA"
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
          },
          thumbnail: {
            stringValue:
              "http://files.holdmyticket.com/image/upload/q_68,dn_72,f_auto/v6/uploads/flyers2/0ripaipo7fgr7i15f8by.jpg"
          }
        },
        createTime: "2019-10-18T03:22:51.365306Z",
        updateTime: "2019-10-18T03:22:51.365306Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/why-are-they-so-angry",
        fields: {
          title: {
            stringValue: "Why Are They So Angry?"
          },
          thumbnail: {
            stringValue:
              "https://github.com/huawillian/CodeWithWillian/raw/master/src/codewithwillian-app/images/league-of-love.png"
          },
          description: {
            stringValue: "Real-time Public Speaking Evaluation Tool"
          },
          info: {
            stringValue: "HACKATHON WINNER"
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
          }
        },
        createTime: "2019-10-18T03:22:51.385496Z",
        updateTime: "2019-10-18T03:22:51.385496Z"
      },
      {
        name:
          "projects/code-with-willian/databases/(default)/documents/projects/zombie-project",
        fields: {
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
          info: {
            stringValue: "UNITY WEB PLAYER"
          }
        },
        createTime: "2019-10-18T03:22:51.269588Z",
        updateTime: "2019-10-18T03:22:51.269588Z"
      }
    ]
  };

  static GET_ARTICLE_DETAIL_RESPONSE: GetArticlesResponseDocument = {
    name:
      "projects/code-with-willian/databases/(default)/documents/projects/a-new-game",
    fields: {
      thumbnail: {
        stringValue:
          "http://orig04.deviantart.net/65a7/f/2015/345/1/6/pixel_art_rpg_mockup_by_benjirokun-d9jqob5.png"
      },
      description: {
        stringValue: "2D Pixel-graphics RPG using Unity with friends"
      },
      body: {
        stringValue:
          "<p>Github: https://github.com/huawillian/A-New-Game-Project</p><p>I started this project with a few friends in Winter of 2016. At the time, we had one programmer (me), one graphics artist, and two concept artists. In two months, we had blueprints for the entire RPG realm, concept art for the characters, and a rough draft of the story. As the programmer, I had the basic navigation, movie modules, scenes, and player controls finished. Unfortunately, one member of the team had other ideas for the project and was not able to commit to the team meetings. We eventually put off the game's development and never got to giving this project a real name.</p>"
      },
      info: {
        stringValue: "CANCELLED"
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
      tldr: {
        stringValue:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
      },
      example: {
        stringValue:
          "function toyProblemFn(treasureMap) {\\n     /* Insert Solution */\\n }\\n  const input = [\\n     ['L', 'L', 'O', 'O'],\\n     ['T', 'L', 'O', 'T'],\\n     ['L', 'O', 'O', 'L'],\\n     ['L', 'O', 'T', 'L']\\n ];\\n \\n /* Should Output: [\\n     ['L', 'L', 'O', 'O'],\\n     ['T', 'L', 'O', 'T'],\\n     ['L', 'O', 'O', 'L'],\\n     ['L', 'O', 'T', 'L']\\n ]\\n */\\n console.log(toyProblemFn(input));\\n"
      },
      solution: {
        stringValue:
          "function toyProblemFn(treasureMap) {\\n     /* Insert Solution */\\n }\\n  const input = [\\n     ['L', 'L', 'O', 'O'],\\n     ['T', 'L', 'O', 'T'],\\n     ['L', 'O', 'O', 'L'],\\n     ['L', 'O', 'T', 'L']\\n ];\\n \\n /* Should Output: [\\n     ['L', 'L', 'O', 'O'],\\n     ['T', 'L', 'O', 'T'],\\n     ['L', 'O', 'O', 'L'],\\n     ['L', 'O', 'T', 'L']\\n ]\\n */\\n console.log(toyProblemFn(input));\\n"
      },
      problem: {
        stringValue:
          "<p _ngcontent-atv-c6=\\\"\\\">You bought an ancient map of the surrounding islands and the locations of the hidden treasures on each of those islands. However, you only have enough supplies to travel to and from one of these islands. Your goals is to find the island with the most amount of treasure. </p><p _ngcontent-atv-c6=\\\"\\\"> The map is a 2 dimensional matrix where each item can either be 'W', 'L', or 'T', which stands for water, landmass, and buried treasure respectively. A cluster of landmasses is considered an island if they are connected to each other by being immediately adjacent to each other or through other connected land masses. Buried treasure are also landmasses. The output should be a list of the indexes representing the island with the most connected treasures. </p>"
      },
      explanation: {
        stringValue:
          "<p> There are only 3 treasures in this island: [1, 0], [1, 3], and [3, 2]. The first treasure is not connected to any other treasures through landmasses. The second and third treasures are connected by landmasses: [2, 3] and [3, 3]. </p>"
      },
      links: {
        arrayValue: {
          values: [
            {
              mapValue: {
                fields: {
                  linkType: {
                    stringValue: "github"
                  },
                  url: {
                    stringValue:
                      "https://github.com/huawillian/A-New-Game-Project"
                  }
                }
              }
            },
            {
              mapValue: {
                fields: {
                  linkType: {
                    stringValue: "html"
                  },
                  url: {
                    stringValue: "https://code-with-willian.web.app/"
                  }
                }
              }
            },
            {
              mapValue: {
                fields: {
                  linkType: {
                    stringValue: "soundcloud"
                  },
                  url: {
                    stringValue: "https://soundcloud.com/willian-hua"
                  }
                }
              }
            },
            {
              mapValue: {
                fields: {
                  linkType: {
                    stringValue: "apk"
                  },
                  url: {
                    stringValue:
                      "https://drive.google.com/open?id=0B_ePbu-n2EAmUjl3cnRsT3J2anM"
                  }
                }
              }
            },
            {
              mapValue: {
                fields: {
                  linkType: {
                    stringValue: "pc"
                  },
                  url: {
                    stringValue:
                      "https://drive.google.com/open?id=0B_ePbu-n2EAmel9qWVdXYjlGcVE"
                  }
                }
              }
            },
            {
              mapValue: {
                fields: {
                  linkType: {
                    stringValue: "link"
                  },
                  url: {
                    stringValue: "https://www.flaticon.com/search?word=location"
                  }
                }
              }
            }
          ]
        }
      }
    },
    createTime: "2019-10-18T03:22:51.187221Z",
    updateTime: "2019-10-18T03:22:51.187221Z"
  };
}
