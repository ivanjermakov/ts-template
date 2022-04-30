import * as dotenv from 'dotenv'

export interface Config {
    dbUri?: string
}

dotenv.config()

export const config: Config = {
    dbUri: process.env.DB_URI
}