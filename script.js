function firstNonRepeatedChar(str) {
	let s=""
	for(let i=0;i<str.length-1;i++)
		{
			if(str.charAt(i)!=str.charAt(i+1) && str.charAt(i)!=str.charAt(i-1))
			{
				s=str.charAt(i)
				break;
			}
		}
	if(s=="")
		return null 
	else
		return s

 // Write your code here
}
const input =/ prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
