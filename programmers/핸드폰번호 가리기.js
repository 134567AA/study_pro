const solution = (phone_number) =>{
  const a = Array.from({length: phone_number.length-4},()=>"*").join("");
  console.log(a);
  const b = phone_number.substring(phone_number.length-4,phone_number);
  console.log(b);
  return a + b
   
    
}
console.log(solution("01033843378"));