// import ondc
import pkg from 'ondc-node';
const { Middleware } = pkg;
import express, { json } from "express";
// import handlers for the ONDC API calls
import handlers from "./handlers.js";
const app = express();
app.use(json());
// Use ONDC Middleware to implement ONDC APIs in one line
// You can pass custom APIs handlers
// if handler does not exist a fallback handler will be used
app.use("/ondc", Middleware(
{
    "on_search": handlers["onSearch"],
    "on_init": handlers["onInit"],

}));

// const instance = new ondc.ONDC({ "host": "http://localhost:5000", 
// "action": "search", "bapId": "ondc.gofrugal.com/ondc/18275", 
// "bapUri": "https://ondc.gofrugal.com/ondc/seller/adaptor", "bppId": "ondc.yaarilabs.com", 
// "bppUri": "https://ondc.yaarilabs.com/", "domain": "nic2004:60232", 
// "country": "IND", "city": "std:080", "ttl": "PT30S", 
// "key": "<encryption key>", "signingPublicKey" : "<signing key>", 
// "privateKey" : "<private key>", "uniqueKey" : "<uniqueKey>", 
// "subscriberId" : "<subscriberId>" });

// let body = {
//         "item": {
//             "descriptor": {
//                 "name": "Milk"
//             }
//         },
//         "fulfillment": {
//             "end": {
//                 "location": {
//                     "gps": "12.4535445,77.9283792"
//                 }
//             }
//         }
//     };
// instance.apiKey = await instance.createAuthorizationHeader(body);
// let result = await instance.search(body);

const instance = new pkg.ONDC({
    host: "https://pilot-gateway-1.beckn.nsdl.co.in/search",
    bapId: "bap.com",
    bapUri: "https://bap.com/beckn",
    bppId: "bpp.com",
    bppUri: "https://bpp.com/beckn",
    country: "IND",
    city: "std:080",
    ttl: "P1M" 
});
// Making a search call to gateway
const response = await instance.search({
        "item": {
            "descriptor": {
                "name": "ABC Aata"
            }
        },
        "fulfillment": {
            "end": {
                "location": 
                {
                     "gps": "12.4535445,77.9283792"
                }
            }
        }
    });

console.log(response);