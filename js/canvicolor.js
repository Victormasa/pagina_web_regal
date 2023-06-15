function changeColor(element) {
    element.classList.add('active');
    element.removeAttribute('onclick');
    var boxId = element.id;
    var destinationPage = getDestinationPage(boxId);
    window.open(destinationPage);
    }

let destinationPage = '';

function getDestinationPage(boxId) {
    switch (boxId) {
        case '1':
            destinationPage = '../html/pagina_fotos.html';
            break;
        case '2':
            destinationPage = '../html/prova2.html';
            break;
        case '3':
            destinationPage = '../html/prova3.html';
            break;
        case '4':
            destinationPage = '../html/memory.html';
            break;
        case '5':
            destinationPage = '../html/penjat.html';
            break;
        case '6':
            destinationPage = '../html/prova5.html';
            break;
        default:
            break;
    }
    return destinationPage;
}