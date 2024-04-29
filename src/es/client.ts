import { Client } from '@elastic/elasticsearch'

const client = new Client({
    node: 'http://localhost:9200'
})

const indexExists = async (indexName: string) => await client.indices.exists({ index: indexName })

const createIndexIfItDoesntExist = async (indexName: string) => {
    if (await indexExists(indexName)) {
        return null
    }

    return await client.indices.create({
        index: indexName
    })
}

const indexLog = async (log: object | string, indexName: string) => {
    await client.index({ index: indexName, document: { log } })
}

export const storeLogs = async (input: object, output: object) => {
    await indexLog(input, 'input-logs')
    await indexLog(output, 'output-logs')
}

export const prepareElasticsearch = async () => {
    await createIndexIfItDoesntExist('input-logs')
    await createIndexIfItDoesntExist('output-logs')
}

export const searchByIndexName = async (indexName: string) => {
    return await client.search()
}

const deleteIndex = async (indexName: string) => {
    if (await indexExists(indexName)) {
        return await client.indices.delete({ index: indexName })
    }
}

export const eraseIndexes = async () => {
    await deleteIndex('input-logs')
    await deleteIndex('output-logs')
}