function findNextIndex(array, minIndex){
    for (let index of array){
        if (index>=minIndex){
            return index+1
        }
    }
    return false
}