interface Btree{
    value: any,
    left: Btree | null,
    right: Btree | null
}

export interface BtreePayload<Types>{
    arr: Types[]
}