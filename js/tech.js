let pick1 = document.getElementById('picker1')
let pick2 = document.getElementById('picker2')
let pick3 = document.getElementById('picker3')

fetch('../starter-code/data.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        pick1.addEventListener('click', () => {
            document.getElementById('vName').innerText = `${json.technology[0].name}`
            document.getElementById('vDesc').innerText = `${json.technology[0].description}`
            document.getElementById('vImg').src = `${json.technology[0].images.landscape}`
            document.getElementById('vImg2').src = `${json.technology[0].images.portrait}`
            pick1.className = 'active'
            pick2.className = ''
            pick3.className = ''
        })
        pick2.addEventListener('click', () => {
            document.getElementById('vName').innerText = `${json.technology[1].name}`
            document.getElementById('vDesc').innerText = `${json.technology[1].description}`
            document.getElementById('vImg').src = `${json.technology[1].images.landscape}`
            document.getElementById('vImg2').src = `${json.technology[1].images.portrait}`
            pick1.className = ''
            pick2.className = 'active'
            pick3.className = ''
        })
        pick3.addEventListener('click', () => {
            document.getElementById('vName').innerText = `${json.technology[2].name}`
            document.getElementById('vDesc').innerText = `${json.technology[2].description}`
            document.getElementById('vImg').src = `${json.technology[2].images.landscape}`
            document.getElementById('vImg2').src = `${json.technology[2].images.portrait}`
            pick1.className = ''
            pick2.className = ''
            pick3.className = 'active'
        })
    });