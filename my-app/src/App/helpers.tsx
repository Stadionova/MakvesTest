/**
 * z-score formula: z = X - μ / σ
 * X are uvValuesArr and pvValuesArr
 * μ are uvMean and pvMean
 * σ are uvStandardDeviation and pvStandardDeviation
 */

export const countZScore = (data: Array<number>, mean: number, standardDeviation: number) => {
    return data.map((num: number) => (num - mean) / standardDeviation);
};

export const countMean = (data: Array<number>) => {
    let sum = 0;
    data.forEach((num) => sum += num);
    return sum / data.length;
};

export const countDispersion = (data: Array<number>, mean: number) => {
    return data.map((num: number) => num - mean);
};

export const squareDispersion = (data: Array<number>) => {
    return data.map((num: number) => Math.pow(num, 2));
};

export const sumSquareDispersion = (data: Array<number>) => {
    let sum = 0;
    data.forEach((num) => sum += num);
    return sum;
};