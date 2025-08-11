class Property {
  constructor(images, title, location, price, bedrooms, bathrooms, parking) {
    this.images = images; // array of image paths
    this.title = title;
    this.location = location;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.parking = parking;
  }

  render() {
    const propertyCard = document.createElement("div");
    propertyCard.classList.add("property-card");

    // Slider container
    const slider = document.createElement("div");
    slider.classList.add("property-slider");

    const imgElement = document.createElement("img");
    imgElement.src = this.images[0];
    imgElement.alt = this.title;
    slider.appendChild(imgElement);

    // Prev & Next buttons
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("prev");
    prevBtn.innerHTML = "&#10094;";

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next");
    nextBtn.innerHTML = "&#10095;";

    slider.appendChild(prevBtn);
    slider.appendChild(nextBtn);

    let currentIndex = 0;
    prevBtn.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + this.images.length) % this.images.length;
      imgElement.src = this.images[currentIndex];
    });
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % this.images.length;
      imgElement.src = this.images[currentIndex];
    });

    // Details section
    const details = document.createElement("div");
    details.classList.add("property-details");

    const title = document.createElement("h3");
    title.textContent = this.title;

    const location = document.createElement("p");
    location.classList.add("location");
    location.textContent = this.location;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `R ${this.price.toLocaleString("en-ZA")}`;

    const featuresList = document.createElement("ul");
    featuresList.innerHTML = `
      <li><i class="fas fa-bed"></i> ${this.bedrooms} Bedrooms</li>
      <li><i class="fas fa-bath"></i> ${this.bathrooms} Bathrooms</li>
      <li><i class="fas fa-car"></i> ${
        this.parking ? "Parking Available" : "No Parking"
      }</li>
    `;

    details.appendChild(title);
    details.appendChild(location);
    details.appendChild(price);
    details.appendChild(featuresList);

    propertyCard.appendChild(slider);
    propertyCard.appendChild(details);

    return propertyCard;
  }
}

const propertiesForSale = [
  new Property(
    [
      "/houseforsale.jpg",
      "/loeveinstein1.jpg",
      "/loeveinstein2.jpg",
      "/loeveinstein3.jpg",
      "/loeveinstein4.jpg",
    ],
    "6 bedroom house in Loveinstein",
    "Loveinstein, Cape Town",
    6495000,
    6,
    4,
    true
  ),
  new Property(
    [
      "./loveinstein/Apartment1.jpg",
      "./loveinstein/Apartment2.jpg",
      "./loveinstein/Apartment3.jpg",
    ],
    "Apartment with Ocean Views",
    "Sea Point, Cape Town",
    8500000,
    2,
    2,
    true
  ),
  new Property(
    ["./images/property3.jpg", "./images/property3b.jpg"],
    "Family Home in Constantia",
    "Constantia, Cape Town",
    12000000,
    5,
    4,
    true
  ),
];

propertiesForSale.forEach((property) => {
  propertiesGrid.appendChild(property.render());
});
