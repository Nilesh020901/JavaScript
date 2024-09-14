const addBtn = document.querySelector('.add-btn')
const modelCont = document.querySelector('.modal-cont')
const mainCont = document.querySelector('.main-cont')
const textArea = document.querySelector('.textarea-cont')
const allPriColor = document.querySelectorAll('.priority-color')
let modalPriorityColor = 'lightpink'


let unLockClass = 'fa-lock-open'
let lockClass = 'fa-lock'


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
        createTicket(task, modalPriorityColor);
    }
});

function createTicket(TicketTask, ticketcolor) {
    let id = shortid()
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class', 'ticket-cont')
    ticketCont.innerHTML = `<div class="ticket-cont">
            <div class="ticket-color ${ticketcolor}"></div>
            <div class="ticket-id">${id}</div>
            <div class="ticket-task">${TicketTask}</div>
            <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div></div>`;

    mainCont.appendChild(ticketCont)
    modelCont.style.display = 'none'

    handleLock(ticketCont)
}

allPriColor.forEach(function(colorElem){
    colorElem.addEventListener('click', function(){
        allPriColor.forEach(function(PriorityColorElements){
            PriorityColorElements.classList.remove('active')
        });

        colorElem.classList.add('active')
        let colorSelected = colorElem.classList[1]
        modalPriorityColor = colorSelected
    });
});

function handleLock(ticket){
    let ticketLockElem = ticket.querySelector('.ticket-lock')
    let ticketLockIcon = ticketLockElem.children[0]
    
    ticketLockIcon.addEventListener('click', function(){
        if(ticketLockIcon.classList.contains(lockClass)){
            ticketLockIcon.classList.remove(lockClass)
            ticketLockIcon.classList.add(unLockClass)
        }
        else{
            ticketLockIcon.classList.remove(unLockClass)
            ticketLockIcon.classList.add(lockClass)
        }
    })
}