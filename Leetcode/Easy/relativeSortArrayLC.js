/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr1Map = createFrequencyMap(arr1.sort((currentNumber, nextNumber) => currentNumber - nextNumber));

    arr1Map = relativeSort(arr1Map, arr2);
    return convertToArray(arr1Map);
};

const createFrequencyMap = function(array){
    let map = new Map();

    for(const value of array){
        map.set(value, (map.get(value) || 0) + 1);
    }

    return map;
}

const relativeSort = function(map, relativeArray) {
    const relativelySortedMap = new Map();
    
    for(const number of relativeArray){
        if(map.has(number)){
            relativelySortedMap.set(number, map.get(number));
        }
    }

    for(const [key, value] of map){
        if(!relativelySortedMap.has(key)){
            relativelySortedMap.set(key, value);
        }
    }

    return relativelySortedMap;
}

const convertToArray = function(map) {
    let array = [];

    for(const [key, value] of map){
        for(let i = 0; i < value; i++){
            array.push(key);
        }
    }

    return array;
}