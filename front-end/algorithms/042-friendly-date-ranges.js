/*
Friendly Date Ranges:
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].
makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].
makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
*/

function ordinal(num){
  
  switch (true){
    case (num.split("")[1] === "1" && num.split("")[0] !=="1"): return parseInt(num) + "st";
    case (num.split("")[1] === "2" && num.split("")[0] !=="1"): return parseInt(num) + "nd";
    case (num.split("")[1] === "3" && num.split("")[0] !=="1"): return parseInt(num) + "rd";
    default: return parseInt(num) + "th"; 
  }
}

function makeFriendlyDates(arr) {
  arr[0] = arr[0].replace(/-/g,"");
  var maskInit = arr[0].match(/(\d{0,4})(\d{0,2})(\d{0,2})/);

  arr[1] = arr[1].replace(/-/g,"");
  var maskEnd = arr[1].match(/(\d{0,4})(\d{0,2})(\d{0,2})/);
  
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  var initDay   = ordinal( maskInit[3]),
      initMonth = maskInit[2],
      initYear  = maskInit[1],
      endDay    = ordinal(maskEnd[3]),
      endMonth  = maskEnd[2],
      endYear   = maskEnd[1],
      qtMonth   = 0,
      result    = [],
      currentYear = new Date().getFullYear();
  
  qtMonth = endMonth - initMonth;
  if (endYear - initYear >= 1) qtMonth += 12 * (endYear - initYear);
  
  result[0] = months[parseInt(initMonth)-1]+" "+initDay;
  
   
  switch (true){
    case (qtMonth === 0 && endDay === initDay):
      result[0] += ", "+initYear;
      break;
      
    case (qtMonth === 0):
      result[1] = endDay;
      break;
      
    case (qtMonth === 12 && maskInit[3] - maskEnd[3] > 0):
    case (qtMonth < 12):
      if (parseInt(currentYear) !== parseInt(initYear)) result[0] += ", "+initYear;
      result[1] = months[parseInt(endMonth)-1]+" "+endDay;
      break;
      
    case (qtMonth == 12 && maskInit[3] - maskEnd[3] <= 0):
    case (qtMonth > 12):
      result[0] += ", "+initYear;
      result[1] = months[parseInt(endMonth)-1]+" "+endDay+", "+endYear;
      break;
  }
  return result;
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);
