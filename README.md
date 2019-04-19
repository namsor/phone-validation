
# NamSor phone validation
Global phone number validation based on personal name and phone number formatting.


<h3>Getting started</h3>

The following sample shows how to validate a locally formated phone number into an international phone number E.164

E.164 is an ITU-T recommendation, titled The international public telecommunication numbering plan.

<h3>How to Use</h3>

The API simply takes personal name : first name / given name and last name / surname, as well as the phone number. You don't need to have the phone number in an international format : it can be a local number. 

Make a call to NamSor API https://v2.namsor.com/NamSorAPIv2/apidoc.html#/social/phoneCode
with firstName lastName phoneNumber and pass the API Key as a X-API-KEY header.

<h3>Response You get</h3>

Since POTUS gave his own personal number in a Tweet (https://twitter.com/realDonaldTrump/status/628590822913650688), we'll use that as a example :
```bash
curl -X GET "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/Donald/Trump/917.756.8000" -H "accept: application/json" -H "X-API-KEY: <your api key here>"
```

Will get you this JSON response : 
```json
{
  "id": null,
  "firstName": "Donald",
  "lastName": "Trump",
  "internationalPhoneNumberVerified": "+1 917-756-8000",
  "phoneCountryIso2Verified": "US",
  "phoneCountryCode": 1,
  "phoneCountryCodeAlt": 63,
  "phoneCountryIso2": "US",
  "phoneCountryIso2Alt": "PH",
  "originCountryIso2": "GB",
  "originCountryIso2Alt": "FR",
  "phoneNumber": "917.756.8000",
  "verified": true,
  "score": 1.8924464202870794
}
```

The main output is <b>internationalPhoneNumberVerified</b>, if the number could be verified using Google's validation API. 

<h3>Using from AngularJS or JQuery </h3>

You can try with a few numbers for yourself or see how the API can be used from AngularJS or JQuery here,
https://namsor.github.io/phone-validation/

<h3>How it works</h3>

Google's phone validation API (googlei18n/libphonenumber) normally requires as input a COUNTRY and PHONE number. NamSor's phoneCode API combines the likely country of origin from the name and the predicted phone country, based on both name and phone number formatting, to call's google phone validation API and workaround its limitations. 



