export const depositMoney = (money)=>{
    return (dispatch)=>{
        dispatch({
            type:"deposit",
            payload:money

        })
    }
}
export const withdrawMoney = (money)=>{
    return (dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:money
        })
    }
}