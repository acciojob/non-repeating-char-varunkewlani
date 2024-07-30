function firstNonRepeatedChar(str) {
	for(let i=0;i<str.length-1;i++)
		{
			if(str.charAt(i)!=str.charAt(i+1) && str.charAt(i)!=str.charAt(i-1))
			{
				return str.charAt(i)
			}
		}
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
