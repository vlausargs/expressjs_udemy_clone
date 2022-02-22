const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    }

},{timestamps:true,})

module.exports = mongoose.model('courses',CourseSchema);