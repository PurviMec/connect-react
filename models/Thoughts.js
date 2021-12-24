const { Schema, model } = require('mongoose');
const moment = require('moment');

const ThoughtsSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtval) => moment(createdAtval).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true
        },
    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;