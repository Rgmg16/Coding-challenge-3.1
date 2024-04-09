function sumAsync(num1, num2, callback) {
    
    const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000 and 5000 milliseconds
  
       setTimeout(() => {
      const result = num1 + num2;
      
      callback(result);
    }, delay);
  }
  
  console.log("Calculating sum...");
  sumAsync(9, 4, (result) => {
    console.log("The sum is:", result);
  });