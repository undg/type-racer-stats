import { getData } from './getData.ts'
import { drawChart } from './chart.ts'
import { parse } from './deps.ts'

const args = parse(Deno.args, {alias: {h: "help", u: "user", r: "reverse", n: "number"}})

if (args.h) {
    console.log(`
    help:
        -h, --help      this message
        -u, --user      USER, can be replaced with TYPE_RACER_USER env variable
        -n, --number    NUMBER results, if skipped max possible number will be used
        -r, --reverse   reverse order
        `)
} else {
    console.log(`Fetching data. Please wait...`)

    const json = await getData(args)
    console.log(json)
    drawChart(json)
}
