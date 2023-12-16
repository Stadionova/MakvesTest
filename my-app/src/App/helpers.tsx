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

export const countSquareDispersion = (data: Array<number>) => {
    return data.map((num: number) => Math.pow(num, 2));
};

export const sumSquareDispersion = (data: Array<number>) => {
    let sum = 0;
    data.forEach((num) => sum += num);
    return sum;
};

/**
 * each lineDots param is X to count z-score
 * resultArr is arr with indexes of dots, which z-score more than 1
 * mean: μ param to count z-score
 * standardDeviation: σ is standard deviation to count z-score
 * σ are uvStandardDeviation and pvStandardDeviation
 */
export const findZScore = (lineDots: Array<number>, resultArr: Array<string>) => {
    const mean: number = countMean(lineDots);
    const dispersion: Array<number> = countDispersion(lineDots, mean);
    const squareDispersion: Array<number> = countSquareDispersion(dispersion);
    const squareDispersionSum: number = sumSquareDispersion(squareDispersion);
    const arrDispersion: number = squareDispersionSum / (lineDots.length - 1);
    const standardDeviation = Math.sqrt(arrDispersion);
    const zScore = countZScore(lineDots, mean, standardDeviation);
    zScore.map((zScore: number, index) => zScore > 1 && resultArr.push(String(index)));
}