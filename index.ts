////////////////////////////////////////////// converting bytes to ascii
// function bytesToAscii(byteArray) {
//     return byteArray.map(byte => String.fromCharCode(byte)).join('');
//   }
  
//   const bytes = [73, 11, 103, 68, 11];  
//   const asciiString = bytesToAscii(bytes);
//   console.log(asciiString);  


////////////////////////////////////////////// converting ascii to bytes
// function asciiToBytes(asciiString) {
//     return Array.from(asciiString).map(char => char.charCodeAt(0));
//   }
  
//   const asciiString = 'Hello';
//   const bytes = asciiToBytes(asciiString);
//   console.log(bytes);


// ////////////////////////////////////////////// others

// let str = 'h'
// const binaryRepresentation = new TextEncoder().encode(str)
// console.log(binaryRepresentation)


////////////////////////////////////////////// converting ascii to Uint8Array
// function asciiToBytes(asciiString) {
//   return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
// }

// // Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]


////////////////////////////////////////////// converting Array to hex
function arrayToHex(byteArray) {
  let hexString = '';
  for (let i = 0; i < byteArray.length; i++) {
    hexString += byteArray[i].toString(16).padStart(2, '0');
  }
  return hexString;
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const hexString = arrayToHex(byteArray);
console.log(hexString);  
