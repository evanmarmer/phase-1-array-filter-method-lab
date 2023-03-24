// function findMatching(source, sought) {
//     return source.filter(
//       (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
//     );
//   }


function findMatching(names,string){
    return names.filter(
        (name) => {
            if (name.toLowerCase() === string.toLowerCase()){
                return true
            }else {return false}}
    )
} 

function fuzzyMatch(names, string){
    console.log(names,string)
    return names.filter(
        (name) => {
            console.log(name)
            console.log(string)
            if (name.substring(0,2) === string.substring(0,2)){
                return true
            }
            else {return false}
        }
    )
}

function matchName(drivers,string){
    console.log(drivers,string)
    return drivers.filter(
        (driver) => {
            console.log(driver)
            console.log(string)
            if (driver.name === string){
                return true
            }
            else {return false}
        }
    )
}