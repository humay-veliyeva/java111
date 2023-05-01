const counters =document.querySelectorAll('.counter');

counters.forEach ((counter)=>{
counter.innerText = '1';

const updateCounter = ()=>{
    const target =+ counter.getAttribute('data-target');
const c =+counter.innerText;
const increment = target /250;

if (c< target){
    counter.innerText = `${Math.ceil(c+ increment
    )}`;
    setTimeout(updateCounter,16);
} else {
    counter.innerText = target ;
}
    // console.log(typeof target, target);
};

updateCounter();
});

