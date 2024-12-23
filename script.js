'use-strict'

const value = document.querySelectorAll('.value');
const itemvalue = document.querySelectorAll('.item--value')


const quantbtn = document.querySelectorAll('.increase_quantity--1')
const labelquant = document.querySelectorAll('.items-description--quant')
const decreasebtn = document.querySelectorAll('.decrease_quantity--1')


let increasequnt = 1;
quantbtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()



        const label = e.target.getAttribute('data-type');
        const selected = e.target.closest(`.item--${label}`).querySelector(`.items-description--quant--${label}`)


        increasequnt++


        selected.textContent = `${increasequnt}`
        // selected.textContent =`x ${selected.textContent+= selc}`


        //   selected.textContent = `${Number(selected.textContent[0]+=1)}`;
        console.log(selected.textContent)




        const target = e.target.getAttribute('data-type')
        // console.log(target)

        const price = e.target.closest('.item-left').querySelector('.item--value')
        const priceval = price.textContent
        // const calulated = (priceval * increasequnt)
        // console.log((priceval))
        // price.textContent = `${calulated}`
    })
})

decreasebtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        increasequnt--;
        const label = e.target.getAttribute('data-type');
        const selected = e.target.closest(`.item--${label}`).querySelector(`.items-description--quant--${label}`)

        selected.textContent = `${increasequnt}`
    })
})


value.forEach(val => {
    const formatvalue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(val.textContent)

    val.textContent = formatvalue
})

// itemvalue.forEach(item=>{
//     const formatitem =  new Intl.NumberFormat('en-US',{
//         style:'currency',
//         currency:"USD"
//     }).format(item.textContent)

//     item.textContent = formatitem

//     // const addeditem =  item.textContent.reduce((arr)=>arr)

// })

const itemprice = itemvalue.forEach(item => {
    let price = []
    const iprice = item.textContent
    price.push(iprice)
    const addedprice = price.reduce((arr, mov) => arr + mov, 0)

})
map;
const showposition= function(position){
    const latitude =  position.coords.latitude
    const longitude =  position.coords.longitude
    console.log(position)
    map = L.map('map').setView([latitude,longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude,longitude]).addTo(map)
        .bindPopup('Your Location')
        .openPopup();
}


navigator.geolocation.getCurrentPosition(showposition)



