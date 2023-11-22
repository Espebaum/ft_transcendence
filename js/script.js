const infoBtn = document.querySelector('.info-button');

const myInfo = document.querySelector('#info-container');

const changeNick = document.querySelector('#nick-change');

const myNick = document.querySelector('#info-nickname');

const nickForm = document.querySelector('#nickForm');

const input = document.querySelector('#nickForm input');

infoBtn.addEventListener('click', () => {
    myInfo.classList.toggle('hidden');
});

changeNick.addEventListener('click', () => {
    nickForm.classList.toggle('hidden');
});

function onNickChange(event) {
    event.preventDefault();
    const newNick = input.value;
    console.log(newNick);
}

nickForm.addEventListener('submit', onNickChange);
