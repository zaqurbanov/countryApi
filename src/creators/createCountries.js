const container = document.querySelector('.container');

const createCountry = (datas)=>{

const sliceData = datas.slice(0,10)
console.log(sliceData);
    sliceData.forEach(data => {

        const card = createCard(data)

            container.appendChild(card)
    });


}


const createCard =(data)=>{

    const div = document.createElement('div');
    div.classList.add('card');

    const imgContainer = createImg(data)

    const cardContent = createCardContent(data);


    div.appendChild(imgContainer)
    div.appendChild(cardContent)
    return div


}

const createImg = (data)=>{
  
    const div = document.createElement('div');
    div.classList.add('card-img');

    const img = document.createElement('img');
    img.src = data.flags.png

    div.appendChild(img)


    return div
}

const createCardContent = (data)=>{

    const div  = document.createElement('div');

    div.classList.add('card-content');

    const a = document.createElement('a');
    a.href = ""
    a.textContent = data.name.common

    a.addEventListener('click',getSingleCountry)
    const p1 = document.createElement('p');
    const b1 = document.createElement('b');
    const span1 = document.createElement('span');

    b1.textContent = 'PopuLation : ';
    span1.textContent = data.population

    p1.appendChild(b1);
    p1.appendChild(span1)

    const p2 = document.createElement('p');
    const b2 = document.createElement('b');
    const span2 = document.createElement('span');

    b2.textContent = 'Region : ';
    span2.textContent = data.region

    p2.appendChild(b2);
    p2.appendChild(span2)


    const p3 = document.createElement('p');
    const b3 = document.createElement('b');
    const span3 = document.createElement('span');

    b3.textContent = 'Capital : ';
    span3.textContent = data.capital[0]

    p3.appendChild(b3);
    p3.appendChild(span3)


    div.appendChild(a)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)


    return  div

}

const getSingleCountry = (e)=>{
    e.preventDefault()
    const name=e.target.textContent  
    window.location.href = `country.html?name=${name}`

}
export default createCountry