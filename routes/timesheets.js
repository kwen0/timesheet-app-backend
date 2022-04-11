const express = require('express')
const router = express.Router()
const Timesheet = require('../models/timesheet')

// get all timesheet entries
router.get('/', async (req, res) => {
    try {
        const timesheets = await Timesheet.find()
        res.json(timesheets)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get all entries for a client
router.get('/:client', async (req, res) => {
    const timesheets = await Timesheet.find()
    const found = timesheets.some(entry => entry.Client == req.params.client)
    if (found) {
        res.json(timesheets.filter(entry => entry.Client == req.params.client))
    } else {
        res.status(400).json({ message: `No timesheet entries for client ${req.params.client}` })
    }
})

// create an entry
router.post('/', async (req, res) => {
    const timesheet = new Timesheet({
        Date: req.body.Date,
        Client: req.body.Client,
        Project: req.body.Project,
        ProjectCode: req.body.ProjectCode,
        Hours: req.body.Hours,
        Billable: req.body.Billable,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        BillableRate: req.body.BillableRate
    })
    try {
        const newTimesheet = await timesheet.save()
        res.status(201).json(newTimesheet)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router