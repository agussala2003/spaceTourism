let moonTab = document.getElementById('moon');
let marsTab = document.getElementById('mars');
let europaTab = document.getElementById('europa');
let titanTab = document.getElementById('titan');
let douglasBullet = document.getElementById('1');
let markBullet = document.getElementById('2');
let victorBullet = document.getElementById('3');
let anouBullet = document.getElementById('4');

fetch('../starter-code/data.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        moonTab.addEventListener('click', () => {
            document.getElementById('planet').src = `${json.destinations[0].images.png}`
            document.getElementById('title').innerText = `${json.destinations[0].name}`
            document.getElementById('description').innerText = `${json.destinations[0].description}`
            document.getElementById('distance').innerText = `${json.destinations[0].distance}`
            document.getElementById('travel').innerText = `${json.destinations[0].travel}`
            moonTab.className = ''
            marsTab.className = 'inactive'
            europaTab.className = 'inactive'
            titanTab.className = 'inactive'
        })
        marsTab.addEventListener('click', () => {
            document.getElementById('planet').src = `${json.destinations[1].images.png}`
            document.getElementById('title').innerText = `${json.destinations[1].name}`
            document.getElementById('description').innerText = `${json.destinations[1].description}`
            document.getElementById('distance').innerText = `${json.destinations[1].distance}`
            document.getElementById('travel').innerText = `${json.destinations[1].travel}`
            moonTab.className = 'inactive'
            marsTab.className = ''
            europaTab.className = 'inactive'
            titanTab.className = 'inactive'
        })
        europaTab.addEventListener('click', () => {
            document.getElementById('planet').src = `${json.destinations[2].images.png}`
            document.getElementById('title').innerText = `${json.destinations[2].name}`
            document.getElementById('description').innerText = `${json.destinations[2].description}`
            document.getElementById('distance').innerText = `${json.destinations[2].distance}`
            document.getElementById('travel').innerText = `${json.destinations[2].travel}`
            moonTab.className = 'inactive'
            marsTab.className = 'inactive'
            europaTab.className = ''
            titanTab.className = 'inactive'
        })
        titanTab.addEventListener('click', () => {
            document.getElementById('planet').src = `${json.destinations[3].images.png}`
            document.getElementById('title').innerText = `${json.destinations[3].name}`
            document.getElementById('description').innerText = `${json.destinations[3].description}`
            document.getElementById('distance').innerText = `${json.destinations[3].distance}`
            document.getElementById('travel').innerText = `${json.destinations[3].travel}`
            moonTab.className = 'inactive'
            marsTab.className = 'inactive'
            europaTab.className = 'inactive'
            titanTab.className = ''
        })
    });