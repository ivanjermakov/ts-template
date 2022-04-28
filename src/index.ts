/**
 * Application entry point
 */
import {config} from './config'

console.log('Hello, World!')
if (config.var) {
    console.log(`VAR=${config.var}`)
}