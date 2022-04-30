/**
 * Application entry point
 */
import {PrismaClient} from '@prisma/client'
import * as repl from 'repl'

/**
 * Get value from the store by key
 * @param key
 */
function get(key: string): Promise<string> {
    return prisma.store.findUnique({
        where: {key: key},
    }).then(s => s?.value || 'not found')
}

/**
 * Set value to the store by key, update if one exists
 * @param key
 * @param value
 */
function set(key: string, value: string): Promise<any> {
    return prisma.store.upsert({
        where: {key: key},
        update: {value: value},
        create: {key: key, value: value}
    }).then(s => s || 'not set')
}

function del(key: string): Promise<string> {
    return prisma.store.delete({
        where: {key: key},
    })
        .then(s => 'deleted')
        .catch(() => 'not found')
}

// connect to the db
const prisma = new PrismaClient()

// fancy way to continuously read user input and print response
const r = repl.start({
    prompt: '> ',
    eval: (cmd, ctx, filename, cb) => {
        const result = eval(cmd)
        if (result instanceof Promise) {
            return result.then(response => cb(null, response))
        }
        return cb(null, result)
    }
})
r.context.get = get
r.context.set = set
r.context.del = del

process.once('SIGINT', () => prisma.$disconnect())
process.once('SIGTERM', () => prisma.$disconnect())