import * as dotenv from 'dotenv'

export interface Config {
    var?: string
}

dotenv.config()

export const config: Config = {
    var: process.env.VAR
}