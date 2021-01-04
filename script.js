const input = document.querySelector("#text");
const btn = document.querySelector("#btn");

const delbtn = document.createElement('button');


//on clicking button action will perform

btn.addEventListener('click', addlist);

function addlist(e) {
    var text = input.value;
    if (text == '') {
        alert("you must add something");
    }
    else {
        const notcompleted = document.querySelector('.notcompleted');

        const newli = document.createElement('li');

        

        delbtn.innerHTML = '<i class="fa fa-trash" ></i>';

        newli.textContent = input.value;
        input.value = '';                            

        notcompleted.appendChild(newli);
        newli.appendChild(delbtn);
    }
    delbtn.addEventListener('click', function(){
         const parent = this.parentNode;
         parent.remove();
    });
}


//this  function will allow us to check th clicked elements

list.onclick = function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked')
    }
};
