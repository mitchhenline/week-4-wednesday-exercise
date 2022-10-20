const button = document.querySelector('#get-residents')
const nameSpace = document.querySelector('#name-return')

function clickButton(){
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/2/')
    .then((response) => {
        let {residents} = response.data
        for(let i = 0; i < residents.length; i++) {
            let ul = document.createElement('ul')
            let li = document.createElement('li')

            axios.get(residents[i]).then((res) => {
                let {name} = res.data
                li.textContent = name
            }).catch((error) => {
                console.log('error')
            })
        
        ul.appendChild(li)
        nameSpace.appendChild(ul)

    
    
        }

    })

}

button.addEventListener("click", clickButton)