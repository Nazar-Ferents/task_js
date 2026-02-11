

let form = document.forms['creator']

let add = form.querySelector('#add')

let sorter_by_name = form.querySelector('#sorter_by_name')
let sorter_by_value = form.querySelector('#sorter_by_value')
let deleter = form.querySelector('#delete')

let listBox = form.querySelector('#listBox')

let name_value_pair = form.querySelector('#name_value_pair')

add.onclick = function(ev) {

    ev.preventDefault()
    if (name_value_pair.value.match(/^[\a-zA-z\d]+\s*=\s*[\a-zA-z\d]+$/i)) {

        let [name, value] = name_value_pair.value.split('=').map(value => value.trim())


        function check(name,value){

            let array = JSON.parse(localStorage.getItem('creator')) || []
            let finder = array.find(item => item.name === name && item.value === value);
            if (!finder) {

                let options = document.createElement('option');
                options.innerText = `${name}=${value}`
                listBox.appendChild(options)
                array.push({name, value})
                localStorage.setItem('creator', JSON.stringify(array))
            }


        }
        check(name,value)

    }
}

window.onload = function(ev) {

    let existArray = JSON.parse(localStorage.getItem('creator'))

    for (let item of existArray) {
        let options = document.createElement('option');
        options.innerText = `${item.name}=${item.value}`
        listBox.appendChild(options)
    }

}