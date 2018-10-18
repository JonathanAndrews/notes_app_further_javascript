function testNoteInstantiatesWithText() {
    var note = noteFactory("My favourite language is JavaScript");
    assert.isTrue(note.text === "My favourite language is JavaScript");
};

testNoteInstantiatesWithText();

function testNoteHasTextReaderMethod() {
    var note = noteFactory("My favourite language is JavaScript");
    assert.isTrue(note.textReader() === "My favourite language is JavaScript");
};

testNoteHasTextReaderMethod();

function testNoteInstantiatesWithId() {
    var note = noteFactory("My favourite language is JavaScript", 44);
    assert.isTrue(note.id === 44);
};

testNoteInstantiatesWithId();