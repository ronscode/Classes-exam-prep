class StringBuilder {
  constructor(string) { // "hello"
  if (typeof(string) === "string" && string != undefined) {
    this.stringArray = string.split("")
  } else {
    this.stringArray = []
  }
  }
  append(appendString) { // "User, "
    let tempArr = appendString.split("");
   return this.stringArray = this.stringArray.concat(tempArr);

  }
  prepend(prependString) {
    let tempArr = prependString.split(""); // whatever string value you get, split it into an array ["U", "s", "e", "r"...]
    let reversedArr = []
   // console.log("tempArr", tempArr)
    //console.log("the tempArr ", tempArr.concat(this.stringArray))
   return this.stringArray = tempArr.concat(this.stringArray)
  }
  insertAt(insertAtString,index){
    let tempArr = insertAtString.split("");
    this.stringArray.splice(index,0,...tempArr);
    return this.stringArray;
}
  remove(startIndex, length) {
    return this.stringArray.splice(startIndex, length)
  }
  allToUpper() {
    return this.stringArray.join("").toUpperCase().split("")
  }
  allToLower() {
    return this.stringArray.join("").toLowerCase().split("")
  }
  toUpper(index) {
    return this.stringArray[index] = this.stringArray[index].toUpperCase();
  }
  toLower(index) {
   return this.stringArray[index] = this.stringArray[index].toLowerCase();
  }
  toString() {
    return this.stringArray.join("");
  }
  static isString(string) {
    try {
        if (typeof string == "string") {
            return true;
        } else {
            throw "TypeError:'Argument must be string'";
        }
    } catch (error) {
        console.log(error);
    }
}
}


let makeANewObjectString = new StringBuilder("hello"); // new = new object
//console.log("Our object from class is ", makeANewObjectString)
makeANewObjectString.append(", there")

makeANewObjectString.prepend("User, ") // plz split me into array thnx

makeANewObjectString.insertAt('woop',5);
makeANewObjectString.remove(6,3);
//console.log("uppercase ", makeANewObjectString.allToUpper())

makeANewObjectString.allToLower();
console.log(makeANewObjectString.toUpper(0));
console.log(makeANewObjectString.toLower(0));
console.log(makeANewObjectString.toString())


//console.log(makeANewObjectString.stringArray.join(""))


/* String Builder
Write a class that holds, validates and manipulates characters (strings with length 1) in an array. An instance of the class should support the following operations:
● Can be instantiated with a passed in string argument or without anything
● append(string); -convertsthepassedinstringargumenttoanarrayandaddsittotheendofthestorage
● prepend(string); -convertsthepassedinstringargumenttoanarrayandaddsittothebeginningofthe
storage
● insertAt(string,index)-convertsthepassedinstringargumenttoanarrayandaddsitatthegiven
index (there is no need to check if the index is in range)
● remove(startIndex,length)-removeselementsfromthestorage,startingatthegivenindex
(inclusive), length number of characters (there is no need to check if the index is in range)
● allToUpper()–changesallcharactersintheclassinstancetouppercase
● allToLower()-changesallcharactersintheclassinstancetolowercase
● toUpper(index)–Changesacharacterataspecificindextouppercase
● toLower(index)-Changesacharacterataspecificindextolowercase
● toString()-returnsastringwithallelementsjoinedbyanemptystring
● All passed in arguments should be strings. If any of them are not, throws a type error with the following
message: "Argument must be a string" */