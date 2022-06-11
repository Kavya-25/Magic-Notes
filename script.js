let addBtn=document.getElementById("addBtn");
showNotes();
addBtn.addEventListener("click",addNote)

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

  