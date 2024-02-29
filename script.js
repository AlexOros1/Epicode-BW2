let images=['assets/images/paesaggi/01-Remo-Lanzoni-Panorama-dal-Passo-Giau.jpg', 'assets/images/paesaggi/Depositphotos_121817610_S.webp', 'assets/images/paesaggi/Immagine-copertina-per-blog-1-2-2.webp', 'assets/images/paesaggi/italia-carta-natura-ispra-almeno-37-tipi-di-paesaggio-quali-sono-1637578644759_1280.webp']

list_1=['Genova', 'Inverness', 'Edimburgh', 'Rapallo']
list_2=['15 mins drive', '2 hrs flight', '1.5 hrs flight', '2 hrs drive']

function createRows(){
    var containerMain=document.getElementById('container_location')
    for(let i=0; i<2; i++){
        var rowContainer=document.createElement('div')
        rowContainer.classList.add('row', 'pt-2')
        if(i===0){
            list_1=['Genova', 'Inverness', 'Edimburgh', 'Rapallo']
            list_2=['15 mins drive', '2 hrs flight', '1.5 hrs flight', '2 hrs drive']
            images=['assets/images/paesaggi/01-Remo-Lanzoni-Panorama-dal-Passo-Giau.jpg', 'assets/images/paesaggi/Depositphotos_121817610_S.webp', 'assets/images/paesaggi/Immagine-copertina-per-blog-1-2-2.webp', 'assets/images/paesaggi/italia-carta-natura-ispra-almeno-37-tipi-di-paesaggio-quali-sono-1637578644759_1280.webp']
        }else{
            list_1=['Milan', 'Montecarlo', 'Kirkwall', 'Nordkapp']
            list_2=['1.5 hrs drive', '2 hr drive', '1 hr drive', '10 hrs flight']
            images=['assets/images/paesaggi/forest-landscape_71767-127.avif', 'assets/images/paesaggi/gettyimages-691930476-612x612.jpg', 'assets/images/paesaggi/photo-1503614472-8c93d56e92ce.avif', 'assets/images/paesaggi/istockphoto-483724081-612x612.jpg']
        }
        for(let j=0; j<images.length; j++){
            var columnContainer=document.createElement('div')
            columnContainer.classList.add('col', 'd-flex', 'align-items-center')
            var image=document.createElement('img')
            image.src=images[j]
            image.alt='Paesaggio'
            image.height='60'
            image.width='70'
            columnContainer.append(image)
            var column_words=document.createElement('div')
            column_words.classList.add('d-flex', 'flex-column', 'ml-2')
            var text_1=document.createElement('span')
            text_1.classList.add('font-weight-bold')
            text_1.textContent=list_1[j]
            var text_2=document.createElement('span')
            text_2.textContent=list_2[j]
            column_words.append(text_1)
            column_words.append(text_2)
            columnContainer.append(column_words)
            rowContainer.append(columnContainer)
        }
        containerMain.append(rowContainer)
    }
}

createRows()