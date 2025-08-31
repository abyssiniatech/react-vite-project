const Errors=(prop:{errMsg:string})=>{
    
    try{
        throw Error(prop.errMsg)
        if(prop.errMsg){
            console.log("there is no error here")
        }
    }
    catch(e){
        console.log(`the error happen ${e}`)
    }
}
export default  Errors