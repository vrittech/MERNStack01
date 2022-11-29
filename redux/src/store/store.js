import todoReducer from '../todo/todoSlice'

const { configureStore } = require("@reduxjs/toolkit");
export default configureStore({
    reducer: {
        todos : todoReducer,
        
    }
})
