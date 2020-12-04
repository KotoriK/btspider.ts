export function binaryStringArray2Number(strArray: string[]) {
    const length = strArray.length - 1
    const arr = strArray.map((v, i) => parseInt(v) * Math.pow(2, (length - i)))
    let result = 0
    for (let i = 0; i <= length; i++) {
        result += arr[i]
    }
    return result
}
/**
 * 在二进制字符串的前头补0
 * @param binaryString 
 * @param fillTo 
 */
export const fillZero = (binaryString: string, fillTo: number) =>    new Array(fillTo - binaryString.length).fill('0').join('').concat(binaryString)

