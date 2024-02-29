import inquirer from "inquirer";
// creating a program for taking input from users
let user_data = await inquirer.prompt([{
        type: 'input',
        name: 'username',
        message: 'Enter your full name :'
    },
    {
        type: 'number',
        name: 'age',
        message: 'enter your age :'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'Select your gender :',
        choices: ['Male', 'Female', 'Others']
    }
]);
// printing data which is take by users
console.log(`
Name: ${user_data.username}.
Age: ${user_data.age}.
Gender: ${user_data.gender}.`);
// program for +,-,*,/
const input1 = await inquirer.prompt({
    name: 'num1',
    type: 'number',
    message: 'kindly enter your first no:'
});
const input2 = await inquirer.prompt({
    name: 'num2',
    type: 'number',
    message: 'kindly enter your second no:'
});
// for +
console.log(input1.num1 + '+' + input2.num2 + '=' + input1.num1 + input2.num2);
// for -
console.log(input1.num1 + '-' + input2.num2 + '=' + (input1.num1 - input2.num2));
//for *
console.log(input1.num1 + '*' + input2.num2 + '=' + (input1.num1 * input2.num2));
//for /
console.log(input1.num1 + '/' + input2.num2 + '=' + (input1.num1 / input2.num2));
