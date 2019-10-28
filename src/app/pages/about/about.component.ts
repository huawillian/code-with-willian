import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  frontEndSkills = [
    'HTML5',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'AngularJS',
    'JQuery',
    'SCSS',
    'Angular 6/7/8',
    'ReactJS',
    'Bootstrap',
    'Redux',
    'D3',
    'Angular Material'
  ];

  backEndSkills = [
    'Back End',
    'NodeJS',
    'ExpressJS',
    'MySQL',
    'MongoDB',
    'PassportJS',
    'Firebase',
    'Heroku'
  ];

  otherSkills = [
    'Jasmine',
    'Chai',
    'Protractor',
    'Mocha',
    'Karma',
    'Webpack',
    'Docker',
    'NPM',
    'Google Maps',
    'Git',
    'IBM WCM',
    'Jenkins'
  ];

  strengths = [
    'User Experience Focus Thinking in the user’s perspective',
    'Full Stack Knowledge Understanding the big picture',
    'Agile Development Leveraging agile best practices from planning to delivery'
  ];

  achievements = [
    'Academic Excellence Graduated with Magna Cum Laude and Dean’s List for all semesters',
    'Phi Beta Kappa Member of the most prestigious honor society in the United States',
    'Upsilon Pi Epsilon Honor society for the Computing and Information Disciplines',
    'Research Publications Published 2 undergraduates research papers (IEEE and ICMA)',
    'Hackathon Award Winner Won 3rd place award in the Global AI Hackathon (Summer 2017)'
  ];

  constructor() { }

  ngOnInit() {
  }

}
