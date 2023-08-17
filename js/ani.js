///home
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
            ;
        }
        else {
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement = document.querySelector('.home');

observer.observe(animatedTextElement);




//about-title
function handleIntersection(entries, observer_ab) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_ab = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_ab = document.querySelector('.animated-text-title-about');

observer_ab.observe(animatedTextElement_ab);

//about-sec-hd
function handleIntersection(entries, observer_sechd) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_sechd = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_sechd = document.querySelector('.about-sec-head');

observer_sechd.observe(animatedTextElement_sechd);



//about-comp-img
function handleIntersection(entries, observer_abt_img) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_abt_img = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_abt_img = document.querySelector('.about-comp-img');

observer_abt_img.observe(animatedTextElement_abt_img);


//about-comp-abt
function handleIntersection(entries, observer_abt_cot) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_abt_cot = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_abt_cont = document.querySelector('.about-comp-cont');

observer_abt_cot.observe(animatedTextElement_abt_cont);



