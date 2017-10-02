'use strict';

module.exports = function () {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) {
            return arguments[i];
        }
    }
};