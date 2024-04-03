str1="abc";
str2="xyz";
console.log(str1);
console.log(str1==str2);
str2=new String(str1);
console.log(str1==str2);

s="Welcome";
console.log(s);
for(let i=0;i<s.length;i++)
{
    console.log(s[i]);
}

// console.log(s.toUpperCase());
//  b=s.at(2);
//  console.log(b);

 s1="Welcome to Thinkitive"
 for(let i=0;i<s1.length;i++)
 console.log(s1.charAt(i));

 console.log(s1.charCodeAt(3));

 console.log(s1.concat(" Company"));

 console.log(s1.indexOf(2));

 s2="    Hello Everyone    " 
 console.log(s2.trim());
 console.log(s2.trimStart());
 console.log(s2.trimEnd());

 s3="abcdefgh"
 console.log(s3.repeat(2));

 console.log(s3.replace('c','d'));

 s4="Pune Mumbai Nagpur Satara";
 console.log(s4.split(" "));
 console.log(s4.split("a"));


 let text = "Hello world, welcome to the universe.";
 console.log(text.includes("world"));
 console.log(text.includes("p"));
 console.log(text.includes("world", 12));
 console.log(text.startsWith("Hello"));
 console.log(text.endsWith("universe"));


let a = "Thinkitive";
let b = "Company";
let s5 = `Welcome to ${a}, ${b}!`;
console.log(s5);

console.log(s5.slice(2));
console.log(s5.slice(2,5));
console.log(s5.substring(2));

// function padFirst(inputString, targetLength, padString = ' ') {
//     const paddingLength = Math.max(0, targetLength - inputString.length);
//     const padding = padString.repeat(paddingLength).slice(0, paddingLength);
//     return padding + inputString;
// }

// console.log(padFirst(s5, 10, '-')); 
// console.log(padFirst(s5, 10));       
