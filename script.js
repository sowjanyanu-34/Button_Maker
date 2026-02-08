let backgroundcolor =document.getElementById("background-color");
let fontcolor = document.getElementById("font-color");
let fontsizeinput = document.getElementById("font-size")
let fontweightinput = document.getElementById("font-weight");
let paddinginput = document.getElementById("padding");
let borderradiusinput = document.getElementById("border-radius");
let customButtondesign = document.getElementById("customButton");
function applybuttonmaker(){
    let backgroundcolorvalue = backgroundcolor.value;
    let fontcolorvalue = fontcolor.value;
    let fontsizevalue = fontweightinput.value;
    let fontweightvalue = fontweightinput.value;
    let paddingvalue = paddinginput.value;
    let bordereradiusvalue = borderradiusinput.value;
    
    customButtondesign.style.backgroundColor = backgroundcolorvalue;
    customButtondesign.style.color = fontcolorvalue;
    customButtondesign.style.fontSize = fontsizevalue;
    customButtondesign.style.fontWeight = fontweightvalue;
    customButtondesign.style.padding = paddingvalue;
    customButtondesign.style.borderRadius = bordereradiusvalue;
    
}
