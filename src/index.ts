import { prepareElasticsearch, storeLogs } from "./es/client";
import startRovers from "./startRovers";
import CommandLineData from "./types/CommandLineData";
import CLIData from "./util/getDataFromCommandLine";

export const main = async (input: CommandLineData) => {
    const { rovers } = input
    const output = startRovers(rovers)
    await storeLogs(input, output)
    console.log('The logs we\'re stored')
}

if (process.env.NODE_ENV?.toLowerCase() !== 'test') {
    (async () => {
        await prepareElasticsearch()
        const input = CLIData
        await main(input)
    })()
}