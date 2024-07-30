function firstNonRepeatedChar(str) {
	let s=""
	for(let i=0;i<str.length-1;i++)
		{
			ifstr.charAt(i)!=str.charAt(i+1) && str.charAt(i)!=str.charAt(i-1))
			{
				s=str.charAt(i)
			}
		}
	if(s="")
		return null
	else
		return s
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
