// ## Задание 1


const delay = ms => {
  return new Promise(resolve => setTimeout(resolve =>logger(ms),ms))
}

const logger = time => console.log(`Resolved after ${time}ms`);

// Test
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms