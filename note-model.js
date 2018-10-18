(function(exports) {
    function Note(textInput, idInput) {
        this.text = textInput;
        this.id = idInput;
    };

    Note.prototype.textReader = function() {
        return this.text;
    };

    function noteFactory(textInput, idInput) {
        return new Note(textInput, idInput);
    }

    exports.noteFactory = noteFactory;
})(this);