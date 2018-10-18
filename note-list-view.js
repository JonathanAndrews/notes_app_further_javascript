(function(exports) {
    function NoteListView(input) {
        this.list = input;
    }

    NoteListView.prototype.htmlStringify = function () {
        var notesArray = this.list.getNotes();
        var htmlString = "<ul>"
        for (var i = 0; i < notesArray.length; i++) {
            var wholeString = notesArray[i].textReader();
            var previewString = wholeString.substring(0,20);
            htmlString += `<li><div><a href="#notes/${notesArray[i].id}">${previewString}</a></div></li>`;
        }
        htmlString += "</ul>"
        return htmlString

    }

    exports.NoteListView = NoteListView
})(this)