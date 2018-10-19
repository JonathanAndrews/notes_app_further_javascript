function testNoteListHasGetNotesMethod() {
    var list = new NoteList();
    assert.isTrue(Array.isArray(list.getNotes()) && list.getNotes().length === 0);
};

testNoteListHasGetNotesMethod();

function testNoteListCanAddNotes() {
    var list = new NoteList();
    list.addNote("Favourite drink: seltzer")
    console.log(list.getNotes()[0].textReader())
    assert.isTrue(list.getNotes()[0].textReader() === "Favourite drink: seltzer")
};

testNoteListCanAddNotes();

function testNoteListInitialisesWithIdZero() {
    var list = new NoteList();
    assert.isTrue(list.id === 0);
};

testNoteListInitialisesWithIdZero();


function testNoteListsIdAttributeIncrements() {
    var list = new NoteList();
    list.addNote("Favourite drink: seltzer")
    assert.isTrue(list.id === 1);
    list.addNote("2nd Favourite drink: cola")
    assert.isTrue(list.id === 2);
};

testNoteListsIdAttributeIncrements();

function testNoteListHasFindNoteMethod() {
    var list = new NoteList();
    list.addNote("Favourite drink: seltzer")
    list.addNote("2nd Favourite drink: cola")
    var note = list.findNoteById(1)
    assert.isTrue(note.text === "2nd Favourite drink: cola")
}

testNoteListHasFindNoteMethod()
