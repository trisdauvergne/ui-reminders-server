import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    description: {
        type: 'String',
        required: true
    },
    id: {
        type: 'String',
        required: true
    }
});

const List = mongoose.model("list", ListSchema);

module.exports = List;