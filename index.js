////////////////////////////////////////////// converting bytes to ascii
// function bytesToAscii(byteArray) {
//     return byteArray.map(byte => String.fromCharCode(byte)).join('');
//   }
  
//   const bytes = [73, 11, 103, 68, 11];  
//   const asciiString = bytesToAscii(bytes);
//   console.log(asciiString);  


////////////////////////////////////////////// converting ascii to bytes
function asciiToBytes(asciiString) {
    return Array.from(asciiString).map(char => char.charCodeAt(0));
  }
  
  const asciiString = 'Hello';
  const bytes = asciiToBytes(asciiString);
  console.log(bytes);