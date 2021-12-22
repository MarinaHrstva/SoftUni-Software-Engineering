function areaOfFigures(arg1, arg2, arg3) {
    let type = arg1;
    if (type === "square"){
        let sideA = Number(arg2);
        let area = sideA * sideA;
        console.log(area.toFixed(3))
    } else if(type === "rectangle"){
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if(type === "circle"){
        let r = Number(arg2);
        let area = Math.PI * r * r;
        console.log(area.toFixed(3));
    } else{
        let sideA = Number(arg2);
        let h = Number(arg3);
        let area = sideA * h / 2;
        console.log(area.toFixed(3));
    }
}
areaOfFigures("circle","6")