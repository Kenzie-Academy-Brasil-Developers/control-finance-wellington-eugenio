/* Desenvolva sua lógica aqui */
/*<li class="card flex space center">
                <p>R$ 00,00</p>
                <div class="id-remove flex space center">
                    <p class="tipo">Entrada</p>
                    <button id="remove"><i class="fa-solid fa-trash-can"></i></button>                
                </div>
</li>
*/
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
        some -= valorDocard
        document.querySelector('#total').innerHTML = some.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        insertedValues.splice(idObjeto, 1)
    })
    
    cardcontai.append(cardType, cardbutton)

    cardBody.append(valueCArd, cardcontai)

    return cardBody;
}

const cardMain = document.querySelector('.list-entries')

function listCards(){  
    cardMain.innerHTML = ""
    insertedValues.forEach((obj)=>{
        let objAtual = createCards(obj)
        cardMain.appendChild(objAtual)
    })

}

