function stackCalc(string) {
    let instructions = string.split(" ");
    let temp = [];
    for (let i of instructions) {
        if (!["DUP", "POP", "+", "-", "/", "*"].includes(i) && isNaN(i)) {
            return "invalid instruction: " + i
        }
    }

    let numbers = [];
    let num1; let num2;
    for(let i of instructions) {
        switch (i) {
            case "DUP":
                numbers.push(numbers[numbers.length-1]);
                break;
            case "POP":
                numbers.pop();
                break;
            case "/":
                num1 = numbers.pop();
                num2 = numbers.pop();
                numbers.push(Math.max(num1, num2)/Math.min(num1, num2));
                break;
            case "*":
                num1 = numbers.pop();
                num2 = numbers.pop();
                numbers.push(num1*num2);
                break;
            case "-":
                num1 = numbers.pop();
                num2 = numbers.pop();
                numbers.push(Math.max(num1, num2) - Math.min(num1, num2));
                break;
            case "+":
                num1 = numbers.pop();
                num2 = numbers.pop();
                numbers.push(num1 + num2);
                break;
            default:
                numbers.push(Number(i));
                break;
        }
    }
    return numbers.join(" ");
}

console.log(stackCalc(""));
console.log(stackCalc("5 6 +"));
console.log(stackCalc("3 DUP +"));
console.log(stackCalc("6 5 5 7 * - /"));
console.log(stackCalc("x y +"));
