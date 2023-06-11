function changeColor(element) {
    element.classList.add('active');
    element.removeAttribute('onclick');
    var boxId = element.id;
    var destinationPage = getDestinationPage(boxId);
    window.location.href = destinationPage;
    }

function getDestinationPage(boxId) {
    var destinationPage = '';
    switch (boxId) {
        case '1':
            destinationPage = '../html/pagina_fotos.html';
            console.log('op 1')
            break;
        case '2':
            destinationPage = '../html/./prova2.html';
            console.log('op 2')
            break;
        case '3':
            destinationPage = '../html/./prova3.html';
            console.log('op 3')
            break;
        case '4':
            destinationPage = '../html/./prova2.html';
            console.log('op 4')
            break;
        case '5':
            destinationPage = '../html/./prova4.html';
            console.log('op 5')
            break;
        case '6':
            destinationPage = '../html/./prova5.html';
            console.log('op 6')
            break;
        default:
            break;
    }
    return destinationPage;
}