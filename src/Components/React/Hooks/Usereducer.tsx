import {useReducer} from 'react'
const initialState=0;
const reducer=(state:number,action:{type:string})=>{
    switch(action.type){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state;
}}
const Usereducer = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div className='bg-teal-400 p-10 rounded-lg shadow-lg flex flex-row items-center justify-center'>
        <button className='bg-pink-700 text-white rounded text-2xl px-4 py-2 m-2' onClick={() => dispatch({type:'increment'})}>Increment</button>
        <h1 className="text-6xl ">{state}</h1>
        <button className='bg-pink-700 text-white rounded text-2xl px-4 py-2 m-2' onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button className='bg-pink-700 text-white rounded text-2xl px-4 py-2 m-2' onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Usereducer
