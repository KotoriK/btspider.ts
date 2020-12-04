import { binaryStringArray2Number, fillZero } from "../util/binary"

export type DHTKey = Uint32Array
const DHTKeyArrayItemLength = 32
const DHTKeyArrayLength = 160 / DHTKeyArrayItemLength
export class DHTKeys {
    static xor(a: DHTKey, b: DHTKey) {
        const result = new Uint32Array(DHTKeyArrayLength)
        for (let i = 0; i < DHTKeyArrayLength; i++) {
            result[i] = a[i] ^ b[i]
        }
        return result
    }
    /**
     * 
     * @param num 一个UINT32
     * @param index 以第一位为0，从左向右数的第几位
     */
    static _bitAt = (num: number, index: number) => (num >> (DHTKeyArrayItemLength-1-index)) & 1
    static bitAt(num: DHTKey, index: number) {
        const in_num_index = index % DHTKeyArrayItemLength
        const array_index = (index - in_num_index) / DHTKeyArrayItemLength
        return this._bitAt(num[array_index], in_num_index)
    }
    /**
     * 从160个字符的二进制形式表达的字符串转换到key
     * @param binary 
     */
    static from(binary: string): DHTKey {
        const bit_array = [...binary]
        if (bit_array.length == 160) {
            const result = new Uint32Array(DHTKeyArrayLength)
            let offset = 0
            for (let i = 0; i < DHTKeyArrayLength; i++) {
                const end = offset + 32
                result[i] = binaryStringArray2Number(bit_array.slice(offset, end))
                offset = end
            }
            return result
        } else {
            throw new Error(`Length must be 160bit. Got ${bit_array.length}`)
        }
    }
    /**
     * 转换成二进制的字符串表达
     * @param num 
     * @param sep 每组字符串中是否需要分隔符
     */
    static toString = (num: DHTKey, sep: string = '') => Array.from(num).map(v =>
        fillZero(v.toString(2), DHTKeyArrayItemLength)
    ).join(sep)
}
