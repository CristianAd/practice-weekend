

 

const transaction = (fee, balance, amount) =>{
    return balance + amount - fee
}


 


const curry = (fn, ...args) =>{
    return (..._arg)=>{
        return fn (...args, ..._arg)
    }
}


const freeTransacction = curry(transaction, 0)

console.log(freeTransacction(10, 90))

// COMPOSE

const compose = (...fns) => x => fns.reduce((y, f)=>f(y), x)

const addFee = (amount) => amount + 2
const addDiscount = (amount) => amount -5

const composition  = compose (addFee, addDiscount)(100)

console.log(composition)