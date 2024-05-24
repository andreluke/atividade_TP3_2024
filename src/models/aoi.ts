import mongoose, { ObjectId, Schema, Types } from "mongoose";
import Cidade from "./cidade";

const AoiSchema = new Schema({
    aoi_cid_id: {
        type: Schema.Types.ObjectId,
        ref: 'Cidade', 
        required: true
    },
    aoi_user_id:{
        type: Number,
        required: true
    },
    aoi_area_km2:{
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
        required: true
    },
    aoi_updated_at: {
        type: Date,
        required: true
    }
})

const Aoi = mongoose.model("Aoi", AoiSchema)