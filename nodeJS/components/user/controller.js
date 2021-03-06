const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('Usuario invalido');
    }

    const user = {
        name,
    };

    return store.add(user);
}

function getUsers(filterName){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterName));
    })
}

module.exports = {
    addUser,
    getUsers,
}