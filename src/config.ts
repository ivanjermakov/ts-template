import * as dotenv from 'dotenv'

export interface Config {
    botToken?: string
}

dotenv.config()

export const config: Config = {
    botToken: process.env.BOT_TOKEN
}