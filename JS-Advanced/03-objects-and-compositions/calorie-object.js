function calorieObject(array){
    let list={};

    for (let i = 0; i < array.length; i+=2) {
        let key=array[i];
        let prop=array[i+1]
        list[key]=prop
    }

    console.log(list);

}


calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])