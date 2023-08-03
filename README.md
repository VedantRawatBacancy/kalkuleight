# About The Package
Kalkuleight Helps You Calculate and Return the Compound Interest
You can get the total amount along with the interest, or the interest exclusively

# Installation

To install Kalkuleight, you can run the following command in the npm command line

```sh
npm install kalkuleight
```
or

```sh
npm i kalkuleight
```

# Syntax

To return the total amount that will be accumulated

```sh
kalkuleight(principal, rate, time, frequency).amount
```

To return the interest specifically,

```sh
kalkuleight(principal, rate, time, frequency).interest
```

# Syntax Explaination

The function returns rounded off values, which can be assigned to a variable, or be returned in JSX or JS directly.

# Use Case

The Code can be used in the following way

```

const p = 1000; //Constant with the principal value
const r = 10; //Constant with the rate of interest
const t = 10; //Constant with the tenure of compounding
const f = 2; //Constant with the frequency of compounding

const amount = kalkuleight(p,r,t,f).amount;
const interest = kalkuleight(p,r,t,f).interest;

console.log(amount);
console.log(interest);

```