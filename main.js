// selectors
const title = document.getElementById('title');
const price = document.getElementById('price');
const submit = document.getElementById('submit');
const tbody = document.getElementById('tbody');

// vars
let phones = JSON.parse(localStorage.getItem('phones')) || [];
let tmpIndex;
let mood = 'create';


//functions create
submit.onclick = () => {
    let newPhone = {
        title: title.value,
        price: price.value
    };
   
    if (mood === 'create') {
        phones.push(newPhone);
    } else {
        phones[tmpIndex] = newPhone;
        mood = 'create';
        submit.innerHTML = 'create';
    }
localStorage.setItem('phones', JSON.stringify(phones));
   
     clearInputes();
    showData();
  
}
  function clearInputes() {
        title.value = '';
        price.value = '';
    }
   

    //show
    function showData() {
        let table = '';
      phones.forEach((phone, index) => {
        table += `<tr>
        
                    <td>${index + 1}</td>
                    <td>${phone.title}</td>
                    <td>${phone.price}</td>
                    <td>
                         <div class="icons">
                            <svg  class="update-btn" data-index="${index}" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="M3.995 17.207V19.5a.5.5 0 0 0 .5.5h2.298a.5.5 0 0 0 .353-.146l9.448-9.448l-3-3l-9.452 9.448a.5.5 0 0 0-.147.353m10.837-11.04l3 3l1.46-1.46a1 1 0 0 0 0-1.414l-1.585-1.586a1 1 0 0 0-1.414 0z" />
</svg>

<svg class="delete-btn" data-index="${index}" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 1024 1024">
	<path d="M0 0h1024v1024H0z" fill="none" />
	<path fill="currentColor" d="M352 192V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64zm64 0h192v-64H416zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32m192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32" />
</svg>
                         </div>
                    </td>
                </tr>`;
      });
      tbody.innerHTML = table;
      //events
      let deleteBtns = document.querySelectorAll('.delete-btn');
      deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let index = e.currentTarget.getAttribute('data-index');
            deleteData(index);
        });
      });
      let updateBtns = document.querySelectorAll('.update-btn');
      updateBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let index = e.currentTarget.getAttribute('data-index');
            updateData(index);
        });
      });

    }
showData();

//function delete
function deleteData(index) {
    phones.splice (index, 1);
    localStorage.setItem('phones', JSON.stringify(phones));
    showData();
}
//events
submit.addEventListener('click', (e) => {
   
    createData();
});
//update
function updateData(index) {
    title.value = phones[index].title;
    price.value = phones[index].price;
    submit.innerHTML = 'update';
    mood = 'update';
    tmp = index;
}
 showData();
