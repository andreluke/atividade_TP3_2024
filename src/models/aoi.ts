import mongoose, { ObjectId, Schema, Types } from "mongoose";
import Cidade from "./cidade";
import User from "./user"

const AoiSchema = new Schema({
    aoi_cid_id: {
        type: Schema.Types.ObjectId,
        ref: 'Cidade',
        required: true,
        valitdate: {
            validator: async function (id: string) {
                const cid = await Cidade.findById(id);
                return !!cid;
            },
            message: 'A cidade fornecida não existe',
        },
    },
    aoi_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        valitdate: {
            validator: async function (id: string) {
                const user = await User.findById(id);
                return !!user;
            },
            message: 'A cidade fornecida não existe',
    }
},
    aoi_area_km2: {
        type: Number,
        trim: true,
        required: true
    },
    aoi_geom: {
        type: Number,
        trim: true,
        required: true,
    },
    aoi_created_at: {
        type: Date,
        default: Date.now
    },
    aoi_updated_at: {
        type: Date,
        default: Date.now
    }
})

AoiSchema.pre('save', function (next) {
    this.aoi_updated_at = new Date();
    next();
});

const Aoi = mongoose.model("Aoi", AoiSchema)
export default Aoi