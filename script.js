function firstNonRepeatedChar(str) {
	let data=new Map()
	
	for(let i=0;i<str.length;i++)
		{
			
			if(!data.has(str[i]))
			{
				
				data.set(str[i],1)
			}
			else
			{
				data.set(str[i],data.get(str[i])+1)
			}
		}
	for(let x of data)
		{
			if(x[1]==1)
			{
				return x[0]
				
			}
		}
	return null;
	
		

 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
