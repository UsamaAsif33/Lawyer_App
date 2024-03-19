import {PaymentRequest} from '@google/react-native-make-payment';
import { useDispatch, useSelector } from 'react-redux';

import { setUserState } from '../redux/userSlice';
import { saveItemInAsyncStorage } from '../utils/storage/asyncStorage';


export const GooglePayment = () => {
  const getToken = useSelector(store => store?.auth?.userData?.token);
  const dispatch = useDispatch()
  
  // RETURN THE RESPONSE OF PAYMENT
  const handleResponse = async(response) => {
    // console.log('response', response);
    await saveItemInAsyncStorage('Token', getToken);
    dispatch(setUserState(true));
  };

  //   PAYMENT WITH GOOGLE PAY ACTION
  const payWithGPayAction = ( value) => {
    const paymentDetails = {
      total: {
        amount: {
          currency: 'USD',
          value: value.toString(),
        },
      },
    };

    const googlePayRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: [
              'AMEX',
              'DISCOVER',
              'INTERAC',
              'JCB',
              'MASTERCARD',
              'VISA',
            ],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'adyen',
              gatewayMerchantId: '<PSP merchant ID>',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '01234567890123456789',
        merchantName: 'Example Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: value.toString(),
        currencyCode:'USD',
        countryCode: 'US',
      },
    };

    // PAYMENT METHOD
    const paymentMethods = [
      {
        supportedMethods: 'google_pay',
        data: googlePayRequest,
      },
    ];

    const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails);

    paymentRequest
      .canMakePayment()
      .then(canMakePayment => {
        if (canMakePayment) {
          showPaymentForm(paymentRequest);
        } else {
          handleResponse('Google Pay unavailable');
        }
      })
      .catch(error => {
        handleResponse(`paymentRequest.canMakePayment() error: ${error}`);
      });
  };

  // FUNCTION FOR SHOWING PAYMENT FORM
  const showPaymentForm = paymentRequest => {
    paymentRequest
      .show()
      .then(response => {
        if (response === null) {
          handleResponse('Payment sheet cancelled');
        } else {
          handleResponse(JSON.stringify(response, null, 2));
        }
      })
      .catch(error => {
        handleResponse(`paymentRequest.show() error: ${error}`);
      });
  };

  return {payWithGPayAction};
};
