
// витягнув елементи з HTML коду
let form = document.forms['creator']

let add = form.querySelector('#add')

let sorter_by_name = form.querySelector('#sorter_by_name')
let sorter_by_value = form.querySelector('#sorter_by_value')
let deleter = form.querySelector('#delete')

let listBox = form.querySelector('#listBox')

let name_value_pair = form.querySelector('#name_value_pair')

// створив подію яка приймає name=value від user
add.onclick = function(ev) {

    ev.preventDefault()

        //додав перевірку у за допомогою regex
    if (name_value_pair.value.match(/^[a-zA-Z\d]+\s*=\s*[a-zA-Z\d]+$/i)) {

        //деструктуризація + розділення на дві частини + прибрав усі зайві пропуски
        let [name, value] = name_value_pair.value.split('=').map(value => value.trim())


               // зробив перевірку чи існує вже така пара
            let array = JSON.parse(localStorage.getItem('creator')) || []
            let finder = array.find(item => item.name === name && item.value === value);
            if (!finder) {

                let options = document.createElement('option');
                options.innerText = `${name}=${value}`
                listBox.appendChild(options)
                array.push({name, value})
                localStorage.setItem('creator', JSON.stringify(array))
            }

            name_value_pair.value = ''


    }
}

//вписує попередній список users після завантаження сайту
window.onload = function(ev) {

    let existArray = JSON.parse(localStorage.getItem('creator')) || []

    for (let item of existArray) {
        let options = document.createElement('option');
        options.innerText = `${item.name}=${item.value}`
        listBox.appendChild(options)
    }

}

//відсортував в алфавітному порядку за іменами
sorter_by_name.onclick = function(ev) {
    ev.preventDefault()
     let array = JSON.parse(localStorage.getItem('creator'))
    let sorterName = array.sort((a,b) => {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
        if (a.name === b.name) {
            return 0
        }

    } )

    listBox.innerHTML = ''


    for (let item of sorterName) {
        let options = document.createElement('option');
        options.innerText = `${item.name}=${item.value}`
        listBox.appendChild(options)
    }


}

//відсортував в алфавітному порядку за значеннями
sorter_by_value.onclick = function(ev) {
    ev.preventDefault()
    let array = JSON.parse(localStorage.getItem('creator'))
    let sorterValue = array.sort((a,b) => {
        if (a.value > b.value) {
            return 1

        }
        if (a.value < b.value) {
            return -1
        }
        if (a.value === b.value) {
            return 0
        }
    })
    listBox.innerHTML = ''

    for (let item of sorterValue) {
        let options = document.createElement('option');
        options.innerText = `${item.name}=${item.value}`
        listBox.appendChild(options)
    }
}

//кнопка яка буде видаляти вибрані елементи списку
deleter.onclick = function(ev) {
    ev.preventDefault()
    let array = JSON.parse(localStorage.getItem('creator'))
    let selectItems = Array.from(listBox.selectedOptions)

    selectItems.forEach(option => {
        let [name, value] = option.value.split('=').map(value => value.trim())
        array = array.filter( item => !(item.name === name && item.value === value))
        option.remove();
        localStorage.setItem('creator', JSON.stringify(array))
    })

}


