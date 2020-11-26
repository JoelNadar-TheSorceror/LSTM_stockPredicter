values = [];

function fun(){
    one = document.getElementById("one").value;
    two = document.getElementById("two").value;

    values.push(one.concat(two));
    console.log(values[0]);
    values.push(1+2);
    console.log(values[1]);
    values.push(1188*2);
    console.log(values[2]);
    values.push(85774/228);
    console.log(values[3]);

    document.getElementById("output").innerHTML = values;
    
}