const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    assignment_data: {
        class_assigned: Number,
        section: String,
        teacher_assigned_by: String,
        teacher_name: String,
        dueDate: Number,
        assignmentName: String,
        assignmentLink: String,
    }
    open: {type: Boolean, default: true},
    extensionPurchasedBy: {type: Array, default: []},
    newDueDate: {type: Array, default: []},
    submittedStudents: {type: Array, default: []},
    submittedStudentsLink: {type: Array, default: []},
    correctionLink: {type: Array, default: []},
    remarks: {type: Array, default: []},
});

module.exports = mongoose.model("assignment", assignmentSchema);
