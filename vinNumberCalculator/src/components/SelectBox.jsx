import React from "react";
import { useId } from "react";

function SelectBox({
    onCurrencyChange,
    selectCurrency = "",
    currencyOptions = [],
    label
}){
    const currencyInputId = useId()
    return (
        <>
            <div>
                <p className="text-black/40 mb-2 w-full">{label}</p>
                <select id={currencyInputId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange &&
                    onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                </select>
            </div>
        </>
    )
}

export default SelectBox