import { TrieNode } from "../trie"
import { DHTNode } from "./node"

const k = 20
export class KBucket {
    readonly nodes: Array<TrieNode> = []
    readonly maxSize: number
    constructor(maxSize: number = k) {
        this.maxSize = maxSize
    }
    push(node:DHTNode){
        
    }
}