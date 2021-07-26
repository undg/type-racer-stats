import { Stats } from './types.ts'
import { plot, IPlotConfig } from './deps.ts'

export function drawChart(data: Stats[]) {
    const config: IPlotConfig = { colors: ['yellow', 'magenta', 'red'].reverse() }

    // calculate terminal width, give 14 cols breathing space for Y axis
    const { columns } = Deno.consoleSize(Deno.stdin.rid)
    const terminalCols = columns - 14

    const roundedSlicedWpm = round(
        slice(
            data.map((el) => el.wpm),
            terminalCols
        )
    )

    const averangeWpm = roundedSlicedWpm.reduce(sum) / roundedSlicedWpm.length
    const averangeWpmLine = new Array(roundedSlicedWpm.length).fill(averangeWpm)

    const roundedSlicedAccuracy = round(
        slice(
            data.map((el) => (el.accuracy * averangeWpm) / 1000),
            terminalCols
        )
    )

    const series = [roundedSlicedWpm, roundedSlicedAccuracy, averangeWpmLine].reverse()

    const draw = plot(series, config)
    console.log(draw)
    // THE-END
}

/**
 * Round spikes on graph.
 * Merge slices into one array of averages of each slice.
 * @params slices - 2d array of slices that will be flattened
 * @returns array of averaged numbers
 */
export function round(slices: number[][]): number[] {
    return slices.map((slice: number[]) => slice.reduce(sum) / slice.length)
}

/**
 * Slice single larger array into smaller groups.
 * @params data - array of objects with `wpm: number` key.
 * @params resolution - of terminal width, this is max number of inner arrays.
 * @returns two dimension array
 */
export function slice(data: number[], resolution: number): number[][] {
    const innerArrLength = Math.ceil(data.length / resolution)

    const sliced = []
    for (let i = 0; i < resolution; i++) {
        const innerArr = data.slice(0 + i * innerArrLength, (i + 1) * innerArrLength)
        if (innerArr?.length) sliced[i] = innerArr
    }

    return sliced
}

function sum(a: number, b: number) {
    return a + b
}
