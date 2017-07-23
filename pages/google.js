'use strict';

'@tags': ['sanity'],
module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: { 
      selector: 'input[type=text]' 
    },
    submit: { 
      selector: '//button[@name="btnG"]', 
      locateStrategy: 'xpath' 
    }
  }
};