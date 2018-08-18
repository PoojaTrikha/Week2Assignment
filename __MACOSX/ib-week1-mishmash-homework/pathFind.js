function pathFind(path, object){

    if (path.length===1){
        return object[path[0]]; 
    }
    else
    {
       return pathFind(path.slice(1), object[path[0]])  
       
    }
    

}

module.exports = {pathFind};