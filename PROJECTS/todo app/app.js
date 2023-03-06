const inputTask = document.querySelector('#inputTask');
let soundEffect = document.getElementById('sound');
let relaxingSound = document.getElementById('relax');
let allCompletedTask = document.getElementById('allCompletedTask');
let completedNumber = document.getElementById('completedNumber');
let rainy = document.getElementById('playSound');
let close = document.querySelector('.close');
let open = document.querySelector('.completed');

soundEffect.volume = .05;
relaxingSound.volume = .5;
open.addEventListener('click', () => {
    document.querySelector('.taskC').classList.add('open')
})
close.addEventListener('click', () => {
    document.querySelector('.taskC').classList.add('hide')
    document.querySelector('.taskC').classList.remove('open')
})
rainy.addEventListener('click', () => {
    if (!rainy.classList.contains('play')) {
        rainy.classList.add("play")
        rainy.src = "./pause-solid.svg"
        relaxingSound.src = "./relax.mp3";
        relaxingSound.loop = true
        relaxingSound.play()
        console.log("Playing...");
    }
    else {
        rainy.classList.remove("play")
        rainy.src = "./play-solid.svg"
        relaxingSound.src = "";
        relaxingSound.pause()
        console.log("Paused");
    }
})


funcy();
inputTask.addEventListener('click', () => {
    let addNote = document.getElementById('addNote');
    let localData = localStorage.getItem('taskSame');

    localData == null ? alltask = [] : alltask = JSON.parse(localData);

    if (addNote.value) {
        alltask.push(addNote.value);
        soundEffect.src = "./ting.mp3"
        soundEffect.play()
    }
    localStorage.setItem('taskSame', JSON.stringify(alltask));
    addNote.value = "";
    funcy();
});



function funcy() {
    let localData = localStorage.getItem('taskSame');
    let complTa = localStorage.getItem('completedTask');
    let completedTask = localStorage.getItem('completedTask');

    if (complTa == null) {
        completedNumber.innerText = 0;
        completedNumber.style.color = "red"
        complete = [];
    }
    else {
        complete = JSON.parse(complTa);
        completedNumber.innerText = JSON.parse(completedTask).length;
    }

    localData == null ? alltask = [] : alltask = JSON.parse(localData);

    let cpTask = JSON.parse(completedTask)
    let html = '';
    let comp = '';
    alltask.forEach((e, index) => {
        html += `
        <div id="tskbox">
        <div class="col d-flex justify-content-between align-items-center todoCard my-2 mx-3 p-4">
            <h5 class="card-number">${index + 1}</h5>
            <p class="card-text ncTask editTask">${e}</p>
            <div class="d-flex gap">
                <i id="${index}" onclick="editTask(this.id)" class="btn btn-outline-success fa fa-pen d-flex align-items-center"></i>
                <i id="${index}" onclick="deleteTask(this.id)" class="btn btn-outline-danger fa fa-close d-flex align-items-center"></i>
                <i id="${index}" onclick="completedTaskFunc(this.id)" class="btn btn-outline-success fa fa-check d-flex align-items-center"></i>
            </div>
        </div>
        </div>
        `
    });

    let pushNote = document.getElementById('pushNote');

    alltask.length != 0 ? pushNote.innerHTML = html : pushNote.innerHTML = `List is empty📃`;

    if (cpTask) {
        cpTask.forEach((e, index) => {
            comp += `
            <div id="tskbox">
        <div class="col d-flex justify-content-between todoCard my-2 mx-3 p-4 py-5">
        <h5 class="card-number mb-0 mr-2">${index + 1}</h5>
        <p class="card-text mb-0">${e}</p>
        <i id="${index}" onclick="deleteCoomplete(this.id)" class="btn btn-outline-danger fa fa-close d-flex align-items-center"></i>
        </div>
        </div>
        `
        });
    }

    let compTask = document.getElementById('pushComplete');

    cpTask != 0 ? compTask.innerHTML = comp : compTask.innerHTML = "<h3 style='color:blue'>Ops, No task Completed📃</h3>";

}

function deleteTask(index) {
    let localData = localStorage.getItem('taskSame');
    if (localData == null) {
        alltask = [];
    }
    else {
        alltask = JSON.parse(localData);
    }
    alltask.splice(index, 1);
    soundEffect.src = "./delete.mp3"
    soundEffect.play()
    localStorage.setItem('taskSame', JSON.stringify(alltask));
    funcy();
};

function completedTaskFunc(index) {
    let localData = localStorage.getItem('taskSame');
    let complTa = localStorage.getItem('completedTask');
    if (localData == null) {
        alltask = [];
    }
    else {
        alltask = JSON.parse(localData);
    }
    if (complTa == null) {
        complete = [];
    }
    else {
        complTa = JSON.parse(complTa);
    }
    if (complTa) {
        complete.push(alltask.splice(index, 1))
        soundEffect.src = "./delete.mp3"
        soundEffect.play()

    }
    localStorage.setItem('taskSame', JSON.stringify(alltask));
    localStorage.setItem('completedTask', JSON.stringify(complete));
    funcy();
};
function deleteCoomplete(index) {
    let complTa = localStorage.getItem('completedTask');
    if (complTa == null) {
        complete = [];
    }
    else {
        complete = JSON.parse(complTa);
    }
    complete.splice(index, 1);
    soundEffect.src = "./delete.mp3"
    soundEffect.play()
    localStorage.setItem('completedTask', JSON.stringify(complete));
    funcy();
};

function editTask(index) {
    let edit = prompt("Edit your task", alltask[index]);
    let editTask = document.getElementsByClassName('editTask')[index];
    editTask.innerHTML = edit;
    alltask.splice(index, 1, edit);
    localStorage.setItem('taskSame', JSON.stringify(alltask));
    funcy();
}