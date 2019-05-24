window.onload = function(){
  
    // setTimeout(() => {
    //     var part1 = document.getElementById('part1');
    //     var part2 = document.getElementById('part2');
    //     part1.style = 'display:none';
    //     part2.style = 'display:block';
    // }, 3000);
    
    
    
}
function change(i){
    var parti = document.getElementById('part'+i);
    var part = document.getElementsByClassName('part');
    var btn =  document.getElementsByClassName('btn');
    for(var j=0;j<4;j++){
        if(i == j){
            parti.style =  'display:block';
            btn[j].setAttribute('class','btn active');
        }else{
            part[j].style =  'display:none';
            btn[j].setAttribute('class','btn');
           
        }   
    }   
}

// function getClassName(obj,sName)      //-->obj是要获取元素的父级
// {                                     //-->sName是class名字
//     if(document.getElementsByClassName) 
//     {
//         return obj.getElementsByClassName('sName');
//     }
//     else
//     {      
//         var aTmp = obj.getElementsByTagName('*');
//         var aRes=[];
//         var arr =[];
 
//         for(var i=0;i<aTmp.length;i++)
//         {  
//             arr = aTmp[i].className.split(' ');
//             for (var j=0;j<arr.length;j++)
//             {
//                 if(arr[j] == sName)
//                 {
//                     aRes.push(aTmp[i]);
//                 }
//             }
//         }
//         return aRes;
//     }
// }

// var i = 1;

// setInterval(() => {
//     var imgObj = document.getElementById('banner');
//     imgObj.src = "./images/banner"+i+".png";
//     i++;
//     if(i>2){
//         i=1;
//     }
// }, 3000);

