function avarage (arr) {
  let sum = 0;
  let count =0;
  for (let i = 0; i < array.lenght; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }
  return count > 0 ? sum / count : 0; 
} 



function doMath (x, znak, y) {
  let result;
  switch(znak) {
    case '+': 
      result = x + y; 
      break; 
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow (x, y);
      break;
    default:
      result = 'Неправильний знак операції';  
  }
  return result; 
} 


function fillArray () {
  const mainArrayLength = prompt ('Введіть довжину основного масиву: ');
  const subArrayLength = prompt ('Введіть довжину внутрішніх масивів: ');
  const value = prompt ('Введіть значення для заповнення масиву: ');
  const minArray = new Array (mainArrayLength); 
  for (let i = 0; i < mainArrayLength; i++); {
    const subArray = new Array (subArrayLength);
    for (let n = 0; n < subArrayLength; n++); {
      subArray[n] = value; 
    }
    mainArray[i] = subArray;
  }
    return mainArray;
}

function removeChars() {
  let str = prompt("Введіть рядок: ");
  const charsToRemove = prompt("Введіть символ, який потрібно видалити: ");

  for (let i = 0; i < charsToRemove.length; i++) {
    const regex = new RegExp (charsToRemove[i], "g");
    str = str.replace(regex, "");
  }

  alert(`Результат: ${str}`);
}

removeChars();
