async function sleep(timeMS) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve();}, timeMS);
  })
}

async function retry(operation, maxAttempts, waitTimeMS) {
  while (maxAttempts-- > 0) {
    try {
      const result = await operation();
      return result;
    } catch(err) {
      const lastError = err;
      if(maxAttempts >=1 ){
        await sleep(waitTimeMS);
      }
    }
  }
  throw lastError;
}

//usage
await retry(
  () => fetch('foobar.com'),
  3,
  5
);