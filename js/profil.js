const profil =[
    {
    id:"1",
    name:"Myriam",
    year: '2022',
    langues :"Francais,Anglais"
},

{
    id:"2",
    name:"Jean",
    year: '2015',
    langues :"Francais"
},
{
    id:"3",
    name:"Moussa",
    year: '2012',
    langues :"Francais"
},
{
    id:"4",
    name:"Eude",
    year: '2006',
    langues :"Francais"
},

]

const profilElement = document.getElementById('profil')
const listItems = profil.map(item=>{
    const listItems = document.createElement('li')
    listItems.textContent = `Name:${item.name}`
    return listItems
})


listItems.forEach(item=>{
    profilElement.append(item)
})
