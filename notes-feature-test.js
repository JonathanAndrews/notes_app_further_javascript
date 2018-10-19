function testPageResetFeatureTest() {
    window.location.href = "file:///Users/jonathanandrews/Projects/Pairing_Exercises/week7/day1/further_javascript/index.html"
}
// testPageResetFeatureTest()

function testClickingNoteShowsFullNote() {
    window.onload = function() {
        var anchorElement = document.querySelectorAll(`a[href="#notes/0"]`)
        anchorElement[0].click()
        
        window.onload = function() {
            var wholeNoteElement = document.getElementById('app');
            console.log(wholeNoteElement.innerHTML)
            console.log("Hiya")
        }
        // console.log(anchorElement[0])
    }
}

testClickingNoteShowsFullNote()
