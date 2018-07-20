'use strict';

var SongPanePage = require('../pages/song-pane-page'),
AddNewSongPage = require('../pages/add-new-song'),

    songPanePage = new SongPanePage(),
    addNewSong = new AddNewSongPage();


module.exports = function () {
    this.Given (/^I am on the home page$/, function (done) {
        songPanePage.openNewSongPage().then(function (){
          done();
        });
    });

    this.When (/^I open add new song page$/, function (done) {

      addNewSong.addNewSong().then(function (){
        done();
      });
    });

    this.Then (/^It should open the form to add new song$/, function () {
    });
};
