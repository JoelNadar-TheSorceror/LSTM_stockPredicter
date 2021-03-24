var endString = ``;

let my_data = [
  { "name": "Java", "atribs": "High-Level,Object-Oriented,Full-Stack,Compiled,Open-Source,High-Pay,Software-Engineering,Android,Static,Platform-Independant,Architecture-Neutral" },
  { "name": "JavaScript", "atribs": "High-Level,Class-Based,Function-Oriented,Scripting-Language,Interpreted,Open-Source,Freelancing,Web-Development,General-Purpose,Dynamic,Architecture-Neutral,Platform-Dependant,Begginer-Friendly" },
  { "name": "Python", "atribs": "High-Level,Class-Based,Procedure-Oriented,Full-Stack,Interpreted,Open-Source,High-Pay,DataScience,Artificial-Intelligence,General-Purpose,Dynamic,Platform-Independant,Begginer-Friendly" },
  { "name": "C", "atribs": "Middle-Level,Procedure-Oriented,Full-Stack,Compiled,Open-Source,Mid-Pay,System-Engineering,Static,Platform-Dependant,Architecture-Neutral" },
  { "name": "Golang", "atribs": "High-Level,Multi-Paradigm,Full-Stack,Compiled,Open-Source,High-Pay,Server-Engineering,General-Purpose,Static,Platform-Independant,Architecture-Neutral,Begginer-Friendly" },
  { "name": "Perl", "atribs": "High-Level,Procedure-Oriented,Interpreted,Freelancing,Open-Source,General-Purpose,Dynamic,Platform-Independant,Mid-Pay,Text-Manipulation" },
  { "name": "Ruby", "atribs": "High-Level,Multi-Paradigm,Web-Development,Procedure-Oriented,Compiled,Open-Source,High-Pay,Full-Stack,General-Purpose,Dynamic,Platform-Dependant" },
  { "name": "Swift", "atribs": "High-Level,Multi-Paradigm,Software-Engineering,iOS,MacOS,Object-Oriented,Compiled,Highest-Pay,Full-Stack,Dynamic,Platform-Dependant,Architecture-Neutral,Begginer-Friendly" },
  { "name": "Scala", "atribs": "High-Level,Multi-Paradigm,Artificial-Intelligence,Web-Development,Interpreted,Versatile,High-Pay,Full-Stack,Interpreted,Platform-Independant,Architecture-Neutral" },
  { "name": "PHP", "atribs": "High-Level,Server-Engineering,Web-Development,Object-Oriented,Compiled,Mid-Pay,Full-Stack,Dynamic,Platform-Independant" },
  { "name": "C++", "atribs": "Middle-Level,Multi-Paradigm,Full-Stack,Compiled,Open-Source,High-Pay,System-Engineering,Static,Platform-Dependant,Architecture-Neutral" },
  { "name": "R", "atribs": "High-Level,Procedure-Oriented,Full-Stack,Interpreted,Open-Source,High-Pay,DataScience,Dynamic,Platform-Independant,Architecture-Neutral" },
  { "name": "Objective-C", "atribs": "High-Level,Multi-Paradigm,Software-Engineering,iOS,MacOS,Compiled,High-Pay,Full-Stack,Static,Open-Source,Platform-Dependant,Architecture-Neutral" },
  { "name": "SQL", "atribs": "High-Level,Multi-Paradigm,Data-handling,Interpreted,Mid-Pay,Full-Stack,Platform-Dependant,Open-Source" },
  { "name": "MATLAB", "atribs": "High-Level,Multi-Paradigm,Artificial-Intelligence,Interpreted,Dynamic,Architecture-Neutral,High-Pay" },
  { "name": "Rust", "atribs": "High-Level,Multi-Paradigm,Software-Engineering,Open-Source,Compiled,Static,Platform-Dependant,Architecture-Neutral,High-Pay,Begginer-Friendly" },
  { "name": "Kotlin", "atribs": "High-Level,Multi-Paradigm,Full-Stack,Compiled,High-Pay,Software-Engineering,Android,Static,Platform-Independant,Architecture-Neutral" },
  { "name": "Julia", "atribs": "High-Level,Full-Stack,Compiled,Mid-Pay,DataScience,Dynamic,Platform-Independant,Architecture-Neutral" }
];

let input = [];
let end_Array = new Set([]);

function inputChange(elementID) {
  end_Array.clear();
  if (!input.includes(String(elementID))) {
    input.push(String(elementID));
    document.getElementById(elementID).classList.add("selected");
  } else {
    input.splice(input.indexOf(elementID), 1);
    document.getElementById(elementID).classList.remove("selected");
  }
  for (var i = 0; i < my_data.length; i++) {
    var object = my_data[i];
    var statistics_my = object.atribs.split(",");
    for (j = 0; j < statistics_my.length; j++) {
      for (k = 0; k < input.length; k++) {
        if (input.every(val => statistics_my.includes(val))) {
          end_Array.add(object);
        }
        continue;
      }
    }
  }
  endString = ``;

  for (var i = 0; i < end_Array.size; i++) {
    var currentOBJ = Array.from(end_Array)[i];
    endString += `<div><h1 class='lang-header'>${currentOBJ.name}</h1><p>${currentOBJ.atribs}</p><hr></div>`;
  }
  
  if(endString != ``){
    document.getElementById("result-holder").innerHTML = endString;
  }
  else{document.getElementById("result-holder").innerHTML = "<div><h1 class='lang-header'>No Data Available</h1><hr></div>"}
}
