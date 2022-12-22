const showBumbers = (limit) => {
  for(let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? "even" : "odd";
    console.log(i, message);
  }
}

showBumbers(10);