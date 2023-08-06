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





//about-img
function handleIntersection(entries, observer_img) {
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

const observer_img = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_abimg = document.querySelector('.about-cod');

observer_img.observe(animatedTextElement_abimg);



//about-com-p
function handleIntersection(entries, observer_comp) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_comp = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_comp = document.querySelector('.about-cod-con');

observer_comp.observe(animatedTextElement_comp);

//about-fas-p
function handleIntersection(entries, observer_fas_img) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_fas_img = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_fas_img = document.querySelector('.about-fas-con');

observer_fas_img.observe(animatedTextElement_fas_img);


//about-fas-img
function handleIntersection(entries, observer_fas_p) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_fas_p = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_fas_p = document.querySelector('.about-fas-img');

observer_fas_p.observe(animatedTextElement_fas_p);


//courses-title
function handleIntersection(entries, observer_c_ti) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_c_ti = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_c_ti = document.querySelector('.animated-text-title-courses');

observer_c_ti.observe(animatedTextElement_c_ti);

//courses1
function handleIntersection(entries, observer_c1) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_c1 = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_c1 = document.querySelector('.courses1');

observer_c1.observe(animatedTextElement_c1   );

//courses2
function handleIntersection(entries, observer_c2) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_c2 = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_c2 = document.querySelector('.courses2');

observer_c2.observe(animatedTextElement_c2  );



//gallery-title
function handleIntersection(entries, observer_edu_ti) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_edu_ti = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_edu_ti = document.querySelector('.animated-text-title-gallery');

observer_edu_ti.observe(animatedTextElement_edu_ti);

//gallery-img
function handleIntersection(entries, observer_gimg) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_gimg = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_gimg = document.querySelector('.gallery-box');

observer_gimg.observe(animatedTextElement_gimg);



//contact-tit
function handleIntersection(entries, observer_contact_ti) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); 
        }
        else {
            
            entry.target.classList.remove('animate'); 
        }
    });
}

const observer_contact_ti = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 
});

const animatedTextElement_contact_ti = document.querySelector('.animated-text-title-contact');

observer_contact_ti.observe(animatedTextElement_contact_ti);
