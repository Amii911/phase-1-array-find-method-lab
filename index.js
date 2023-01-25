// code your solution here


function superbowlWin(array) {
    const result = array.find(recordObj => recordObj.result === 'W')
   if (result) {
    return result.year
   } 
   return result
}

