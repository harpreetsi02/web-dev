// try{
//     let num = x;
// } catch(err){
//     console.log("Error: ", err.message);
// }

// try{
//     let a = 10, b = 0;
//     if(b === 0) throw new Error("Cannot divide by Zero");
// } catch(err){
//     console.log(err.message);
// }

// try{
//     let arr = [1,2,3];
//     if(!arr[5]) throw new Error("Index Out of Range");
// } catch(err){
//     console.log(err.message);
// }

// try{
//     undefinedFunction();
// } catch(err){
//     console.log("Caught: ", err.message);
// }

// <----- asking question ----->
// try{
//     console.log("inside try");
//     throw new Error("Opps!");
// } catch(err) {
//     console.log("Error handle");
// } finally{
//     console.log("Finally block always run");
// }
// function square(num){
//     try{
//         if(typeof num !== "number") throw new Error ("Not a number");
//         return num * num;
//     } catch(err){
//         return err.message
//     }
// }
// console.log(square(6));

// try{
//     try{
//         throw new Error("Inner Error");
//     } catch(inner) {
//         console.log("caught inner: ", inner.message);
//         throw new Error ("Outer Error")
//     }
// } catch(outer) {
//     console.log("caught outer: ", outer.message);
// }

// try{
//     null.f;
//     throw new Error ("This is not a valid properties");
// } catch(err) {
//     console.log("typeError Caught, ", err.message);
// }

// try{
//     let num = 1;
//     num.toPrecision(500);
// } catch(err) {
//     console.log("Range Error: ", err.message);
// }

try {
    let num = 1; 
    let result = num.toPrecision(5);  // precision = 100
    console.log("Result with precision 100: ", result);
} catch(err) {
    console.log("Range Error: ", err.message);
}
