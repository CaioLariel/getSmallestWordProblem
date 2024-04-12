const getSmallestWord = (str) =>{

    if( !str || typeof str !== "string") return null
    const strArr = str.trim().split(" ")

    return strArr.reduce((menor, atual) => {
        if(atual.lenght < menor.lenght){
            return atual
        }
        return menor
    })
    
    // let SmallWord = strArr[0]
    // for(i = 0; i < strArr.lenght; i++){
    //     if(strArr[0].lenght < SmallWord.lenght){
    //         SmallWord = strArr[i]
    //     }
    // }
    // return SmallWord
}
console.log(getSmallestWord("2 32 321 1323"))
console.log(getSmallestWord("try words length"))
