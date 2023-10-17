export interface FilterSort {
    categories?:string[],
    sort?:{
        key:string;
        type:'ASC'|'DESC';
    }
}
