var _ = require('lodash');
var usersList = [
    {
        name: 'John Doe'
    },
    {
        name: 'Jane Doe'
    }
];

function userStore() {

    return {
        getUsers: function() {
            return _.cloneDeep(usersList);
        }
    };
}

module.exports = userStore;
