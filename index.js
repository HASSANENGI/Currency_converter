import inquirer from "inquirer";
const exchangeRates = {
    "USD - United States Dollar": 1,
    "PKR - Pakistani Rupees ": 280,
    "EUR - Euro": 0.85,
    "JPY - Japanese Yen": 110.15,
    "GBP - British Pound Sterling": 0.75,
    "AUD - Australian Dollar": 1.35,
    "CAD - Canadian Dollar": 1.25,
    "CHF - Swiss Franc": 0.91,
    "CNY - Chinese Yuan": 6.45,
    "SEK - Swedish Krona": 8.64,
    "NZD - New Zealand Dollar": 1.42
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "exchange_from",
        message: "Select currency you want to exchange from :",
        choices: ["USD - United States Dollar", "PKR - Pakistani Rupees", "EUR - Euro", "JPY - Japanese Yen", "GBP - British Pound Sterling", "AUD - Australian Dollar", "CAD - Canadian Dollar", "CHF - Swiss Franc", "CNY - Chinese Yuan", "SEK - Swedish Krona", "NZD - New Zealand Dollar"]
    },
    {
        type: "list",
        name: "exchange_to",
        message: "Select currency you want to exchange to :",
        choices: ["USD - United States Dollar", "PKR - Pakistani Rupees ", "EUR - Euro", "JPY - Japanese Yen", "GBP - British Pound Sterling", "AUD - Australian Dollar", "CAD - Canadian Dollar", "CHF - Swiss Franc", "CNY - Chinese Yuan", "SEK - Swedish Krona", "NZD - New Zealand Dollar"]
    },
    {
        type: "number",
        name: "Amount_To_Exchange",
        message: "Enter Amount you want to exchange :",
    }
]);
if (answers.exchange_from && answers.exchange_to && answers.Amount_To_Exchange) {
    let from = exchangeRates[answers.exchange_from];
    let to = exchangeRates[answers.exchange_to];
    let E_rate = answers.Amount_To_Exchange / from;
    let converted_amount = E_rate * to;
    console.log(converted_amount);
}
