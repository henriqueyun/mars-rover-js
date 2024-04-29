import { prepareElasticsearch, indexLog } from "./es/client";
import Rover from "./types/Rover";
import getDataFromCommandLine from "./util/getDataFromCommandLine";

const input = getDataFromCommandLine()
const { rovers } = input

export const main = async (rovers: Rover[]) => {
    await indexLog(input, 'input-logs')

    const promises = rovers.map(async (r, index) => {
        const number = index + 1
        r.activate(number)
        const output = r.printFinalPosition(number)
    
        await indexLog(output, 'output-logs')
    })

    await Promise.all(promises)
}

(async () => {
    await prepareElasticsearch()
    await main(rovers)
})()