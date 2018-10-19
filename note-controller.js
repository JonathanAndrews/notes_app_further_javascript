
(function (exports) {
    function NoteController(noteList = new NoteList(), noteView = NoteListView) {
      noteList.addNote("Favourite drink: seltzer")
      this.noteListView = new noteView(noteList)
    }
  
    NoteController.prototype.insertNoteIntoHTML = function () {
      var element = document.getElementById('app')
      element.innerHTML = this.noteListView.htmlStringify();
    };

    

    NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
      var boundShowNoteForCurrentPage = this.showNoteForCurrentPage.bind(this)
      window.addEventListener("hashchange", boundShowNoteForCurrentPage);
    };

    NoteController.prototype.showNoteForCurrentPage = function() {
      var noteId = this.getNoteIdFromUrl(window.location);
      var note = this.noteListView.seeList().findNoteById(noteId) 
      this.showNote(note);
    };

    NoteController.prototype.getNoteIdFromUrl = function (location) {
      return location.hash.split("#notes/")[1];
    }

    NoteController.prototype.showNote = function (note) {
      var singleNoteView = new SingleNoteView(note)
      var element = document.getElementById('app');
      element.innerHTML = singleNoteView.htmlStringifyOneNote();
    }


    exports.NoteController = NoteController;
  })(this);
  
  
  var noteController = new NoteController()

  noteController.insertNoteIntoHTML()

  noteController.makeUrlChangeShowNoteForCurrentPage()
