import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const churchSchema = new mongoose.Schema({
    name: String,
    org: String,
    address: {
        country: String,
        state: String,
        city: String,
        street: String,
        phone: String,
    },
});

const Chruch = mongoose.model('Church', churchSchema);
export default Chruch;
