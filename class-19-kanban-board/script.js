const addBtn = document.querySelector('.add-btn')
const modelCont = document.querySelector('.modal-cont')
const mainCont = document.querySelector('.main-cont')
const textArea = document.querySelector('.textarea-cont')
const allPriColor = document.querySelectorAll('.priority-color')

//pop-up for create ticket

modelCont.style.display = 'none'
let addTaskFlag = false

addBtn.addEventListener('click', function () {
    addTaskFlag = !addTaskFlag

    if (addTaskFlag === true) {
        modelCont.style.display = 'flex'
    }
    else {
        modelCont.style.display = 'none'
    }
});

// Genrating the ticket

modelCont.addEventListener('keydown', function (e) {
    let key = e.key

    if (key === 'Shift') {
        let task = textArea.value
        console.log('task')
        createTicket(task)
    }
});

function createTicket(TicketTask, ticketcolor) {
    let id = shortid()
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')
    ticketCont.innerHTML = `<div class="ticket-cont">
            <div class="ticket-color lightblue"></div>
            <div class="ticket-id">${id}</div>
            <div class="ticket-task">${TicketTask}</div>
            <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div></div>`;

    mainCont.appendChild(ticketCont)
    modelCont.style.display = 'none'
}

allPriColor.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
        allPriColor.forEach(function(PriorityColorElements){
            PriorityColorElements.classList.remove('active')
        });

        colorElem.classList.add('active')
        let colorSelected = colorElem.classList[1]
        console.log(colorSelected)
    });
});