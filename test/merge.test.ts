import { merge } from "../src/merge";

describe("merge function", () => {
    test("merges three arrays into one sorted array", () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 7, 0]; // Descending

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
    });

    test("handles empty arrays", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [2, 4];
        const collection_3: number[] = [5, 3]; // Descending

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([2, 3, 4, 5]);
    });

    test("handles arrays with duplicates", () => {
        const collection_1 = [1, 3, 3];
        const collection_2 = [2, 2, 4];
        const collection_3 = [5, 3, 1]; // Descending

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 1, 2, 2, 3, 3, 3, 4, 5]);
    });

    test("handles all empty arrays", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([]);
    });
});
