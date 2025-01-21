function delayedMessage(message, delay, callback) {
    console.log("Started!!!")
    setTimeout(() => {
      console.log(message);
      if (callback) {
        callback();
      }
    }, delay);
  }
  
  delayedMessage("Hello, World!", 2000, () => {
    console.log("Message has been printed!");
  });
  