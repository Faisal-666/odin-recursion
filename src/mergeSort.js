const sort = (left, right) => {
    const result = [];

    while(left.length || right.length) {
        if (left[0] < right[0]) {
            result.push(...left.splice(0, 1));
        } else if (left[0] > right[0]) {
            result.push(...right.splice(0, 1));
        } else if (left[0] === right[0]) {
            result.push(...left.splice(0, 1));
        } else if (!left.length || !right.length) {
            result.push(...left.splice(0, left.length));
            result.push(...right.splice(0, right.length));
        }
    }

    return result;
}

const mergeSort = (arr) => {
    if (!arr.length || arr.length === 1) return arr;

    const midIndex = Math.ceil(arr.length / 2);
    const left = arr.slice(0, midIndex);
    const right = arr.slice(midIndex, arr.length);
    
    return sort(mergeSort(left), mergeSort(right));
};

export default mergeSort;