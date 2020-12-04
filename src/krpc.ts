import bencode from 'bencode'
function makekRPC(msg) {
    try {
        var buf = bencode.encode(msg)
    } catch (err) {
        return//TODO:?
    }
    return buf
}