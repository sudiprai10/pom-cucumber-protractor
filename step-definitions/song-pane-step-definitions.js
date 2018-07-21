'use strict';

var SongPanePage = require('../pages/song-pane-page'),
AddNewSongPage = require('../pages/add-new-song'),

    songPanePage = new SongPanePage(),
    addNewSong = new AddNewSongPage();

module.exports = function () {
    this.Given (/^I am on the home page and I open new song panel$/, function (done) {
        songPanePage.openNewSongPage().then(function (){
          done();
        });
    });

    this.When (/^I should able to add song with "([^"]*)", "([^"]*)", "([^"]*)" and "([^"]*)"$/, function (key, signature, language, visibility) {
      addNewSong.addNewSong(key, signature, language, visibility).then(function (){

      });
    });

    this.Then (/^It should open the form to add new song$/, function () {
    });
};
