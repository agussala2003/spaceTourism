let douglasBullet = document.getElementById('1');
let markBullet = document.getElementById('2');
let victorBullet = document.getElementById('3');
let anouBullet = document.getElementById('4');

fetch('../starter-code/data.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        douglasBullet.addEventListener('click', () => {
            document.getElementById('character').src = `${json.crew[0].images.png}`
            document.getElementById('charge').innerText = `${json.crew[0].role}`
            document.getElementById('name').innerText = `${json.crew[0].name}`
            document.getElementById('menDesc').innerText = `${json.crew[0].bio}`
            douglasBullet.className = 'active'
            markBullet.className = ''
            victorBullet.className = ''
            anouBullet.className = ''
        })
        markBullet.addEventListener('click', () => {
            document.getElementById('character').src = `${json.crew[1].images.png}`
            document.getElementById('charge').innerText = `${json.crew[1].role}`
            document.getElementById('name').innerText = `${json.crew[1].name}`
            document.getElementById('menDesc').innerText = `${json.crew[1].bio}`
            douglasBullet.className = ''
            markBullet.className = 'active'
            victorBullet.className = ''
            anouBullet.className = ''
        })
        victorBullet.addEventListener('click', () => {
            document.getElementById('character').src = `${json.crew[2].images.png}`
            document.getElementById('charge').innerText = `${json.crew[2].role}`
            document.getElementById('name').innerText = `${json.crew[2].name}`
            document.getElementById('menDesc').innerText = `${json.crew[2].bio}`
            douglasBullet.className = ''
            markBullet.className = ''
            victorBullet.className = 'active'
            anouBullet.className = ''
        })
        anouBullet.addEventListener('click', () => {
            document.getElementById('character').src = `${json.crew[3].images.png}`
            document.getElementById('charge').innerText = `${json.crew[3].role}`
            document.getElementById('name').innerText = `${json.crew[3].name}`
            document.getElementById('menDesc').innerText = `${json.crew[3].bio}`
            douglasBullet.className = ''
            markBullet.className = ''
            victorBullet.className = ''
            anouBullet.className = 'active'
        })
    });