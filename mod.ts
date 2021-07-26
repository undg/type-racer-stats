import { getData } from './getData.ts'
import { drawChart } from './chart.ts'
import { parse } from './deps.ts'

const args = parse(Deno.args)

if (args.h) {
    console.log(`
    help:
        -u USER, can be replaces with TYPE_RACER_USER env variable
        -s SECRET, can be replaces with TYPE_RACER_SECRET env variable
        -n NUMBER results, if skipped max possible number will be used
        `)
} else {
    console.log(`Fetching data. Please wait...`)

    const json = await getData(args)
    drawChart(json)
}
