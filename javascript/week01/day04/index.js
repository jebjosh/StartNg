for (i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
  if (i == 5) {
    for (j = 4; j >= 1; j--) {
      console.log("*".repeat(j));
    }
  }
}
