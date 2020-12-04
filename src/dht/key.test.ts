import {DHTKeys} from './key'
test("_bitAt",()=>{
    expect(DHTKeys._bitAt(1,31)).toBe(1)
    expect(DHTKeys._bitAt(2,30)).toBe(1)

})
test("toString",()=>{
    expect(DHTKeys.toString(new Uint32Array([5,5,5,5,5]))).toBe(new Array(5).fill('00000000000000000000000000000101').join(''))
    expect(DHTKeys.toString(new Uint32Array([0,0,0,0,0])).length).toBe(160)
})
test("from",()=>{
    expect(()=>DHTKeys.from('1')).toThrow()
    const arr = new Uint32Array([5,5,5,5,5])
    expect(DHTKeys.from(DHTKeys.toString(arr))).toEqual(arr)
})
test("bitAt",()=>{
    expect(DHTKeys.bitAt(new Uint32Array([0,0,0,0,0b11111111111111111111111111111110]),159)).toEqual(0)
    expect(DHTKeys.bitAt(new Uint32Array([0b11111111111111111111111111111110,0,0,0,0]),31)).toEqual(0)
    expect(DHTKeys.bitAt(new Uint32Array([0b11111111111111111111111111111111,0,0,0,0]),0)).toEqual(1)
    expect(DHTKeys.bitAt(new Uint32Array([0b11111111111111111111111111111111,0,0,0,0]),31)).toEqual(1)

})