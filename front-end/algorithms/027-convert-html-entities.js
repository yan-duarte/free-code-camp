/*
Convert HTML Entities:
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return Dolce &?amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &?lt; Pizza &?lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &?gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &?quot;quotation marks&?quot;.
convertHTML("Shindler's List") should return Shindler&?apos;s List.
convertHTML("<>") should return &?lt;&?gt;.
convertHTML("abc") should return abc.
*/

function convertHTML(str) {
  // &colon;&rpar;
  str = str.replace(/&/g,"&amp;");
  str = str.replace(/</g,"&lt;");
  str = str.replace(/>/g,"&gt;");
  str = str.replace(/"/g,"&quot;");
  str = str.replace(/'/g,"&apos;");
  
  return str;
}

convertHTML("Dolce & Gabbana");
