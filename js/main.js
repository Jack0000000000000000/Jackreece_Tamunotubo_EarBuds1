// (() => {
//   const hotspots = document.querySelectorAll(".Hotspot");

//   const infoBoxes = [
//     {
//       title: "Charging pine",
//       text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
//       image: "images/ar_icon.png",
//       alt: "air icon",
//     },
//     {
//       title: "Charging pine",
//       text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.",
//       image: "images/ar_icon.png",
//       alt: "air icon",
//     },
//     {
//       title: "spiker",
//       text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
//       image: "images/ar_icon.png",
//       alt: "air icon",
//     },
//     {
//       title: "spiker",
//       text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
//       image: "images/ar_icon.png",
//       alt: "air icon",
//     },
//     {
//       title: "Bluetooth antenna",
//       text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
//       image: "images/ar_icon.png",
//       alt: "air icon",
//     },
//   ];

//   // functions

//   function loadinfo() {
//     infoBoxes.forEach((infoBox, index) => {
//       console.log(index + 1);

//       let selected = document.querySelector(`#hotspot-${index + 1}`);
//       console.log(selected);

//       const titleElement = document.createElement("h2");
//       titleElement.textContent = infoBox.title;

//       const textElement = document.createElement("p");
//       textElement.textContent = infoBox.text;

//       const imageElement = document.createElement("img");
//       imageElement.src = infoBox.image;
//       imageElement.alt = infoBox.alt;

//       selected.appendChild(imageElement);
//       selected.appendChild(titleElement);
//       selected.appendChild(textElement);
//     });
//   }

//   //Array Functions
//   function loadInfo() {
//     infoBoxes.forEach((infoBox, index) => {
//       //console.log(index+1);
//       let selected = document.querySelector(`#hotspot-${index + 1}`);
//       console.log(selected);

//       //Create h2 in JS
//       const titleElement = document.createElement("h2");

//       //Add text in h2
//       titleElement.textContent = infoBox.title;

//       //Apply it
//       selected.appendChild(titleElement);

//       //Create text in JS
//       const textElement = document.createElement("p");

//       //Add text in text
//       textElement.textContent = infoBox.text;

//       //Apply it
//       selected.appendChild(textElement);
//     });
//   }

//   loadInfo();

//   //Functions

//   function showInfo() {
//     //console.log(this.slot);
//     //console.log(`#${this.slot}`);
//     //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
//     let selected = document.querySelector(`#${this.slot}`);
//     gsap.to(selected, { duration: 1, autoAlpha: 1 });
//   }

//   function hideInfo() {
//     //console.log(this.slot);
//     //console.log(`#${this.slot}`);
//     let selected = document.querySelector(`#${this.slot}`);
//     gsap.to(selected, { duration: 1, autoAlpha: 0 });
//   }

//   hotspots.forEach(function (hotspot) {
//     hotspot.addEventListener("mouseenter", showInfo);
//     hotspot.addEventListener("mouseleave", hideInfo);
//   });
// })();

(() => {
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

      //Apply it
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
})();

// In this version, the event listeners use regular functions instead of arrow functions, so the "this" keyword inside the event listeners will refer to the DOM element that triggered the event.
