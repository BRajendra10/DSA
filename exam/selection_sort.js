function selectionSort(arr) {

    for(let i = 0; i < arr.length; i++) {

        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++) {

            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

const nums = [5, 3, 8, 1, 2];

console.log(selectionSort(nums));