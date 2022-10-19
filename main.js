const button = document.querySelector('#get-residents')
const residentNames = document.querySelector('#resident-names')
const residentNames2 = document.querySelector('#resident-names2')
const residentNames3 = document.querySelector('#resident-names3')

function clickButton(){
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/2/')
    .then((response) => {
        let {residents} = response.data
        for(i = 0; i < residents.length; i++){
        let person1 = axios.get('https://swapi.dev/api/people/5/')
        let person2 = axios.get('https://swapi.dev/api/people/68/')
        let person3 = axios.get('https://swapi.dev/api/people/81/')
        }

        residentNames.textContent = (person1)

    .then()

    })
    .catch((error) => {
        console.log('error')
    })
    
}

button.addEventListener("click", clickButton)