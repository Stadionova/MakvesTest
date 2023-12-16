import {countDispersion, countMean, countZScore, squareDispersion, sumSquareDispersion} from "./helpers";
import {DataProp} from "./types";

export const findPvZScoreMoreThanOne = (data: Array<DataProp>) => {
    const pvValuesArr: Array<number> = data.map((value: DataProp) => value.pv); // each param is X to count z-score
    const pvMean: number = countMean(pvValuesArr); // μ param to count z-score
    const pvDispersion: Array<number> = countDispersion(pvValuesArr, pvMean);
    const pvSquareDispersion: Array<number> = squareDispersion(pvDispersion);
    const pvSquareDispersionSum: number = sumSquareDispersion(pvSquareDispersion);
    const pvArrDispersion: number = pvSquareDispersionSum / (pvValuesArr.length - 1);
    const pvStandardDeviation = Math.sqrt(pvArrDispersion); // σ is standard deviation to count z-score
    const pvZScore = countZScore(pvValuesArr, pvMean, pvStandardDeviation);
    const pvZScoreMoreThanOneIndex: Array<string> = [];
    pvZScore.map((zScore: number, index) => zScore > 1 && pvZScoreMoreThanOneIndex.push(String(index)));
    return pvZScoreMoreThanOneIndex
}