console.log("Post//Pre Increment");
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a);
console.log(b);
console.log(c);

console.log("Post Incrememnt");
var d = "hello";
var e = false;
d++;
e++;
console.log(d);
console.log(e);

console.log("String")
var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));

console.log("\nisNaN");
console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));
// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);

console.log("\nTrue//False");
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(!!0);
console.log(!!-0);
console.log(!!1);
console.log(!!-1);
console.log(!!0.1);
console.log(!!"hello");
console.log(!!"");
console.log(!!'');
console.log(!!"false");
console.log(!!"0");

console.log("\nStrings");
var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample + " Students");
console.log(sample.replace("Students", "Class"));
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));

console.log("\nScenarios");
var littleMermaidDays = 3;
var brotherBearDays = 5;
var herculesDays = 1;
console.log(3 * (littleMermaidDays + brotherBearDays + herculesDays));

var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
console.log((googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours));

var classNotFull = true;
var noScheduleConflict = true;
var canEnroll = false;
if(classNotFull && noScheduleConflict) {
    canEnroll = true;
}
console.log(canEnroll);

var offerValid = false;
var cartOver2 = true;
var offerNotExpired = true;
var premiumMember = false;
if(premiumMember && offerNotExpired) {
    offerValid = true;
} else if(premiumMember == false) {
    if(offerNotExpired && cartOver2) {
        offerValid = true;
    }
}
console.log(offerValid);

var username = 'codeup';
var password = 'notastrongpassword';
console.log(password.length >= 5);
console.log(password.replace(username, "") == password);
console.log(username.length <= 20);
console.log(username.trim() == username);
console.log(password.trim() == password);