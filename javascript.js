let sidebar = document.querySelector('.sidebar');
let hide = document.querySelector('.hide');
let About = document.querySelector('.About');
let Work = document.querySelector('.Work');
let Info = document.querySelector('.Info');
let Contact = document.querySelector('.Contact');

let navigationAbout = document.querySelector('.navigation-about');
navigationAbout.onclick = function () {
    document.querySelector('.About').classList.remove('hide');

    document.querySelector('.Work').classList.add('hide');
    document.querySelector('.Info').classList.add('hide');
    document.querySelector('.Contact').classList.add('hide');
};


let navigationWork = document.querySelector('.navigation-work');
navigationWork.onclick = function () {
    document.querySelector('.Work').classList.remove('hide');

    document.querySelector('.About').classList.add('hide');
    document.querySelector('.Info').classList.add('hide');
    document.querySelector('.Contact').classList.add('hide');
};


let navigationInfo = document.querySelector('.navigation-info');
navigationInfo.onclick = function () {
    document.querySelector('.Info').classList.remove('hide');

    document.querySelector('.About').classList.add('hide');
    document.querySelector('.Work').classList.add('hide');
    document.querySelector('.Contact').classList.add('hide');
};


let navigationContact = document.querySelector('.navigation-contact');
navigationContact.onclick = function () {
    document.querySelector('.Contact').classList.remove('hide');

    document.querySelector('.About').classList.add('hide');
    document.querySelector('.Work').classList.add('hide');
    document.querySelector('.Info').classList.add('hide');
};