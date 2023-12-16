import {DataProp} from "./types";
import {countDispersion, countMean, countZScore, squareDispersion, sumSquareDispersion} from "./helpers";

export const findUvZScoreMoreThanOne = (data: Array<DataProp>) => {
    const uvValuesArr: Array<number> = data.map((value: DataProp) => value.uv); // each param is X to count z-score
    const uvMean: number = countMean(uvValuesArr); // μ param to count z-score
    const uvDispersion: Array<number> = countDispersion(uvValuesArr, uvMean);
    const uvSquareDispersion: Array<number> = squareDispersion(uvDispersion);
    const uvSquareDispersionSum: number = sumSquareDispersion(uvSquareDispersion);
    const uvArrDispersion: number = uvSquareDispersionSum / (uvValuesArr.length - 1);
    const uvStandardDeviation = Math.sqrt(uvArrDispersion); // σ is standard deviation to count z-score
    const uvZScore = countZScore(uvValuesArr, uvMean, uvStandardDeviation);
    const uvZScoreMoreThanOneIndex: Array<string> = [];
    uvZScore.map((zScore: number, index) => zScore > 1 && uvZScoreMoreThanOneIndex.push(String(index)));
    return uvZScoreMoreThanOneIndex
}