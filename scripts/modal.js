function createModal(){
    const modalCorp       = document.createElement('div');
    modalCorp.classList   = 'modal';
    modalCorp.id          = 'md-cp'
    
    const modalBody       = document.createElement('section');
    modalBody.classList   = 'modal-container flex column space';

    const modalReader     = document.createElement('div');
    modalReader.classList = 'modal-reader flex space center';

    const modalTitle      = document.createElement('h3');
    modalTitle.classList  = 'modal-title';
    modalTitle.innerText  = 'Registro de valor';

    const closeModal      = document.createElement('button');
    closeModal.classList  = 'exit';
    closeModal.id         = 'ex';
    closeModal.innerText  = 'X';

    const modalText       = document.createElement('p');
    modalText.innerText   = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor';

    const modalForm       = document.createElement('form');
    modalForm.classList   = 'modal-form flex column space';

    const modalFormtitle  = document.createElement('label');
    modalFormtitle.classList = 'label-enti';
    modalFormtitle.innerText = 'Valor';

    const modalInput      = document.createElement('div');
    modalInput.classList  = 'value-in flex center';
    
    const inputText       = document.createElement('p');
    inputText.innerText   = 'R$';

    const inputForm       = document.createElement('input');
    inputForm.type        = 'number';
    inputForm.name        = 'value';
    inputForm.classList   = 'input-valor';
    inputForm.required    = true
    inputForm.placeholder = '00,00';

    const valorTipo       = document.createElement('div');
    valorTipo.classList   = 'modal-tipo flex center';

    const tipoText        = document.createElement('p');
    tipoText.innerText    = 'Tipo de valor';

    const radio1          = document.createElement('input');
    radio1.type           = 'radio';
    radio1.classList      = 'input-radio';
    radio1.name           = 'categoryID';
    radio1.required       = true;
    radio1.id             = 'entrada';
    radio1.value          = 'Entrada';
    
    const radio1label     = document.createElement('label');
    radio1label.htmlFor   = 'entrada'
    radio1label.classList = 'input-radio-name';
    radio1label.innerText = 'Entrada';

    const radio2          = document.createElement('input');
    radio2.type           = 'radio';
    radio2.classList      = 'input-radio';
    radio2.name           = 'categoryID';
    radio2.id             = 'saida';
    radio2.value          = 'Saida';
    
    const radio2label     = document.createElement('label');
    radio2label.htmlFor   = 'saida';
    radio2label.classList = 'input-radio-name';
    radio2label.innerText = 'Saída';

    const modalActions     = document.createElement('div');
    modalActions.classList = 'modal-actions flex center';

    const modalCancel      = document.createElement('button');
    modalCancel.classList  = 'button-cancel';
    modalCancel.id         = 'ex';
    modalCancel.innerText  = 'Cancelar';

    const modalInsert      = document.createElement('button');
    modalInsert.classList  = 'button-insert';
    modalInsert.id         = 'insert';
    modalInsert.type       = 'submit';
    modalInsert.innerText  = 'Inserir Valor';

    modalForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        countId++
        console.log(countId)
        let newEntry = {}
        newEntry.id = countId
        const forSubmit = [...event.target]

        forSubmit.forEach((entry)=>{
            if(entry.value && entry.type !== 'radio'){
                newEntry[entry.name] = entry.value
            }else if(entry.checked){
                newEntry[entry.name] = entry.value
            }
        })
        insertedValues.push(newEntry)
        listCards(insertedValues)
        renderSome(insertedValues)
        modalCorp.remove()
        
    })

    modalReader.append(modalTitle, closeModal);

    modalInput.append(inputText, inputForm);

    valorTipo.append(tipoText, radio1, radio1label, radio2, radio2label);

    modalActions.append(modalCancel, modalInsert);

    modalForm.append(modalFormtitle, modalInput, valorTipo, modalActions);

    modalBody.append(modalReader, modalText, modalForm);

    modalCorp.appendChild(modalBody);

    return modalCorp;
}

function showModal(){
    const buttonShow = document.getElementById('new');
    const bodyLocal  = document.getElementById('body');

    buttonShow.addEventListener('click',()=>{
        const modal = createModal();
        
        bodyLocal.appendChild(modal);
        exitModal()

    })
}

function exitModal(){
    const buttonClose = document.getElementById('ex');
    const modalCorpo  = document.getElementById('md-cp');

    buttonClose.addEventListener('click',()=>{
        modalCorpo.remove()
    })
}

showModal()