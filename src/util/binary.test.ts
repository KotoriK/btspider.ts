import {binaryStringArray2Number} from './binary'
test("str2binary",()=>{
    expect(binaryStringArray2Number([..."110"])).toBe(6)
    expect(binaryStringArray2Number(["0"])).toBe(0)
    expect(binaryStringArray2Number(["1"])).toBe(1)


})