const byteSize = (str) => {
  // write your code here
	//return str.length;
	const encoder=new TextEncoder();
	const encodeString=encoder.encode(string);
	return encoded.String.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));