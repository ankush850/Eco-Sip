// Razorpay Configuration
export const RAZORPAY_CONFIG = {
  keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag',
  keySecret: process.env.RAZORPAY_KEY_SECRET,
}

export const calculateRazorpayAmount = (amount: number) => {
  // Convert to paise (multiply by 100)
  return Math.round(amount * 100)
}
