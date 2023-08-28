const addUserBtn = document.getElementById('addUser');
const btnText = addUserBtn.innerText;
const usernameTextField = document.getElementById('username');
// console.log(usernameTextField);
const recordsDisplay = document.getElementById('records');
let userArray = [];
let edit_id = null;

let objStr = localStorage.getItem('users');

if (objStr != null) {
   userArray = JSON.parse(objStr);
}

DisplayInfo();
addUserBtn.onclick = () => {
   //get user's name from text field
   const name = usernameTextField.value;
   console.log(name);

   if (edit_id != null) {
      //edit action
      userArray.splice(edit_id, 1, {
         'name': name
      });
      edit_id = null;
   } else {
      //insert action
      userArray.push({
         'name': name
      });
   }

   SaveInfo(userArray);
   usernameTextField.value = '';
   addUserBtn.innerText = btnText;
}

// store user's name in local storage
function SaveInfo(userArray) {
   let str = JSON.stringify(userArray);
   localStorage.setItem('users', str);
   DisplayInfo();
}

// display user's name
function DisplayInfo() {
   let statement = '';
   userArray.map((user, i) => {
      statement += `<tr>
           <th scope="row">${i+1}</th>
           <td>${user.name}</td>
           <td><img src="edit.png" onclick='EditInfo(${i})'></i> <i class="btn text-danger fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
         </tr>`;
   });
   recordsDisplay.innerHTML = statement;
}

// edit user's name
function EditInfo(id) {
   edit_id = id;
   usernameTextField.value = userArray[id].name;
   addUserBtn.innerText = 'Save Changes';
}

//delete user's name
function DeleteInfo(id) {
   userArray.splice(id, 1);
   SaveInfo(userArray);

}