declare global {
    interface Window {
        [prop: string]: Array<any>;
    }
}

export const shift = <T>(list: Array<T>): T  => { 
    for (var prop in window) {
        if (window[prop] === list) {
            window[prop] = list.filter((element: T, index: number) => index !== 0 )
        }
    }
    return list[0];
}