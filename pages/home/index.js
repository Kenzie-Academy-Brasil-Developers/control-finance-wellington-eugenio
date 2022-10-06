let formatoMoeda = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }

let countId = 0
let some = 0

function createCards(objeto){
    const valorDocard = parseInt(objeto.value);
    const tipo  = objeto.categoryID;
    const idObjeto = objeto.id
    
    const cardBody       = document.createElement('li');
    cardBody.classList   = 'card flex space center';

    const valueCArd      = document.createElement('p');
    valueCArd.innerText  = valorDocard.toLocaleString('pt-BR', formatoMoeda)
    
    const cardcontai     = document.createElement('div');
    cardcontai.classList = 'id-remove flex space center';

    const cardType       = document.createElement('p');
    cardType.classList   = 'tipo';
    cardType.innerText   = tipo;

    const cardbutton     = document.createElement('button');
    cardbutton.classList = "remove"
    cardbutton.id        = `re-${idObjeto}`;
    cardbutton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    
    cardbutton.addEventListener('click',(event)=>{
        let li = event.path[3]
        li.remove()
        insertedValues.splice(idObjeto, 1)
        renderSome(insertedValues)
    })
    
    cardcontai.append(cardType, cardbutton)

    cardBody.append(valueCArd, cardcontai)

    return cardBody;
}

const cardMain = document.querySelector('.list-entries')

function listCards(arr){  
    cardMain.innerHTML = ""
    arr.forEach((obj)=>{
        let objAtual = createCards(obj)
        cardMain.appendChild(objAtual)
    })

}

function renderCategories(arr){
    const listCat = document.getElementById('cat-ul')

    arr.forEach((cat)=>{
        const name = createCat(cat)
        listCat.appendChild(name)
    })
}

function createCat(item){
    const li = document.createElement('li')
    const name = document.createElement('p')
    
    li.classList = 'button-topic'
    name.classList = 'cat-name'

    name.innerText = item

    li.appendChild(name)

    return li;
}

renderCategories(entryType)

function renderSome(arr){
    const somaloc = document.querySelector('#total')

    const valueSome = recudeSome(arr)

    somaloc.innerHTML = valueSome.toLocaleString('pt-br', formatoMoeda)
}

function recudeSome(arr){
    const soma = arr.reduce((acumulador, currentValue)=>{
        return acumulador + parseInt(currentValue.value)
    }, 0)
    return soma
}

