const $ = document
const deleteModal = $.querySelector(".deleteSec");
const editSec = $.querySelector(".editSec");
const editFirstName = $.querySelector(".edit-firstName")
const editLastName = $.querySelector(".edit-LastName")
const editAge = $.querySelector(".edit-age")
const editPassword = $.querySelector(".edit-password")
let userID = null;

editFormNumber.addEventListener("input", () => {
    if (editFormNumber.value < 1 || editFormNumber.value > 99) {
        editFormNumber.value = "";
    }
});

window.addEventListener("load", () => {
        // .catch(err => console.log(err))
        getAllUsers()
});

function getAllUsers(){
  
    fetch("https://leachmob-4f4fb-default-rtdb.firebaseio.com/users.json")
    .then(res => res.json())
    .then(data => {
      let usersData = Object.entries(data);
      users.style.display = 'flex'
      users.innerHTML = "";
      usersData.forEach(item => {
          console.log(item);
          if (item[1].userage <= 1 || item[1].userage >= 99) {
              item[1].userage = 18;
          }

          
          users.insertAdjacentHTML("beforeend", `
              <div class="user">
                  <div style='display: flex;'>
                      <div class="image__users">
                          <img class="profil" src="../Assets/noprofi.png" alt="noprofile">
                      </div>
                      <div class="userinfos">
                          <div class="nameAndAge">
                              <h3 class="usersname">${item[1].firstName} - ${item[1].lastName}</h3>
                              <div class="userages"><span class="userage">${item[1].userAge}</span></div>
                          </div>
                          <p class="password">${item[1].password}</p>
                      </div>
                  </div>
                  <div class="btns">
                      <button class="btndel" onclick="openDeleteModal('${item[0]}')">delete</button>
                      <button class="btnedt" onclick="openEditModal('${item[0]}')">edit</button>
                  </div>
              </div>
          `);
      })
  })
}

function openDeleteModal(id) {
    userID = id;
    console.log(userID);
    deleteModal.classList.add("visiblet");
}

function closeDeleteModal() {
    deleteModal.classList.remove("visiblet");
}

 function deleteUser() {
    fetch(`https://leachmob-4f4fb-default-rtdb.firebaseio.com/users/${userID}.json` , {
      method: 'DELETE', 
    }).then(res => {
        console.log(res);
      getAllUsers()
      closeDeleteModal();
    })

}

function openEditModal(id){
    userID = id

    editSec.classList.add('visiblet')
}
function closeEditModal(){
    editSec.classList.remove('visiblet')
}

function updateUser(){

    const userNewObj = {
        firstName: editFirstName.value.trim(),
        lastName: editLastName.value.trim(),
        userAge: editAge.value,
        password: editPassword.value.trim(),
    }

    fetch(`https://leachmob-4f4fb-default-rtdb.firebaseio.com/users/${userID}.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userNewObj)
    })
    .then(res => {
        console.log(res.status);
        closeEditModal()
        getAllUsers()
        emptyIpts()
    })

}

function emptyIpts(){
editFirstName.value = ''
editLastName.value = ''
editAge.value = ''
editPassword.value = ''
}