const crypto = require("crypto");
let ans;
let input = 0;
while (1) {
  str = input.toString();
  const hash = crypto.createHash("sha256").update(str).digest("hex");
  const res = hash.slice(0, 5);
  if (res === "00000") {
    ans = str;
    break;
  }
  input++;
}

console.log(ans);
