const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

//mapear as pizzas
pizzaJson.map((item, index)=> {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizza-item

    c('.pizza-area').append(pizzaItem);


});
