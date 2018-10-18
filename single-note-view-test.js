function testSingleNoteViewHasHtmlStringifyOneNoteMethod() {

    function NoteDouble() {
    }

    NoteDouble.prototype.textReader = function () {
        return "Favourite drink: seltzer"
    }
    var note = new NoteDouble() 
    var singleNoteView = new SingleNoteView(note)
    var htmlString = singleNoteView.htmlStringifyOneNote()
    var expectedString = "<div>Favourite drink: seltzer</div>"
    console.log(htmlString)
    assert.isTrue(htmlString === expectedString);
} 

testSingleNoteViewHasHtmlStringifyOneNoteMethod();
