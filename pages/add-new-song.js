'use strict';

var AddNewSongPage = function () {};

AddNewSongPage.prototype = Object.create({}, {
  songTitleField: {
    value: 'song-title',
    writable: false
  },

  lyricTextArea: {
    value: '//textarea',
    writable: false
  },

  songKey: {
    value: 'song.key',
    writable: false
  },

songSignature: {
  value: 'song.signature',
  writable: false
},

language: {
  value:'song.language',
  writable: false
},

visibility: {
  value: 'v',
  writable: false
},

songTempo: {
  value: 'song.tempo',
  writable: false
},

artistName: {
  value: 'song.artists',
  writable: false
},

copyWrite: {
  value: 'song.copyright',
  writable: false
},

  addNewSong: {
    value: function () {
      var newSongTitleField = element(by.name(this.songTitleField));
      newSongTitleField.sendKeys("Teri Meri...");
      var addLyric = element(by.xpath(this.lyricTextArea));
      addLyric.sendKeys("F I will worship (I will worship)");
      var selectKey = element(by.model(this.songKey));
      selectKey.$('[value="1"]').click();
      var selectSignature = element(by.model(this.songSignature));
      selectSignature.$('[value="1"]').click();
      var selectLanguage = element(by.model(this.language));
      selectLanguage.$('[value="3"]').click();
      var selectVisibility = element(by.model(this.visibility));
      selectVisibility.$('[value="1"]').click();
      var tempoField = element(by.model(this.songTempo));
      tempoField.sendKeys("1213");
      var artistNameField = element(by.model(this.artistName));
      artistNameField.sendKeys("Sudip Rai");
      var copyWriteField = element(by.model(this.copyWrite));
      copyWriteField.sendKeys("Copy Write 2018");

      var submitButton = element(by.css("[type='submit']"));
      return submitButton.click();
  }
}
});

module.exports = AddNewSongPage;
