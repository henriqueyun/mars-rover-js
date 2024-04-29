import { Client } from '@elastic/elasticsearch'

const client = new Client({
    node: 'http://localhost:9200'
})

const createIndexIfItDoesntExist = async (indexName: string) => {
    const indexExists = await client.indices.exists({ index: indexName })
    if (!indexExists) {
        return null
    }

    return await client.indices.create({
        index: indexName
    })
}

export const indexLog = async (log: object | string, indexName: string) => {
    await client.index({ index: indexName, document: { log } })
}

export const storeLogs = async (input: object, output: object) => {
    await indexLog(input, 'input-logs')
    await indexLog(output, 'output-logs')
}

export const prepareElasticsearch = async () => {
    await createIndexIfItDoesntExist('rover-inputs')
    await createIndexIfItDoesntExist('rover-outputs')
}

export const searchByIndexName = async (indexName: string) => {
    return await client.search({ index: indexName })
}