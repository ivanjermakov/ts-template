import {Telegraf} from 'telegraf'
import {config} from './config'

const bot = new Telegraf(config.botToken!)
bot.command('start', (ctx) => ctx.reply('Hello, World!'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
