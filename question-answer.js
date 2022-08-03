//13, 14//Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
// var tableItems = ['mobile', 'keyboard', 'mouse', 'sunglass'];
// console.log(tableItems.length);

//১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
// var numbers = [23, 43, 14, 16, 75, 57, 88];
// var number = numbers.indexOf(16);
// console.log(number);
// numbers[3] = 55;
// console.log(numbers);


//১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায়?
//ans: The indexOf() method returns -1 if the value is not found.


//১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
// var rollNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(rollNumber[5]);

//১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
// var age = [20, 30, 40, 50, 60];
// age[2] = 90;
// console.log(age);


//১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
// var weight = [23, 44, 65, 45, 66];
// var weightIndex = weight.indexOf(66);
// console.log(weightIndex);


// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
// The undefined property indicates that a variable has not been assigned a value, or not declared at all.

//২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// var className = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
// className.push('intermediate');
// console.log(className);
// className.pop();
// console.log(className);


//২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// var bankItem = ['money', 'golden', 'bronce', 'document', 'car']
// bankItem.unshift('diamond');
// // console.log(bankItem);
// bankItem.shift();
// console.log(bankItem);

//২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
// '> - greater sign' '< - smaller sign' ' == - equal sign' ' != - not equal sign' '<= - small or equal' '>= - greater or equal' '=== - equal value and equal type ' '!== - not equal value and not equal type ' '&& - and' '|| - or ';

//২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
// var money = 41000;
// if(money > 80000) {
//     console.log('mac kinbo!');
// }
// else if(money > 60000) {
//     console.log('gaming laptop kinbo!');
// }
// else if(money > 40000) {
//     console.log('lenovo yoga computer kinbo!');
// }
// else if(money > 20000) {
//     console.log('secondal computer kinbo!');
// }
// else {
//     console.log('mobile diya kosto kore kaj korte hobe!');
// }

//২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
// for(var i = 1; i <= 39; i++) {
//     console.log('আসকে আমার মন ভালো নেই!');
// }

//২৬. while লুপ কিভাবে কাজ করে 
// var i = 1;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

//২৭. for লুপ কিভাবে কাজ করে 
// for(var i = 0; i < 10; i++) {
//     console.log(i);
// }


//২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
//[infiniti cholte thakbe]
// var i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }


//২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// for(var i = 58; i <= 98; i++) {
//     console.log(i);
// }

//৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
// for(var i = 412; i <= 456; i = i + 2) {
//     console.log(i);
// }


//৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// for(var i = 581; i < 624 ; i += 2) {
//     console.log(i);
// }

//৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও
// var learningTopics = ['html', 'css', 'bootstrap', 'tailwind', 'JavaScript', 'react'];
// for(var i = 0; i < learningTopics.length; i++) {
//     learningTopic = learningTopics[i];
//     // learningTopics.pop();
//     // learningTopics[0] ='computer-skill';
//     learningTopics.pop();
//     learningTopics.push('react');
//     // learningTopics.unshift('computer-skill');
//     console.log(learningTopic);
// }

//৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
// var mobileNames = ['motorola', 'nokia', 'symphony', 'walton', 'huawei'];
// var i = 0;
// while(i < mobileNames.length) {
//     mobileName = mobileNames[i];
//     console.log(mobileName);
//     i++;
// }



//৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// for(var i = 30; i <= 86; i++) {
//     console.log(i);
//     if(i >= 44) {
//         break;
//     }
// }

//৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
var booksPrice = [180, 150, 200, 210, 300, 100, 120, 90, 450, 500, 270];
for(var i = 0; i <= booksPrice.length; i++) {
    bookPrice = booksPrice[i];
    console.log(bookPrice);
    if(i >= 200) {
        continue;
    }
}