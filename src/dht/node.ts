import { UDPAddress } from "../udpaddr";
import { DHTKey } from "./key";

export class DHTNode{
    id:DHTKey
    addr:UDPAddress
    lastActive:Date
}
