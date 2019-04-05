
# phone-validation
Global phone number validation based on personal name and phone formatting.


Getting started
The following sample shows you how to use number verification API process by using NamSon API. To learn how to validate the code the user supplies and perform other operations.

Whether you’re looking to build brand awareness or generate leads; we create a social strategy tailored to your targets. that engages with current and potential clients, briings traffic to your website and converts leads into sales.


How to Use
A verification process can be used to verify a user's phone number. The Verify API confirms that a user is in possession of a specific device based on a phone number. To start a verification process, you'll need the number to be verified, and your name so the recipient can identify .

Be sure the number is in international format. Make a call to (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode), /FirstName/LastName/Number with those parameters, along with your api_key and headers .

httpOptions = {
headers: new HttpHeaders 
'Accept': 'application/json',
'x-api-key': '4ac7667457defcf5e4ebdaa6cb985e5d'
}
Your format will be look like (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/John/Doe/+12123232117)
This is your API key: "4ac7667457defcf5e4ebdaa6cb985e5d"

<h1>Response You get<h1>

The response will be a JSON object. If the POST status is success the verification request was successful, and NamSon has started the process. Once you've started a verification process, you can't verify the same number until the exsisting request expires. A successful verification request will include a originCountryIso2.
{
"firstName"	: "John" <br>
"id" "internationalPhoneNumberVerified"	: "+1 650-454-7093"
"lastName" : "Doe"
"originCountryIso2" : "IN"
"originCountryIso2Alt" : "PK"
"phoneCountryCode" : "1"
"phoneCountryIso2" : "US"
"phoneCountryIso2Alt" : "FR"
"phoneCountryIso2Verified" : "US"
"phoneNumber" :	"16504547093"
"score" : "5.315358167289838"
"verified" : "true"
}
