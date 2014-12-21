var mirrorkey = require('mirrorkey');

function usersConstants() {
    return mirrorkey({
        SHOW_USER: null,
        DELETE_USER: null,
        SAVE_USER: null
    });
}

module.exports = usersConstants;

