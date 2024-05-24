import mongoose, { ObjectId, Schema, Types } from "mongoose";
import Estado from "./estado";


const CidadeSchema = new Schema({
    cid_est_id: {
       type: Schema.Types.ObjectId,
       ref: 'Estado', 
       required: true
   },
   cid_ibge:{
       type: Number,
       trim: true,
       required: true
   },
   cid_created_at: {
       type: Date,
       required: true
   },
   cid_updated_at: {
       type: Date,
       required: true
   }
});

const Cidade = mongoose.model('Cidade', CidadeSchema);
export default Cidade