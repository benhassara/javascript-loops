for (var i = 0; i < 1001; i += 100) {
  console.log(i);
}

for (var i = 1; i <= 128; i *= 2) {
  console.log(i);
}

for (var i = 0; i < 11; i += 2) {
  console.log(i);
}

for (var i = 3; i < 16; i += 3) {
  console.log(i);
}

for (var i = 9; i >= 0; i--) {
  console.log(i);
}

var i = 1;
while (i < 5) {
  for (var k = 0; k < 3; k++)
    console.log(i);
  i++;
}

for (var i = 0; i < 3; i++) {
  for (var k = 0; k < 5; k++)
    console.log(k);
}
