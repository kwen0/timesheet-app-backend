const mongoose = require('mongoose')

const timesheetSchema = new mongoose.Schema({
    Date: {
        type: String
    },
    Client: {
        type: String
    },
    Project: {
        type: String
    },
    ProjectCode: {
        type: String
    },
    Hours: {
        type: Number
    },
    Billable: {
        type: String
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    BillableRate: {
        type: Number
    }
})

module.exports = mongoose.model('Timesheet', timesheetSchema)