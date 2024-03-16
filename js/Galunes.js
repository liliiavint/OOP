class Galunes{
    constructor(word){
        this.word = word;
    }
    
    pirma() {
        if (this.word.endsWith('as')) {
            return this.word.slice(0, -2) + 'e';
        }
        if (this.word.endsWith('lis')) {
            return this.word.slice(0, -2) + 'i';
        }
        if (this.word.endsWith('ys')) {
            return this.word.slice(0, -2) + 'y';
        }
           
        if (this.word.endsWith('ė')) {
            return this.word.slice(0, -1) + 'e';
        }
   
        if (this.word.endsWith('is')) {
            return this.word.slice(0, -2) + 'ie';
        }
    
        if (this.word.endsWith('us')) {
            return this.word.slice(0, -2) + 'au';
        }
    
        if (this.word.endsWith('uo')) {
            return this.word.slice(0, -2) + 'enie';
        }
        return this.word;
    }

}
// export { Galunes}

// antra() {
//     if (this.word.endsWith('ė')) {
//         return this.word.slice(0, -1) + 'e';
//     }
// }

// trecia() {
//     if (this.word.endsWith('is')) {
//         return this.word.slice(0, -2) + 'ie';
//     }
// }

// ketvirta() {
//     if (this.word.endsWith('us')) {
//         return this.word.slice(0, -2) + 'au';
//     }
// }

// penkta() {
//     if (this.word.endsWith('uo')) {
//         return this.word.slice(0, -2) + 'ienie';
//     }
// 
