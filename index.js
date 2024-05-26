let type = 'odd';
function getSumOfNumbers (number,type){
    if (isNaN(number)) {return NaN}
    let summ = 0;
    for ( let i = 0 ; i <= number; i++){
        if (type === 'odd') {
            if( i % 2 === 1){
                summ+=i;
            }
        }
        else if (type === 'even') {
            if( i % 2 === 0){
                summ+=i;
            }
        }
        else if (type === ''){
            summ+=i;
        }
    }
    return summ;
}
console.log(getSumOfNumbers (10,"odd"));
console.log(getSumOfNumbers (10,"even"));
console.log(getSumOfNumbers (10,""));
console.log(getSumOfNumbers ('rrty'));
