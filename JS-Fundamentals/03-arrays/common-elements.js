function commonElements(arr,arr2){

for (let element of arr) {
   for (const el of arr2) {
       if(element===el){
           console.log(el);
       }

   }
    
}

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)