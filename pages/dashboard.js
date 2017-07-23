'use strict';

module.exports = {
  url: 'http://localhost:4200/dashboard',
  elements: {
    dashboardHeader: { 
      selector: 'h3[id=dashboard-header]' 
    },
    submit: { 
      selector: '//button[@name="btnG"]', 
      locateStrategy: 'xpath' 
    }
  }
};