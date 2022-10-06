function filterByTypeEntry(){
    const buttonFilter = document.querySelectorAll('.button-topic')
    const listEntry    = document.querySelector('#list-entry')

    buttonFilter.forEach(item=>{
        item.addEventListener('click', ()=>{
            listEntry.innerHTML = '';
            console.log(item.innerText)
            const categ = item.innerText
            console.log(categ)

            if(categ ==='Todos'){
                console.log(insertedValues)
                listCards(insertedValues)
            }

            const entryFilter = filterCat(categ)

            listCards(entryFilter)
            renderSome(entryFilter)
        })
    })
    
}

function filterCat(cat){
    const entrys = insertedValues.filter((object)=>{
        return object.categoryID === cat
    })
    return entrys
}
filterByTypeEntry()