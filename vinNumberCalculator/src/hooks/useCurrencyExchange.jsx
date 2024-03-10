import React from "react";
import { useState, useEffect } from "react";

function useCurrencyExchange(from_currency,to_currency){
    const [data,setData] = useState({})

    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from_currency}&to_currency=${to_currency}&apikey=I4GBS5750ZNES2BU`)
        .then((res) => res.json())
        .then(res => setData(res["Realtime Currency Exchange Rate"]))        
    },[from_currency,to_currency])
    console.log(data);
    return data
}

export default useCurrencyExchange