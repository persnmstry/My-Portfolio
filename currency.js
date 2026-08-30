const countryCodes = {
    USD: "us",
    GHS: "gh",
    EUR: "eu",
    NGN: "ng",
    GBP: "gb",
    CAD: "ca",
    AUD: "au",
    JPY: "jp",
    CNY: "cn",
    KES: "ke",
    ZAR: "za"
};

const amountInput = document.getElementById('amount');
const resultInput = document.getElementById('result');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const fromFlag = document.getElementById('from-flag');
const toFlag = document.getElementById('to-flag');
const convertBtn = document.getElementById('convert-btn');
const swapBtn = document.getElementById('swap-btn');
const rateDisplay = document.getElementById('rate-display');

function updateFlags() {
    const fromCurr = fromSelect.value;
    const toCurr = toSelect.value;

    fromFlag.src = `https://flagcdn.com/w40/${countryCodes[fromCurr]}.png`;
    toFlag.src = `https://flagcdn.com/w40/${countryCodes[toCurr]}.png`;
}

async function convertCurrency() {
    const amountVal = amountInput.value;
    const fromVal = fromSelect.value;
    const toVal = toSelect.value;

    updateFlags();

    if (!amountVal || amountVal <= 0) {
        resultInput.value = "0.00";
        return;
    }

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromVal}`);
        const data = await response.json();

        if (data.result === "success") {
            const rate = data.rates[toVal];
            const total = (amountVal * rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            
            resultInput.value = total;
            rateDisplay.innerText = `1 ${fromVal} = ${rate.toFixed(2)} ${toVal}`;
        }
    } catch (error) {
        rateDisplay.innerText = "Error fetching rates";
    }
}

swapBtn.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convertCurrency();
});

convertBtn.addEventListener('click', convertCurrency);
amountInput.addEventListener('input', convertCurrency);
fromSelect.addEventListener('change', convertCurrency);
toSelect.addEventListener('change', convertCurrency);

convertCurrency();