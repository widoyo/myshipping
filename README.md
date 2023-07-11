# Aplikasi My Shipping

_Kiriman Barang Corporate_

## Brainstorm

1. Perintah delivery, Scanned DO, entry into system
   Entry goods to deliver
2. Libatkan vendor pengiriman
   Select vendor
   Select pickup point
   Select transfer point
   Select delivery point
3. Tracked pada titik-titik tertentu
   Entry data on each point
4. Proof of delivery
   Delivery code
5. Invoicing

## Data

1. Users
2. Customer (corporate, with contact person)
3. Shipping Data { AWB, Customer, Receiver, ItemID[], shipstatus }
4. Tracking Data { datetime, AWB, location }
5. POD { datetime, signature receiver }

## URLS

1. /
2. /login
2. /logout
2. /customer(s)
2. /customer/new 
2. /customer/<id>

3. /shipment
4. 
## Demo Usage

```bash
npm install
npm run dev
```
