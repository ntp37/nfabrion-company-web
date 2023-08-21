const article = document.querySelector('.overview-article')
const introText = document.querySelector('.intro-text')
const btnFilter = document.querySelectorAll('.btn-filter')
const intro = document.querySelector('.intro')
const containerOverview = document.getElementById('container-overview')
const detailContainer = document.getElementById('detail-container')

//#region Event after DOM loaded
window.addEventListener('DOMContentLoaded', () => {
    checkState()
})
//#endregion

//#region CheckState function
function checkState() {
    let hash = location.hash
    let state = history.state

    if (!hash && !state) {              // Case1 for Overview page (don't have hash,state)
        history.replaceState('Overview', '', '#Overview')
        console.log("pushState: done!");
    } else if (hash && !state) {        // Case2 for insert link with hash (don't have state)
        if (hash == '#Overview') {
            serviceOverview()
        } else {
            let newState = hash.substring(1)
            serviceDataFilter(newState, hash)
        }
    } else {                            // Case3 for have both state,hash
        if (state == "Overview") {      
            serviceOverview()
        } else {
            serviceDataFilter(state, hash)
        }
    }
}
//#endregion

//#region Button(#Overview page) click event in card-body function
btnFilter.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        serviceName = event.target.dataset.serviceName  // output: example => npi, smt, afterMarket
        hash = event.target.hash  // output: example => #npi, #smt, #afterMarket
        
        history.pushState(history.state, '', location.hash)
        serviceDataFilter(serviceName, hash)
        // return false
    })
})
//#endregion

//#region Data filter (filter in data.js)
function serviceDataFilter(getServiceName, getHash) {
    let myfilter = data.filter((service) => {
        if (getServiceName == service.type) {
            return service, document.title = `${service.topic} | N-FABRION`,
            introText.innerHTML = service.topic
        }
    })
    //console.log(myfilter); // output: example => obj { after filter in data.js file }

    getService(myfilter)
    intro.setAttribute('id', `${getServiceName}`)
    history.replaceState(`${getServiceName}`, '', getHash)  // replaceState in history
}
//#endregion

//#region render to UI
let getService = (myservice) => {
    containerOverview.hidden = true
    detailContainer.hidden = false
    window.scrollTo(0, 0)

    return detailContainer.innerHTML = (
        myservice.map((service) => {
            let { id, position, name, img } = service
            return `
                <div class="container py-5">
                    <div class="row" id="${id}">
                        <div class="col-md-6 my-md-5 myservice-img ${position}">
                            <img src="${img}" alt="">
                        </div>
                        <div class="col-md-6 my-5 underline-left">
                            <h3>${name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maiores dolore temporibus consectetur enim dolorem, tenetur consequuntur voluptates magnam sunt!</p>
                            <p>amet consectetur adipisicing elit. Esse maiores dolore temporibus consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, distinctio.</p>
                        </div>
                    </div>
                </div>`
        }).join("")
    )
}
//#endregion

//#region Popstate event (back, forward in browser)
window.addEventListener('popstate', (event) => {
    let state = event.state
    let hash = event.hash

    if (state && hash) {
        if (state == 'Overview') {
            serviceOverview()
        } else {
            checkState()
        }
    } else {
        checkState()
    }
})
//#endregion

//#region render Overview page (after the Popstate event case)
function serviceOverview() {
    let market = location.href.match('market')
    containerOverview.hidden = false
    detailContainer.hidden = true

    if (market) {
        introText.innerHTML = 'Markets'
        document.title = 'Markets | N-FABRION'
        intro.setAttribute('id', 'overview-markets')
    } else {
        introText.innerHTML = 'Services'
        document.title = 'Services | N-FABRION'
        intro.setAttribute('id', 'overview-services')
    }   
}
//#endregion