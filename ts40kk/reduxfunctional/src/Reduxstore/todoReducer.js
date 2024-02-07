const todoReducer = (state=["item1","item2"],action)=>{
    switch(action.type){
        case "ADDTODO":
            return [...state,action.payload]
        case "REMOVETODO":
            return state.filter((todo,index)=>index !== action.payload);
        default:
            return state
    }
}
export default todoReducer;