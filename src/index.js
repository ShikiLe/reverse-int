module.exports = function reverse (n) {
    
        let array = n.toString().split('');
        let reverseArr =  []; 
        for (let i = array.length - 1; i >= 0; i--) {
            reverseArr.push(array[i]);
        }
        let stringInt = reverseArr.join('');
        return Number.parseInt(stringInt);
    
}
