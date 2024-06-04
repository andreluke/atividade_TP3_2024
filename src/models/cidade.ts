import mongoose, { ObjectId, Schema, Types } from "mongoose";
import Estado from "./estado";


const CidadeSchema = new Schema({
    cid_est_id: {
        type: Schema.Types.ObjectId,
        ref: 'Estado',
        required: true,
        valitdate: {
            validator: async function (id: string) {
                const est = await Estado.findById(id);
                return !!est;
            },
            message: 'O estado fornecido não existe',
        },
    },
    cid_nome: {
        type: String,
        trim: true,
        unique: false,
        required: true,
        maxlength: [45, "O nome pode ter apenas até 50 caracteres"]
    },
    cid_ibge: {
        type: Number,
        trim: true,
        required: true
    },
    cid_created_at: {
        type: Date,
        default: Date.now
    },
    cid_updated_at: {
        type: Date,
        default: Date.now
    }
})

CidadeSchema.pre('save', function (next) {
    this.cid_updated_at = new Date();
    next();
});


const Cidade = mongoose.model('Cidade', CidadeSchema);
export default Cidade