/*
Validate US Telephone Numbers 
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

telephoneCheck("555-555-5555") should return a boolean.
telephoneCheck("1 555-555-5555") should return true.
telephoneCheck("1 (555) 555-5555") should return true.
telephoneCheck("5555555555") should return true.
telephoneCheck("555-555-5555") should return true.
telephoneCheck("(555)555-5555") should return true.
telephoneCheck("1(555)555-5555") should return true.
telephoneCheck("555-5555") should return false.
telephoneCheck("5555555") should return false.
telephoneCheck("1 555)555-5555") should return false.
telephoneCheck("1 555 555 5555") should return true.
telephoneCheck("1 456 789 4444") should return true.
telephoneCheck("123**&!!asdf#") should return false.
telephoneCheck("55555555") should return false.
telephoneCheck("(6505552368)") should return false
telephoneCheck("2 (757) 622-7382") should return false.
telephoneCheck("0 (757) 622-7382") should return false.
telephoneCheck("-1 (757) 622-7382") should return false
telephoneCheck("2 757 622-7382") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("27576227382") should return false.
telephoneCheck("(275)76227382") should return false.
telephoneCheck("2(757)6227382") should return false.
telephoneCheck("2(757)622-7382") should return false.
telephoneCheck("555)-555-5555") should return false.
telephoneCheck("(555-555-5555") should return false.
telephoneCheck("(555)5(55?)-5555") should return false.
*/

function telephoneCheck(str) {
  var cleanStr = str.replace(/\D/g, ""),
      strTemp = cleanStr,
      maskArr = [];

  
  switch (true){
    case (cleanStr.length < 10 || cleanStr.length > 11) :
    case (cleanStr.length === 11 && cleanStr[0] !== "1") :
      return false;  
  }
  
  if (cleanStr.length === 11) {
    strTemp = cleanStr.substring(1,cleanStr.length);
  }
  
  
  var mask = strTemp.match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    
  maskArr.push(mask[1]+"-"+mask[2]+"-"+mask[3]);
  maskArr.push("("+mask[1]+")"+mask[2]+"-"+mask[3]);
  maskArr.push("("+mask[1]+") "+mask[2]+"-"+mask[3]);
  maskArr.push(mask[1]+" "+mask[2]+" "+mask[3]);
  maskArr.push(mask[1]+mask[2]+mask[3]);
  
    
  for (var i = 0; i< maskArr.length; i++){
    switch (true){
      case (cleanStr.length === 11 && ("1"+maskArr[i] === str || "1 "+maskArr[i] === str)):
      case (maskArr[i] === str):
            return true;        
    }    
  }
  return false;
}

telephoneCheck("-1 (757) 622-7382");
