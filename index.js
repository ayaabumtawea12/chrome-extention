let savebtn=document.getElementById('input-btn');
const inputEl=document.getElementById('input-el');
const ulEl=document.getElementById('ul-el');
let deleteBtn=document.getElementById('delate-btn');
let tabBtn=document.getElementById('tab-btn');
const localst=JSON.parse(localStorage.getItem('myLeads'));
let myLeads=[];

if(localst){
    myLeads=localst;
    render(myLeads);
}

//const tabs=[
  //  {url: "https://www.linkedin.com/notifications/?filter=all"}

//]

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


function render(leads){ 
    let listItem=" ";
   for(let i=0;i<myLeads.length ;i++){
   listItem+=`<li><a target="_blank" href="${leads[i]}">${leads[i]}</a></li>`;
  }
  ulEl.innerHTML=listItem;
}

deleteBtn.addEventListener('dblclick',function(){
 localStorage.clear();
myLeads=[];
 render(myLeads);
});


savebtn.addEventListener('click',function(){
myLeads.push(inputEl.value);
inputEl.value=" ";
localStorage.setItem('myLeads',JSON.stringify(myLeads))
render(myLeads);
});