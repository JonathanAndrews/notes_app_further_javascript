(function(exports) {
    var describe = function(message, callback) {
        console.log(message);
        callback();
    }

    exports.describe = describe;
})(this);