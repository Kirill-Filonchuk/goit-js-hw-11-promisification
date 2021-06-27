// Перепиши функцию `makeTransaction()` так, чтобы она не использовала
// callback-функции `onSuccess` и `onError`, а принимала всего один параметр
// `transaction` и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // const ran=Math.random()
            // const canProcess =ran > 0.3;
            // console.log(`select ${canProcess}, ran = ${ran}`);
            const canProcess = Math.random() > 0.3;
            const getResolveData = {};
            getResolveData.transaction = transaction.id;
            getResolveData.time = delay;

            if (canProcess) {
                resolve(getResolveData);
            } else {
                reject(transaction.id);
            }
        }, delay);
        
    })
   
};
const logSuccess = ({ transaction, time }) => {
    console.log(`Transaction ${transaction} processed in ${time}ms`);
    };

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
    };


/*
 * Работает так
 */

// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// *
//  * Должно работать так
//  */

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);