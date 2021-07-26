import { Stats } from './types.ts'
import { plot, IPlotConfig } from './deps.ts'

export function drawChart(data: Stats[]) {
    const config: IPlotConfig = { colors: ['yellow'] }

    // calculate terminal width, give 14 cols extra padding for Y axis
    const { columns } = Deno.consoleSize(Deno.stdin.rid)
    const terminalCols = columns - 14

    const draw = plot(round(data, terminalCols), config)
    console.log(draw)
    // THE-END
}

/**
 * @params {Stats[]} data array of objects with `wpm: number` key.
 * @params {number} resolution of terminal width, this is max number of inner arrays.
 * @returns array of averanged numbers
 */
export function round(data: Stats[], resolution: number): number[] {
    return slice(data, resolution).map(
        (toBeRounded: number[]) => toBeRounded.reduce((prev, curr) => prev + curr) / toBeRounded.length
    )
}

/**
 * @params {Stats[]} data array of objects with `wpm: number` key.
 * @params {number} resolution of terminal width, this is max number of inner arrays.
 * @returns two dimension array
 */
export function slice(data: Stats[], resolution: number): number[][] {
    const wpm = data.map((el) => el.wpm)
    let sliced = [...new Array(resolution)] // make sure it is not undefined
    const innerLength = Math.ceil(wpm.length / resolution) // innerArrays

    for (let i = 0; i < resolution; i++) {
        sliced[i] = wpm.slice(0 + i * innerLength, (i + 1) * innerLength)
    }

    sliced = sliced.filter((el) => el?.length)

    return sliced
}
