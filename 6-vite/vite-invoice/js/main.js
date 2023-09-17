import "../scss/app.scss";
import Invoice from "./Invoice";

import "bootstrap"


const invoiceApp = new Invoice({
    totalVoice : false,
    incrementQuantity : 3
});

// doc

invoiceApp.init()