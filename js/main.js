


(() => {
  gsap.registerPlugin(ScrollTrigger);

  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      image: "images/Charging-pin.png",
      title: "Charging pine",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
      alt: "air icon",
    },
    {
      image: "images/spiker.png",
      title: "Spiker",

       text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
       alt: "air icon",

    },
    {
      image: "images/Bluetooth-antenna.png",
      title: "Bluetooth antenna",

       text: "Wiyer less Bluetooth 5.0 technology for a strong and stable connection up to 33 feet and lossless audio support.",
       alt: "air icon",

    },
    {
      image: "images/spiker.png",
      title: "Volume button",
      text: "For incrsing and reducing the volume.",
      alt: "air icon",
    },
  ];

  //Array Functions
  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      //console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      console.log(selected);

      const imageElement = document.createElement("img");
      imageElement.src = infoBox.image;
      imageElement.alt = infoBox.alt;

      selected.appendChild(imageElement);
      //Create h2 in JS
      const titleElement = document.createElement("h2");

      //Add text in h2
      titleElement.textContent = infoBox.title;

      //Apply it
      selected.appendChild(titleElement);

      //Create text in JS
      const textElement = document.createElement("p");

      //Add text in text
      textElement.textContent = infoBox.text;


      selected.appendChild(textElement);
    });
  }

  loadInfo();

  //Functions

  function showInfo() {

    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.

    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 1 });
  }

  function hideInfo() {

    //console.log(this.slot);
    //console.log(`#${this.slot}`);

    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, { duration: 1, autoAlpha: 0 });
  }

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  function greed() {

    const textinfo = document.querySelector("#text-info");
    if (window.innerWidth >= 768) {
      textinfo.classList.add("hidden");
    } else {
      textinfo.classList.remove("hidden");
      textinfo.innerHTML = "";
      infoBoxes.forEach((infoBox) => {
        textinfo.innerHTML += `<h2>${infoBox.title}</h2><p>${infoBox.text}</p>`;
      });
    }
  }
  window.addEventListener("resize", greed);
  greed

  const menu = document.querySelector('#menu');
  const hamburger = document.querySelector('#hamburger');
  const closeButton = document.querySelector('#close');
  const menulinks = document.querySelectorAll('#menu nav ul li a');

  function toggleMenu() {
    menu.classList.toggle('open');
  }


  menulinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  })
  hamburger.addEventListener("click", toggleMenu);

  closeButton.addEventListener("click", toggleMenu);

})();



(()=> {
    console.log("IIFE Called");

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width= 1920;
    canvas.height = 1080;

    
    const frameCount = 51; 

    
    const images = [];

    
    const buds = {
        frame: 0
    }

    for (let i=0; i<frameCount; i++) {
        const img = new Image();
        img.src = `images/ezgif-frame-${(i+1).toString().padStart(3, '0')}.webp`;
        images.push(img);
    }
    console.log(images);

    gsap.to(buds, {
        frame: 50,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top 208px",
            end: "bottom bottom",
            markers: false
        },
        onUpdate: render
    })

    images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0,0, canvas.width, canvas.height);
        context.drawImage(images[buds.frame], 0, 0);
    }

     const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor() {
        divisor.style.width = `${slider.value}%`;
    }

    function resetSlider() {
        slider.value = 50;
    }

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);

})();


