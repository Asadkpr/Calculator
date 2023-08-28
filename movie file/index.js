

// document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("mediaForm");

let existData = JSON.parse(localStorage.getItem("mediaData")) || [];
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
const type = document.getElementById("type").value;
const title = document.getElementById("title").value;
const release = document.getElementById("Release").value;
const rating = document.getElementById("Rating").value;
const genre = document.getElementById("Genre").value;
let title_error = document.getElementById('titleError');
let isValid = true;

if(title.trim() === '') {
  title_error.innerHTML = 'please fill this feild';
  isValid = false;
}else{
  title_error.innerHTML = '';
}

document.getElementById('title').addEventListener('input',()=>{
  title_error.innerHTML = '';
});


if(!isValid){
event.preventDefault();
}

const mediaData = {
    type: type,
    title: title,
    release: release,
    rating: rating,
    genre: genre,
};
    existData.push(mediaData);
    localStorage.setItem("mediaData", JSON.stringify(existData));

    form.reset();
    
    let table = document.getElementById("dataTable")

    let tableRows = existData.map((val,i) => {
        return (`
    <tr>
    <td>${val.i}</td>
    <td>${val.type}</td>
    <td>${val.title}</td>
    <td>${val.release}</td>
    <td>${val.rating}</td>
    <td>${val.genre}</td>
    </tr>`)
    }).join(" ");
    // console.log(existData);
   
    table.innerHTML = tableHeaders + tableRows;
});
// existData = JSON.parse(localStorage.getItem("mediaData")) || [];
function haldeOnClick(value) {
    // console.log(existData, "movi button clicked");
    let myData = null;
    const tableList = document.getElementById('list');
    const ShowTable = document.getElementById('show');
    const tableHead = document.getElementById('tableHead');

     if (value == 'movie') {
       myData =  existData.filter(item=> item.type == 'movie');
      tableList.innerHTML = 'Movie List';
      ShowTable.innerHTML = 'Show List';
    
     }
     if (value == 'Drama') {
        myData =  existData.filter(item=> item.type == 'Drama'); 
        tableList.innerHTML = 'Drama list';
        ShowTable.innerHTML = 'Show List';
      }
      if (value == 'game') {
        myData =  existData.filter(item=> item.type == 'game')
        tableList.innerHTML = 'Game list';
        ShowTable.innerHTML = 'Show List';
      }
      if (value == 'song') {
        myData =  existData.filter(item=> item.type == 'song')
        tableList.innerHTML = 'Song list';
        ShowTable.innerHTML = 'Show List';
      }
    console.log(myData)
    let newArr = myData.map((val,i) => {
      
    return (`
             <tr>
             <td>${i+1}</td>
               <td>${val.type}</td>
                <td>${val.title}</td>
                <td>${val.release}</td>
                <td>${val.rating}</td>
                <td>${val.genre}</td>
                </tr>`)
                
    }).join(" ");
    // console.log(existData);
    let table = document.getElementById("dataTable")
    console.log(table)
    table.innerHTML = newArr
    
  
}
    // });
   