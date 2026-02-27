# Razorpay Payment Integration Setup

## Overview
Your EcoSip website now supports Razorpay payments. Follow these steps to set up your payment gateway.

## Steps to Configure Razorpay

### 1. Create a Razorpay Account
- Visit https://razorpay.com
- Sign up for a free account
- Complete KYC verification (for live payments)

### 2. Get Your API Keys
- Go to https://dashboard.razorpay.com/app/keys
- You'll find:
  - **Key ID** (Public Key) - Safe to expose to frontend
  - **Key Secret** (Private Key) - Keep secure, server-only

### 3. Add Environment Variables
Add these variables to your Vercel project or `.env.local`:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

### 4. Testing
- Use Razorpay's test credentials to test payments first
- Test card: 4111 1111 1111 1111
- Expiry: Any future date (e.g., 12/25)
- CVV: Any 3 digits

## Payment Flow

1. Customer adds items to cart
2. Customer clicks "Proceed to Checkout"
3. Checkout panel appears with "Pay with Razorpay" button
4. Customer clicks the button and Razorpay modal opens
5. Customer completes payment
6. Order is confirmed and cart is cleared

## Features

- Secure payment processing
- Real-time payment status
- Automatic order confirmation
- Support for multiple payment methods (Credit/Debit Cards, UPI, Wallets, etc.)

## For Production

- Change from test credentials to live credentials
- Ensure SSL/HTTPS is enabled
- Set up webhooks for order confirmation (optional)
- Test thoroughly before going live

## Support

For issues, visit: https://razorpay.com/support
