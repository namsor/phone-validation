
# phone-validation
Global phone number validation based on personal name and phone formatting.


<h3>Getting started</h3>
The following sample shows you how to use number verification API process by using NamSon API. To learn how to validate the code the user supplies and perform other operations.

Whether you’re looking to build brand awareness or generate leads; we create a social strategy tailored to your targets. that engages with current and potential clients, briings traffic to your website and converts leads into sales.


<h3>How to Use</h3>
A verification process can be used to verify a user's phone number. The Verify API confirms that a user is in possession of a specific device based on a phone number. To start a verification process, you'll need the number to be verified, and your name so the recipient can identify .

Be sure the number is in international format. Make a call to (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode), /FirstName/LastName/Number with those parameters, along with your api_key and headers .
<br>
httpOptions = {<br>
headers: new HttpHeaders <br>
'Accept': 'application/json',<br>
'x-api-key': '4ac7667457defcf5e4ebdaa6cb985e5d'<br>
}
<br>
Your format will be look like (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/John/Doe/+12123232117)<br>
This is your API key: "4ac7667457defcf5e4ebdaa6cb985e5d"

<h3>Response You get</h1>

The response will be a JSON object. If the POST status is success the verification request was successful, and NamSon has started the process. Once you've started a verification process, you can't verify the same number until the exsisting request expires. A successful verification request will include a originCountryIso2.<br>


{
                            "firstName"	: "John" <br>
                            "id"	                              :
                            "internationalPhoneNumberVerified"	:   "+1 650-454-7093"<br>
                            "lastName"	                        :   "Doe"<br>
                            "originCountryIso2"	                :   "IN"<br>
                            "originCountryIso2Alt"	            :   "PK"<br>
                            "phoneCountryCode"	                :   "1"<br>
                            "phoneCountryIso2"	                :   "US"<br>
                            "phoneCountryIso2Alt"	            :   "FR"<br>
                            "phoneCountryIso2Verified"	        :   "US"<br>
                            "phoneNumber"                       :	"16504547093"<br>
                            "score"	                            :   "5.315358167289838"<br>
                            "verified"	                        :   "true"<br>
    }               
