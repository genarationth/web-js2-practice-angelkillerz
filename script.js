//Question 1
/*                 number() | String() | Boolean() |
1.false :             0     |  'false' |  false
2.true :              0     |  'true'  |   true
3.0                   0     |  '0'  |   true
4.1                   1     |  '1'  |   true
5.'0'                 0     |  'true'  |   true
6.'000'               0     |  'true'  |   true
7.'1'                 0     |  'true'  |   true 
8.NAN                 NAN     |  'true'  |   true
9.Infinity            0     |  'Infinity'  |   true
10.-Infinity          0     |  '-Infinity'  |   true
11.''                 0     |  'true'  |   true
12.'20'               20     |  'true'  |   true
13.'Twenty'           0     |  'Twenty'  |   true
14.null               0     |  'null'  |   false
15.undefinited        0     |  'undefined'  |   false



*/

//Question 2

function calFutureDate (age,year,future) {
    
    let addAge = future - year;
    return `Future age is ${age + addAge}`;

}

console.log(calFutureDate(20,2023,2054));


//Question 3

const infoCard = (pName,location,hobby) => `Hi, my name is ${pName}. I live in ${location} and I enjoy ${hobby}`;

//Output

console.log(infoCard('Pang','KK','drinking ginger ale'));