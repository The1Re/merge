/**
 * Merges three sorted arrays into one ascending array.
 * @param collection_1 - Sorted in ascending order.
 * @param collection_2 - Sorted in ascending order.
 * @param collection_3 - Sorted in descending order.
 * @returns A single sorted array in ascending order.
 */
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const collection_3_asc: number[] = [];

    // Sort collection 3 to asc
    for (let i=collection_3.length - 1; i>=0; i--)
        collection_3_asc.push(collection_3[i]);

    // Function to merge two array
    function mergeTwoArray(arr1: number[], arr2: number[]): number[] {
        const result: number[] = [];
        let i = 0, j = 0;
    
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result.push(arr1[i++]);
            } else {
                result.push(arr2[j++]);
            }
        }
    
        while (i < arr1.length) 
            result.push(arr1[i++]);

        while (j < arr2.length)
            result.push(arr2[j++]);
    
        return result;
    }

    return mergeTwoArray(mergeTwoArray(collection_1, collection_2), collection_3_asc);
}