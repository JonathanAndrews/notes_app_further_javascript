(function(exports) {
    function NoteList(newNote = noteFactory) {
        this.notes = [];
        this.newNote = newNote;
        this.id = 0;
    };

    NoteList.prototype.getNotes = function () {
        return this.notes;
    };

    NoteList.prototype.addNote = function (text) {
        this.notes.push(this.newNote(text, this.id))
        this.id ++;
    };

    NoteList.prototype.findNoteById = function (idNum) {
        var arrayOfNotes = this.getNotes() 
        var note = arrayOfNotes.find(function(individualNote) {
            return individualNote.id === parseInt(idNum)
        })
        return note
    }

    exports.NoteList = NoteList;
})(this);