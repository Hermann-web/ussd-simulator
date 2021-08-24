

function returnResponse(text){
		mode="menu";

		level = 1;
		ussd_array = text.split("*");
		if(ussd_array.lenght==0){
			level=0;
		}else{
			 level=ussd_array.lenght;
		}

		 level= level+1;

		if(!text)
			 level=1;




		switch ( ussd_array[0]) {
			case '0':
				 mode="menu";
				break;
			case '':
				 mode="menu";
				break;
			case '1':
				 mode="create";
				break;
			case '2':
				 mode="balance";
				break;
			case '3':
				 mode="sendMoney";
				break;
			
			default:
				// code...
				break;
		}

		if( level==1){
			return (displayMenu());
		}else{
			if( mode=="menu"){
				switch ( text) {
					case '0':
						return (displayMenu());
						break;
					case '1':
						return (createAccount());
						break;
					case '2':
						return (checkBalance());
						break;
					case '3':
						return (checkNumber());
						break;
					case '4':
						return (sendMoney());
						break;
					
					default:
						return (displayError());
						break;
				}
			}else if( mode=="create"){
				switch ( text) {
					case '1':
						return (createAccount());
						break;
					case '1*1':
						return( "END You choose \n Male");
						break;
					case '1*2':
						return( "END You choose \n Female");
						break;
					case '1*3':
						return( "END You choose \n Not Now");
						break;
					
					default:
						return (displayError());
						break;
				}

			}else if( mode=="balance"){
				return (checkBalance());

			}else if( mode=="sendMoney"){
				switch ( text) {
					case '3':
						return (sendMoney());
						break;
					case '3*1':
						return( "END You choose \n MTN");
						break;
					case '3*2':
						return( "END You choose \n AIRTEL");
						break;
					case '3*3':
						return( "END You choose \n TIGO");
						break;
					
					default:
						return (displayError());
						break;
				}

			}
		}

}



function displayMenu(){
	 text="CON USSD Testing \n";
	 text+="1. Create Account \n";
	 text+="2. Check Balance \n";
	 text+="3. Check My Number \n";
	 text+="4. Send Money \n";
	 text+="5. Buy Books \n";
	 text+="44. Next \n";
	return(text);
}
function createAccount(){
	 text="CON Creating Account\n";
	 text+="1. Male \n";
	 text+="2. Woman \n";
	 text+="3. Not Now \n";
	return(  text);
}
function checkBalance(){
	 text="END Account Balance\n";
	 text+="Your account Balance is 43,050Rwf \n";
	return(  text);
}
function displayError(){
	 text="END Error\n";
	 text+="Uknown USSD command \n";
	return(  text);
}
function checkNumber(){
	
	 text="END Ckeck Number\n";
	 number= '+989898';
	 text+="Your number is "+number+" \n";
	return(  text);
}
function sendMoney(){
	 text="CON Send Money\n";
	 text+="1. MTN \n";
	 text+="2. TIGO \n";
	 text+="3. AIRTEL \n";
	return(text);
}