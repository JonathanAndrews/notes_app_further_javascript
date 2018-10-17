
(function (exports) {
    function NoteController(noteList = new NoteList(), noteView = NoteListView) {
      noteList.addNote("Favourite drink: seltzer")
      this.noteListView = new noteView(noteList)
    }
  
    NoteController.prototype.insertNoteIntoHTML = function () {
      var element = document.getElementById('app')
      element.innerHTML = this.noteListView.htmlStringify();
  
    };
    exports.NoteController = NoteController;
  
  })(this);
  
  
  var noteController = new NoteController()
  noteController.insertNoteIntoHTML()