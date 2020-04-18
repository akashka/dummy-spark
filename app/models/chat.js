var mongoose = require('mongoose');
 
var ChatSchema = new mongoose.Schema({
    group_id: {
        type: String,
        required: true,
        index: { unique: true }
    },
    dp: {
        type: Object,
    },
    name: {
        type: Object,
    },
    members: {
    	type: Array,
    },
    silent_members: {
    	type: Array,
    },
    admin: {
    	type: Array,
    },
    messages: {
    	type: Array
    },
    last_login: {
        type: Object
    },
    active: {
        type: Boolean,
    },
}, {
    timestamps: true
});
 
module.exports = mongoose.model('Chat', ChatSchema);

// messages: {
//     from: String,
//     created: Date,
//     type: String,
//     text: String,
// } 
