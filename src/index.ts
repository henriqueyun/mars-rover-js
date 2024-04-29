import dotenv from "dotenv"
dotenv.config()
import { prepareElasticsearch } from "./es/client";
import CLIData from "./util/getDataFromCommandLine";
import main from "./main";

if (process.env.NODE_ENV!.toLowerCase() !== 'test') {
    (async () => {
        await prepareElasticsearch()
        const input = CLIData
        await main(input)
    })()
}