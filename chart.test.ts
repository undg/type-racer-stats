import { round, slice } from './chart.ts'
import { mock } from './mock/jsonResponse.ts'
import { asserts as t } from './dev_deps.ts'

Deno.test({
    name: 'Slice the wpm, transform it into 2d array',
    ignore: false,
    fn() {
        t.assertExists(slice(mock, 1), 'should exist')
        t.assertEquals(slice(mock, 1).length, 1, 'when resolution is 1 all stuff should be in inside array')
        t.assertEquals(slice(mock, 1)[0].length, mock.length, `should have same length as origin, when divider is 1`)
        t.assertEquals(slice(mock, 1)[0], [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])

        t.assertEquals(slice(mock, 2).length, 2, 'resolution is wrong')
        t.assertEquals(slice(mock, 2)[0], [0, 2, 4, 6, 8])
        t.assertEquals(slice(mock, 2)[1], [10, 12, 14, 16, 18])

        t.assertEquals(slice(mock, 3).length, 3, 'resolution is wrong')
        t.assertEquals(slice(mock, 3)[0], [0, 2, 4, 6])
        t.assertEquals(slice(mock, 3)[1], [8, 10, 12, 14])
        t.assertEquals(slice(mock, 3)[2], [16, 18])

        t.assertEquals(slice(mock, 4).length, 4, 'resolution is wrong')
        t.assertEquals(slice(mock, 4)[0], [0, 2, 4])
        t.assertEquals(slice(mock, 4)[1], [6, 8, 10])
        t.assertEquals(slice(mock, 4)[2], [12, 14, 16])
        t.assertEquals(slice(mock, 4)[3], [18])

        t.assertEquals(slice(mock, 5).length, 5, 'resolution is wrong')
        t.assertEquals(slice(mock, 5)[0], [0, 2])
        t.assertEquals(slice(mock, 5)[1], [4, 6])
        t.assertEquals(slice(mock, 5)[2], [8, 10])
        t.assertEquals(slice(mock, 5)[3], [12, 14])
        t.assertEquals(slice(mock, 5)[4], [16, 18])

        t.assertEquals(
            slice(mock, 6)?.length,
            5,
            `resolution is wrong, not enough elements in data mock
            for full resolution, and that's why it should be shorter.`
        )
        t.assertEquals(slice(mock, 6)[0], [0, 2])
        t.assertEquals(slice(mock, 6)[1], [4, 6])
        t.assertEquals(slice(mock, 6)[2], [8, 10])
        t.assertEquals(slice(mock, 6)[3], [12, 14])
        t.assertEquals(slice(mock, 6)[4], [16, 18])
        t.assertEquals(slice(mock, 6)[5], undefined, `Last element should not be generated.`)

        t.assertEquals(slice(mock, 7).length, 5, 'resolution is wrong, max 5 with that mock')
        t.assertEquals(slice(mock, 7)[0], [0, 2])
        t.assertEquals(slice(mock, 7)[1], [4, 6])
        t.assertEquals(slice(mock, 7)[2], [8, 10])
        t.assertEquals(slice(mock, 7)[3], [12, 14])
        t.assertEquals(slice(mock, 7)[4], [16, 18])
        t.assertEquals(slice(mock, 7)[5], undefined)
        t.assertEquals(slice(mock, 7)[6], undefined)

        t.assertEquals(slice(mock, 9).length, 5, 'resolution is wrong, max 5')
        t.assertEquals(slice(mock, 9)[0], [0, 2])
        t.assertEquals(slice(mock, 9)[1], [4, 6])
        t.assertEquals(slice(mock, 9)[2], [8, 10])
        t.assertEquals(slice(mock, 9)[3], [12, 14])
        t.assertEquals(slice(mock, 9)[4], [16, 18])
        t.assertEquals(slice(mock, 9)[5], undefined)
        t.assertEquals(slice(mock, 9)[6], undefined)
        t.assertEquals(slice(mock, 9)[7], undefined)
        t.assertEquals(slice(mock, 9)[8], undefined)
        t.assertEquals(slice(mock, 9)[9], undefined)
        t.assertEquals(slice(mock, 9)[10], undefined)

        t.assertEquals(slice(mock, 10).length, 10, 'resolution is wrong')
        t.assertEquals(slice(mock, 10)[0], [0])
        t.assertEquals(slice(mock, 10)[1], [2])
        t.assertEquals(slice(mock, 10)[2], [4])
        t.assertEquals(slice(mock, 10)[3], [6])
        t.assertEquals(slice(mock, 10)[4], [8])
        t.assertEquals(slice(mock, 10)[5], [10])
        t.assertEquals(slice(mock, 10)[6], [12])
        t.assertEquals(slice(mock, 10)[7], [14])
        t.assertEquals(slice(mock, 10)[8], [16])
        t.assertEquals(slice(mock, 10)[9], [18])
        t.assertEquals(slice(mock, 10)[10], undefined)
        t.assertEquals(slice(mock, 10)[11], undefined)
    },
})

Deno.test({
    name: `Average 2d array's and flat it out.`,
    ignore: false,
    fn() {
        t.assertEquals(round(mock, 1), [9], `should have only 1 averaged numbers`)
        t.assertEquals(round(mock, 2), [4, 14], `should have only 2 averaged numbers`)
        t.assertEquals(round(mock, 3), [3, 11, 17], `should have only 3 averaged numbers`)
        t.assertEquals(round(mock, 4), [2, 8, 14, 18], `should have only 4 averaged numbers`)
        // ...
        t.assertEquals(round(mock, 5), [1, 5, 9, 13, 17], `should have only 5 averaged numbers`)
        t.assertEquals(round(mock, 6), [1, 5, 9, 13, 17], `should have only 5 averaged numbers`)
        t.assertEquals(round(mock, 9), [1, 5, 9, 13, 17], `should have only 5 averaged numbers`)
        // ...
        t.assertEquals(round(mock, 10), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], `should have 10 averaged numbers`)
        t.assertEquals(round(mock, 20), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], `should have 10 averaged numbers`)
        t.assertEquals(round(mock, 99), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], `should have 10 averaged numbers`)
    },
})
