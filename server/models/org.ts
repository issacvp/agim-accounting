import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const orgSchema = new mongoose.Schema({
    name: String,
    licence: String,
    address: {
        country: String,
        state: String,
        city: String,
        street: String,
    },
});

const Org = mongoose.model('Org', orgSchema);
export default Org;
