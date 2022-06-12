let addBtn=document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click",addNote)
let cont=document.querySelector(".container")
let nav=document.querySelector('nav')
let mode=document.getElementById("mode")

function addNote(){
    let notes=localStorage.getItem("New note");
    let addTitle=document.getElementById("addTitle");
    let addTxt=document.getElementById("addTxt");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("New note",JSON.stringify(notesObj))
    showNotes();
    addTxt.value=""
    addTitle.value=""
}
function showNotes(){
    let notes=localStorage.getItem("New note");
    let notesCon=document.getElementById('notes-container')
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let newnote="";
    notesObj.forEach((element,index)=>{
        newnote+=`<div class="card">
        <div class="title">${element.title}</div>
        <p class="notetxt">${element.text}</p>
        <button  id=${index} onclick="deletenode(this.id)" class="deletenote">Delete</button>
      </div>`
    })
    if(notesObj.length!=0){
        notesCon.innerHTML=newnote;
    }
    else{
        notesCon.innerHTML=`Nothing to show, add notes which you want to be displayed`
    }

}
function deletenode(index){
    let notes=localStorage.getItem("New note")
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("New note",JSON.stringify(notesObj))
    showNotes();  
}

let search=document.getElementById("searchTxt");
search.addEventListener("input",()=>{
   let inputVal=search.value;
   let noteCard=document.getElementsByClassName('card');
   Array.from(noteCard).forEach((element)=>{
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
   if(cardTxt.includes(inputVal)){
    element.style.display="block"
   }
   else{
    element.style.display="none"
   }
   })
})

let modeBtn=document.getElementById('mode');
modeBtn.addEventListener('click',()=>{
    if(modeBtn.innerText=="Light Mode"){
        modeBtn.innerText="Dark Mode";
        document.body.style.background="linear-gradient(to right, #8e9eab, #eef2f3)"
        document.body.style.color="black"
        addTitle.style.color="black"
        addTxt.style.color="black"
        nav.style.backgroundColor="rgb(65, 161, 140)"
        mode.style.borderColor="white"
        
    }
    else if(modeBtn.innerText=="Dark Mode"){
        modeBtn.innerText="Light Mode"
        document.body.style.background="linear-gradient(to left , #000000, #434343)"
        document.body.style.color="white" 
         addTitle.style.color="white"
        addTxt.style.color="white"
        nav.style.backgroundColor="rgb(32, 31, 31)"
        mode.style.borderColor="rgb(65, 161, 140)"
    }
})