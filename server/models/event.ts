import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: String,
    organizer:String,
    active:Boolean,//When organizer creates event, it notifies admin to approve.
    notify:Boolean, //Whether notify members
    public:Boolean, //Available for all people
    start:Date,
    end:Date,
    church:String, //If it is only for church then church_id present, If null notify all
    address: {
        country: String,
        state: String,
        city: String,
        street: String,
    },
    members:[] // Members can be added by the organizer. Public can send request
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
