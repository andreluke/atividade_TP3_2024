import mongoose, { ObjectId, Schema, Types } from "mongoose";

const UserSchema = new Schema({
    user_nome: {
        type: String,
        trim: true,
        unique: false,
        required: true,
        maxlength: [50, "O nome pode ter apenas até 50 caracteres"]
    },
    user_cpf: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        maxlength: [11, "O CPF deve ter 11 caracteres"],
        validate: {
            validator: function isValidCPF(value: string) {
            if (typeof value !== 'string') {
            return false;
          }
           
          value = value.replace(/[^\d]+/g, '');
          
          if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
            return false;
          }
        
          const values = value.split('').map(el => +el);
          const rest = (count:number) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;
        
          return rest(10) === values[9] && rest(11) === values[10];
        }
    }},
    user_mail: {
        type: String,
        maxlength: [50, "O e-mail pode ter no máximo 30 caracteres"],
        unique: true,
        required: [true, "O e-mail é obrigatório"],
        validate: {
            validator: function (value: string) {
                // expressão regular para validar o formato do e-mail
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(value);
            },
            message: (props: any) => `${props.value} não é um formato de e-mail válido`,
        }
    },
    user_fone: {
        type: Number,
        maxlength: [11, "O telefone pode ter no máximo 11 caracteres"],
        trim: true,
        unique: true,
        required: [true, "O telefone é obrigatório"],
        validate: {
            validator: function (value: string) {

                const regex = /^[0-9]{11}$/;
                return regex.test(value);
            },
            message: (props: any) => `${props.value} não é telefone válido`,
        }
    },
    user_created_at: {
        type: Date,
        required: true
    },
    user_updated_at: {
        type: Date,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);

export default User
