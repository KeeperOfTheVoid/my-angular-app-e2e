'use strict';

module.exports = {
  'Test Dashboard': function (client) {
    var dashboard = client.page.dashboard();

    dashboard.navigate()
      .assert.title('Angular Tour of Heroes')
      .assert.visible('@dashboardHeader')

    client.end();
  }
};