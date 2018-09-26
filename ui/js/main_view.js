//import MDCRipple from '@material/ripple';
const {
    ipcRenderer
} = require("electron");
//const { MDCDialog } = require( "elect@material/dialogron" );
//const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));


document.querySelector('#close-button')
    .addEventListener('click', () => {
        var element = document.getElementById("alert-dialog");
        element.classList.add("mdc-dialog--open");
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });

    document.querySelector('#minimize-button')
        .addEventListener('click', () => {
            ipcRenderer.send('minimize-click');
        });

document.querySelector('#mdc-close-confirm')
    .addEventListener('click', () => {
        ipcRenderer.send('close-click');
    });

document.querySelector('#mdc-close-cancel')
    .addEventListener('click', () => {
        var element = document.getElementById("alert-dialog");
        element.classList.remove("mdc-dialog--open");
    });



//document.querySelector('#close-bitton').addEventListener('click', closeWIndow);