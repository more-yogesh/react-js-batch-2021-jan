let cricketers = ['sachin', 'sehwag', 'kohli', 'dhoni'];
// console.log(cricketers[0]);

// console.log(cricketers.join());

// cricketers.push('rayna'); //changes through reference


// cricketers.shift();

// cricketers.unshift('rahul');

// cricketers[1] = 'PANDYA';

// cricketers[cricketers.length] = 'Dilshan';

console.log('orginal', cricketers);

console.log(cricketers.slice(2, 4));// return new array
// console.log(cricketers);



// console.log(cricketers.toString());

transaction = [100, 50, 30, 500, 600, 850, 52, 12, 26];

// console.log(transaction.min());// impossible 

// console.log(cricketers.sort());
console.log(transaction.sort(function (a, b) {
    // console.log('inner log VB',b);
    return b-a;
}));


