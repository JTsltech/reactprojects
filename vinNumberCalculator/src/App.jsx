import { useState } from 'react'
import SelectBox from './components/SelectBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import useCurrencyExchange from './hooks/useCurrencyExchange';

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [exchangeData, setExchangeData] = useState({})

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const currencyExchange = useCurrencyExchange(from,to)

  //const exchangeValues = Object.keys(currencyExchange)

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/6771152/pexels-photo-6771152.jpeg?auto=compress&cs=tinysrgb&w=400')`,
        }}
      >
        <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                  }}>
                    <div className="w-full mb-1">
                        <SelectBox
                            label="From"
                            currencyOptions={options}
                            selectCurrency={from}
                            onCurrencyChange={(currency) => setFrom(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            //onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mb-1">
                        <SelectBox
                            label="To"
                            currencyOptions={options}
                            selectCurrency={to}
                            onCurrencyChange={(currency) => setTo(currency)}
                        />
                    </div>
                </form>
                <div>
                  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
