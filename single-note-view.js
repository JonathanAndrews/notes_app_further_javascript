(function (exports) {
    function SingleNoteView(note) {
        this.note = note;
    }

    SingleNoteView.prototype.returnHtmlString = function () {
        return `<div>${this.note.textReader()}</div>`
    }

    exports.SingleNoteView = SingleNoteView
})(this);