import mongoose, { ObjectId, Schema, Types } from "mongoose";

const EstadoSchema = new Schema({
    est_sigla: {
        type: String,
        trim: true,
        unique: false,
        required: true,
        maxlength: [2, "O nome pode ter apenas até 2 caracteres"],
        set: (value: String) => value.toUpperCase()
    },
    est_nome:{
        type: String,
        trim: true,
        unique: false,
        required: true,
        maxlength: [45, "O nome pode ter apenas até 50 caracteres"]
    },
    est_ibge:{
        type: Number,
        trim:true,
        required:true
    },
    est_created_at: {
        type: Date,
        default: Date.now
    },
    est_updated_at: {
        type: Date,
        default: Date.now
    }
})

EstadoSchema.pre('save', function(next) {
    this.est_updated_at = new Date();
    next();
});

const Estado = mongoose.model('Estado', EstadoSchema);

 export default Estado