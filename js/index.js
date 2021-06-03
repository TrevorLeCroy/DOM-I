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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav bar
let nav_items = siteContent.nav;
let nav       = document.querySelectorAll('header > nav > a');

for(let i = 0; i < nav.length; i++) {
  console.log(nav_items[i]);
  nav[i].innerHTML = nav_items['nav-item-' + (i + 1).toString()];
}

// cta
let cta       = document.querySelector('.cta-text');
let ctaH1     = cta.querySelector('h1');
let ctaButton = cta.querySelector('button');
let ctaImage  = document.querySelector('.cta > #cta-img');

ctaH1.innerHTML     = siteContent.cta.h1;
ctaButton.innerHTML = siteContent.cta.button;
ctaImage.src        = siteContent.cta["img-src"];

// main-content
let mainContent = document.querySelector('.main-content');
let textContent = mainContent.querySelectorAll('.text-content');
let middleImage = mainContent.querySelector('#middle-img');

middleImage.src = siteContent['main-content']['middle-img-src'];

// We could also use the below method to do the same thing...
// But this is sort of simplier since we don't have to worry about the middle-img-src
let i = 0;
let mainContentH = ['features', 'about', 'services', 'product', 'vision']
textContent.forEach(item => {
  let h = item.children[0];
  let p = item.children[1];

  h.innerHTML = siteContent['main-content'][mainContentH[i] + '-h4'];
  p.innerHTML = siteContent['main-content'][mainContentH[i] + '-content'];
  i++;
});

// contact
let contact = document.querySelector('.contact');

for(let i = 0; i < contact.children.length; i++) {
  contact.children[i].innerHTML = Object.values(siteContent.contact)[i];
  console.log(contact.children[i]);
}



