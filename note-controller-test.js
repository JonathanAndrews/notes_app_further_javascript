
function testNoteController() {
var noteController = new NoteController();
assert.isTrue(noteController instanceof NoteController)
}

testNoteController();


function testInsertNoteIntoHTMLMethod() {

// Spy
     // Stub
     function NoteListDouble() {
        this.addNoteCallCount = 0;
    };

    // Spy on #addNote method
    NoteListDouble.prototype.addNote = function () {
        this.addNoteCallCount++;
    }

// Mock
    // Stub
    function NoteViewDouble() {};

    // Mocking method in Stub
    NoteViewDouble.prototype.htmlStringify = function () {
        return "<ul><li><div>Favourite food: pesto</div></li></ul>"
    }

// Test
    var noteListDouble = new NoteListDouble();
    // noteList.addNote("Favourite food: pesto")
    var noteController = new NoteController(noteListDouble, NoteViewDouble);
    window.onload = function() {
        noteController.insertNoteIntoHTML();
        var element = document.getElementById('app');
        var expectedString = "<ul><li><div>Favourite food: pesto</div></li></ul>"
        // testing if NoteController behaves as expected
        // so I Mocked NoteController#htmlStingify
        assert.isTrue(element.innerHTML === expectedString)
        // testing if #addNote was called once
        // so I spied on NoteList#addNote
        assert.isTrue(noteListDouble.addNoteCallCount === 1)
    };
}
    
testInsertNoteIntoHTMLMethod();
