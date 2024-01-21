// // let a = new Map;

// // a.set("1","something")



// // a.set("2","123")

// // let b =  a.get("1")    

// // console.log(a);  

// // console.log(b);

// // const c = a.has("2")

// // console.log(c);



// // a.delete("1")

// // const d = a.size


// // console.log(d);


// // const w = val => {
// //     let map = new Map();

// //     ["mn","Th","W","To","Fr","St","Sn"].forEach((el, i) => {
// //       map.set(i, el)
// //     });

// //     return map.get(Number(val))
// // }

// // console.log(w(1));

// // console.log(w(6));

// const set = new Set();

// const users = [`Max`,`Max`,`Umid`,`Umid`,`Diyor`,`Diyor`]

// users.forEach(item => {
//   set.add(item)
// })

console.log(set);

console.log(set.has("Max"));


console.log(set.entries());

localStorage.setItem("local","Hello world by me")

localStorage.setItem("localob",JSON.stringify({name:"Azim"}))

const info = localStorage.getItem("localob")

console.log(JSON.parse(info));

localStorage.removeItem("local")