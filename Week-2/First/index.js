function ASCIItoByte(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt(i));
  }
  return arr;
}

function BytetoASCII(arr) {
    return new TextDecoder().decode(arr);
}

const s = "Prem";
const arr = new Uint8Array([80, 114, 101, 109]);
console.log(BytetoASCII(arr));
console.log(ASCIItoByte(s));
