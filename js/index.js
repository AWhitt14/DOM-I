const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


/*------images------*/
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

/*------nav------*/
let nava = document.querySelectorAll('nav > a');
nava = Array.from(nava);

  for (let i = 0; i < nava.length; i++){
    nava[i].textContent = siteContent["nav"][`nav-item-${i + 1}`]
  };
/*------cta words------*/
const h1Words = document.querySelector("h1");
h1Words.textContent = siteContent["cta"]["h1"];
const wordSpacing = "word-spacing";
h1Words.style.wordSpacing = "9999rem";

const b1 = document.querySelector("button");
b1.textContent = siteContent["cta"]["button"];

/*------middle------*/
let midh4 = document.querySelectorAll(".text-content > h4");
midh4 = Array.from(midh4);
midh4[0].textContent = siteContent["main-content"]["features-h4"];
midh4[1].textContent = siteContent["main-content"]['about-h4'];
midh4[2].textContent = siteContent["main-content"]['services-h4'];
midh4[3].textContent = siteContent["main-content"]['product-h4'];
midh4[4].textContent = siteContent["main-content"]['vision-h4'];

let midp = document.querySelectorAll(".text-content > p");
midp = Array.from(midp);
midp[0].textContent = siteContent["main-content"]["features-content"];
midp[1].textContent = siteContent["main-content"]['about-content'];
midp[2].textContent = siteContent["main-content"]['services-content'];
midp[3].textContent = siteContent["main-content"]['product-content'];
midp[4].textContent = siteContent["main-content"]['vision-content'];


/*------contact------*/
const contacth4 = document.querySelector('.contact > h4');
contacth4.textContent = siteContent["contact"]["contact-h4"];
let contactp = document.querySelectorAll('.contact > p');
contactp = Array.from(contactp);
contactp[0].textContent = siteContent["contact"]["address"];
contactp[1].textContent = siteContent["contact"]["phone"];
contactp[2].textContent = siteContent["contact"]["email"];

/*------footer------*/
const foot = document.querySelector("footer > p");
foot.textContent = siteContent["footer"]["copyright"];


/*------new content------*/
const navBar = document.querySelector("nav");
navBar.style.color = "green";
const new1 = document.createElement('a');
new1.textContent = "Awesome";
new1.href = '#';
const new2 = document.createElement('a');
new2.textContent = 'possum';
new2.href = '#';
navBar.prepend(new1);
navBar.appendChild(new2);

let nava2 = document.querySelectorAll('header > nav > a');
nava2 = Array.from(nava2);
for (let i = 0; i < nava2.length; i++){
  nava2[i].style.color = 'green';
};