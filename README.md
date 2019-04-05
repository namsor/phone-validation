# phone-validation

               

						  <div class="xs-heading style4 mb-0"> <!-- .mb-0 class only for demo -->
                        <h2 class="section-title"><br> <span>How to </span>Use</h2>
						                        <span class="line"></span>

							<p>A verification process can be used to verify a user's phone number. The Verify API confirms that a user is in possession of a specific device based on a phone number.

                                To start a verification process, you'll need the number to be verified, and your name so the recipient can identify .<br><br>Be sure the number is in international format.
                                
                                Make a call to (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode), /FirstName/LastName/Number with those parameters, along with your api_key and headers .</p>

                                <p style="background: #1c2434f0; padding: 1em; color: chocolate;">
                                <span class="hc">httpOptions =</span> headers: new HttpHeaders <br>
                                          'Accept':  'application/json',<br>
                                          'x-api-key': '4ac7667457defcf5e4ebdaa6cb985e5d'
                                        
                                

                                </p>
                                <p style="background: #1c2434f0; padding: 1em; color: chocolate;">Your format will be look like (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/John/Doe/+12123232117) <br>
                                    This is your API key: "4ac7667457defcf5e4ebdaa6cb985e5d"</p>
                    </div><!-- .xs-heading END -->
                </div>




                <div class="row">
               

                    <div class="xs-heading style4 mb-5"> <!-- .mb-0 class only for demo -->
                  <h2 class="section-title"><br> <span>Response </span>You get</h2>
                                          <span class="line"></span>

                      <p>The response will be a JSON object. If the POST status is success the verification request was successful, and NamSon has started the process. Once you've started a verification process, you can't verify the same number until the exsisting request expires.
                    A successful verification request will include a originCountryIso2.</p>

                          <p style="background: #1c2434f0; padding: 1em; color: chocolate;">
                          <span class="hc">
                            "firstName"	: "John" <br>
                            "id"	   
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
                          </span>
                                  
                          

                          </p>
              </div><!-- .xs-heading END -->
          </div>



            </div>those parameters, along with your api_key and headers .

httpOptions = {
headers: new HttpHeaders 
'Accept': 'application/json',
'x-api-key': '4ac7667457defcf5e4ebdaa6cb985e5d'
}
Your format will be look like (https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/John/Doe/+12123232117)
This is your API key: "4ac7667457defcf5e4ebdaa6cb985e5d"

Response You get

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
