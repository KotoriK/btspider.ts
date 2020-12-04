import { DHTNode } from "./dht/node"
/**
 * 表示一个Trie树的节点
 *
 * @author KotoriK
 * @export
 * @interface TrieNode
 */
export interface TrieNode{
    root?:TrieNode
    "0"?:TrieNode
    "1"?:TrieNode
    content?:DHTNode
}
export class TrieTree{
    root:TrieNode

    insert(content:DHTNode){
        const {id}=content
        
    }
}