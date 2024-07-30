function firstNonRepeatedChar(str) {
	let data=new Map()
	let count=0;
	for(let i=0;i<str.length;i++)
		{
			
			if(!data.has(str[i]))
			{
				count=0;
				data.set(str[i],count++)
			}
			else
			{
				data.set(str[i].data.get(i)++)
			}
		}
	for(let x of data)
		{
			if(x[1]==1)
			{
				return x[0]
				break;
			}
		}
		
	
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
