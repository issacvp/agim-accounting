import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: String,
    notify: Boolean, //Whether notify members
    church: String,
    event: String, //If related to an event.
    members: [{
        user: String,
        role: String,
    }] // Members can be added by the organizer. Public can send request
});

const Team = mongoose.model('Team', teamSchema);
export default Team;
