// function SaveLead(){
//     console.log("Button Clicked! without AddEventListener")  /*THIS IS THE OLD METHOD OF AND WE REMOVE NOW ONCLICK IN HTML*/
// }

// let myyleads ='["www.awesomlead.com"]'   //its a string

// myyleads=JSON.parse(myyleads)            //it changes string to array
// myyleads.push("www.newwebsite.com")      //it pushes another array
// myyleads=JSON.stringify(myyleads)        //it again changes array to string
// console.log(typeof myyleads)





// 1.SAVE KEY PAIR IN LOCAL STORAGE
// 2.REFRESH THE PAGE .GET THE VALUE AND LOG IT TO THE CONSOLE
// 3.CLEAR LOCALSTORAGE

// HINTS:
// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStorage.clear()
// PS : both keys and values to be string 

// localStorage.setItem("key","jeevan kumar korra")
// let myname = localStorage.getItem("key")
// console.log(myname)
// localStorage.clear()

// localStorage.setItem("myleadse","www.google.com")
// localStorage.getItem(myleadse)
// console.log(myleads)

let myleads = []
let oldleads=[]
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


// console.log(ulEl)
tabBtn.addEventListener("click",function(){
chrome.tabs.query({active:true , currentWindow : true},function(tabs){
myleads.push(tabs[0].url)
localStorage.setItem("myleads", JSON.stringify(myleads))
render(myleads)
})
}
)


inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    // clear out the input field
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))

    render(myleads)
    console.log(localStorage.getItem("myleads"))
})


let lendsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
//  console.log(lendsfromlocalstorage)

if (lendsfromlocalstorage){
    myleads=lendsfromlocalstorage
    render(myleads)
}
// let j = 0
deleteBtn.addEventListener("click",function() {
    // for( j=lendsfromlocalstorage.length;j>=0 ; j-- ){
    localStorage.clear(myleads)
    myleads=[]
    // }
   
    render(myleads)
    })
    
    
    // for( i=0 ;i<myleads.length ;i++){
    //     // ulEl.innerHTML += "<li>"+myleads[i]+"</li>"


    //     // create element 
    //     // set text content 
    //     // appent to ul 

    //     const lic = document.createElement("li")
    //     lic.textContent = myleads[i]
    //     ulEl.append(lic)
    // }


    /*******************************ANOTHER METHOD **********************/
    function render(xyz) {
        let listitems = ""
        for (i = 0; i < xyz.length; i++) {
            // target =' _blank' for opening link in a new tab 
            // listitems+= "<li> <a target='_blank' href='"+myleads[i]+"'>"+myleads[i]+"</a></li>"
            /* * * * * * * * * * * * * * * * * * * * * * * * * * * * *  "" ---->${}  * * * * */
            listitems += `<li>
     <a target='_blank' href="${xyz[i]}">           
     ${xyz[i]}</a>
     </li>`
        }
        ulEl.innerHTML = listitems
    }
/****************************************************************** */