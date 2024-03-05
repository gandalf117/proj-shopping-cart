/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const isObjEmpty = (obj: Record<string, any>): boolean => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export function roundUpAndFormat(num: number): string {
    return (Math.ceil(num * 100) / 100).toFixed(2);
}
