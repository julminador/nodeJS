const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//A travez de un objeto definimos propiedates y tipos
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: { //En un objeto para definir el mensaje
        type: String,
        require: true, //Siempre debe venir el mensaje
    },
    date: Date,
    file: String,
});

/*Todo lo que se crea se guarda con este nombre
y modelo de Schema*/
const model = mongoose.model('Message', mySchema);
module.exports = model;