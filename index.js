function currencyExchange() {
    const btn = prompt("What is Bitcoin price today");
    const dol = prompt("How much $ do you have");
    return alert(`you can buy ${dol / btn}`);
  }
  currencyExchange(21000, 1000);