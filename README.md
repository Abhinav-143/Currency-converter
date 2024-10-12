# Currency Converter
This project is a Currency Converter web application built using React.js for seamless user experience and accurate currency conversion. It allows users to quickly convert between different currencies with up-to-date exchange rates.

# Key Features:
Real-Time Currency Conversion:

Fetches real-time exchange rates from a public API (e.g., ExchangeRate-API or OpenExchangeRates) to ensure accurate currency conversions.
Supports conversions between multiple global currencies like USD, EUR, GBP, INR, and more.
# React.js Integration:

Utilizes React.js to build reusable components, ensuring a dynamic and efficient user interface.
State management is handled using React’s useState and useEffect hooks to fetch and update exchange rates seamlessly.
The interface allows users to select the base currency, target currency, and input the amount to convert.
# Simple & Responsive UI:

Designed with a minimalist and intuitive user interface that makes it easy to navigate and use.
Styled using CSS for a clean, professional look, with responsiveness built in to ensure the application works smoothly on all devices (mobile, tablet, desktop).
# Exchange Rate API Integration:

The app fetches live exchange rates from a public API, ensuring that users get the most current conversion rates.
Handles API calls asynchronously with error handling in case of issues fetching the data.
# Automatic Updates:

The app periodically updates exchange rates without requiring a page reload, ensuring users always get the latest information.
It also allows for manual refreshes of exchange rates if needed.
# Error Handling:

Provides clear feedback to the user if the conversion cannot be completed due to network issues or invalid inputs.
Displays meaningful error messages to guide users through corrective actions.
# Future Enhancements (Optional):

Add a feature to store favorite conversions for quick access.
Support for currency conversion history and trends.
# Technologies Used:
# React.js: 
For building the user interface with reusable, efficient components.
# API: 
Public currency exchange API (e.g., ExchangeRate-API) for real-time data.
# CSS: 
For custom styling and ensuring a responsive layout across different screen sizes.
# Installation & Setup:
Clone the repository:
bash
Copy code
git clone https://github.com/Abhinav-143/Currency-converter.git
Install dependencies:
bash
Copy code
npm install
Add your API key for the currency converter API in the environment file:
bash
Copy code
cp .env.example .env
# Add your API key in the .env file (REACT_APP_API_KEY=your_key)
# Run the development server:
bash
Copy code
npm start
# How to Use:
Select the base currency (e.g., USD) from the dropdown.
Select the target currency (e.g., EUR) for conversion.
Enter the amount to convert.
View the converted amount based on the latest exchange rate.
