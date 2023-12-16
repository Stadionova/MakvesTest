import {data} from "./linesData";
import {DataProp} from "./types";
import {App} from "./App";
import {findZScore} from "./helpers";

export const AppWrapper = () => {
    const pvZScoreMoreThanOneIndex: Array<string> = [];
    findZScore(data.map((value: DataProp) => value.pv), pvZScoreMoreThanOneIndex)

    const uvZScoreMoreThanOneIndex: Array<string> = [];
    findZScore(data.map((value: DataProp) => value.uv), uvZScoreMoreThanOneIndex)

    return <App pv={pvZScoreMoreThanOneIndex} uv={uvZScoreMoreThanOneIndex}/>
}