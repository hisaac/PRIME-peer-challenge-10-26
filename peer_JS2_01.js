/*
1. Start with the number 103 and set that equal to 'value'

2. Create condition logic to check if the value is great or equal to 102
2-1. If true, add 2 to 'value'
2-2. If false, subtract 18 from 'value'

3. Create a string that is set to 98, add it to 'value'

4. Create an array, loop through 'value' using charAt, set array[i] to each value

5. Remove the first and last values off the array

6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)

7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

******* SWITCH PROGRAMMERS *******

8. Add 'value' and the new variable created in Step 6 together and store them in 'value'

9. If the new value of 'value' is greater than 8596, set 'value' equal to 12. If not, check to see if it is equal to 1111, if it is, set 'value' equal to 2. 
If neither of these are true, set the value to 14.

10. Create a while loop that counts down from 4 and increments 'value' by 1.

11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there 
is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

12. Call the function.

13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.

14. Your answer should be a String value that equals 6. Is that what you got?
*/

//1
var value = 103;
console.log("value after step 1: ", value);

//2
if (value == 102) {
	value += 2;
} else {
	value -= 18;
}

console.log("value after step 2: ", value);

//3
var word = "98";
value += word;
console.log("value after step 3: ", value);
console.log("word after step 3: ", word);

//4
var array = [];
for(var i = 0; i < value.length; i++){
	array.push(value.charAt(i));
	}
console.log("array after step 4: ", array);
console.log("value after step 4: ", value);
console.log("word after step 4: ", word);
//5
array.shift();
array.pop();
console.log("array after step 5: ", array);
console.log("value after step 5: ", value);
console.log("word after step 5: ", word);

//6
var otherWord = "";
for(i=array.length - 1; i > 0; i--){
	otherWord += array[i];
}

console.log("otherWord after step 6: ", otherWord);
console.log("array after step 6: ", array);
console.log("value after step 6: ", value);
console.log("word after step 6: ", word);

//7
value = parseInt(value);
otherWord = parseInt(otherWord);
console.log("otherWord after step 7: ", otherWord);
console.log("array after step 7: ", array);
console.log("value after step 7: ", value);
console.log("word after step 7: ", word);

//8
value += otherWord;
console.log("value after step 8: ", value);

//9
if(value > 8596){
	value = 12;
	} else if(value == 1111){
	value = 2;
	} else {
	value = 14;
}
console.log("value after step 9: ",  value);

//10
i = 4;

while(i > 0){
	value++;
	i--;
}
console.log("value after step 10: ", value);

//11
function dropFirstLetter(val){
	val = val.toString();
	console.log("val = ", val);
	if(val.length > 1){
		val = val.substring(1, val.length);
		console.log("if statement ran");
	}
	return val;
}
console.log("value after step 11: ", value);

//12
value = dropFirstLetter(value);

//13
console.log("value after step 13: ", value);

//14
























