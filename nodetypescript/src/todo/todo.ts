import mongoose, {Schema} from 'mongoose'
export interface ITodo{
    title : string,
    completed: boolean
}

const TodoSchema = new Schema<ITodo>({
    title : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        required: true,
        default : false
    }

},
{
    timestamps: true
})

const TodoModel = mongoose.model<ITodo>("todo", TodoSchema);

export default TodoModel;

