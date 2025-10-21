// Realtor Project Modal and Button Logic
// Show callback form modal
const callbackBtn = document.getElementById('request-callback-btn');
if (callbackBtn) {
  callbackBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('callback-form-modal').style.display = 'flex';
  });
}

// Hide callback form modal
const closeCallbackBtn = document.getElementById('close-callback-form');
if (closeCallbackBtn) {
  closeCallbackBtn.addEventListener('click', function() {
    document.getElementById('callback-form-modal').style.display = 'none';
  });
}




// Hide callback modal when clicking outside the form
const callbackModal = document.getElementById('callback-form-modal');
if (callbackModal) {
  callbackModal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
}

// Enforce 10-digit cell number for callback form
const cbCell = document.getElementById('cb-cell');
if (cbCell) {
  cbCell.addEventListener('input', function() {
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }
  });
}

// Show assessment form modal when "Free Property Assessment" is clicked
const assessmentLinks = Array.from(document.querySelectorAll('a')).filter(link => link.textContent.trim() === 'Free Property Assessment');
assessmentLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('assessment-form-modal').style.display = 'flex';
  });
});

// Hide assessment form modal
const closeAssessmentBtn = document.getElementById('close-assessment-form');
if (closeAssessmentBtn) {
  closeAssessmentBtn.addEventListener('click', function() {
    document.getElementById('assessment-form-modal').style.display = 'none';
  });
}

// Hide assessment modal when clicking outside the form
const assessmentModal = document.getElementById('assessment-form-modal');
if (assessmentModal) {
  assessmentModal.addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
}

// Enforce 10-digit cell number for assessment form
const assessCell = document.getElementById('assess-cell');
if (assessCell) {
  assessCell.addEventListener('input', function() {
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }
  });
}





  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector("nav ul");
  const dropdowns = document.querySelectorAll(".dropdown");

  mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      // stops link behavior on click
      e.preventDefault();
      dropdown.classList.toggle("open");
    });
  });



// ...existing property rendering code below...
class Property {
  constructor(
    images,
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    parking,
    link
  ) {
    this.images = images; // array of image paths
    this.title = title;
    this.location = location;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.parking = parking;
    this.link = link;
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

    const button = document.createElement("button");
    button.classList.add("view-details");
    button.textContent = "View Details";
    button.addEventListener("click", () => {
      window.location.href = this.link;
    });

    details.appendChild(title);
    details.appendChild(location);
    details.appendChild(price);
    details.appendChild(featuresList);
    details.appendChild(button);

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
    "Spacious 2 bedroom unit in Retirement Village",
    "Protea Heights, Brackenfell.",
    3160000,
    2,
    2,
    true,
    "https://m.realtorsinternational.co.za/results/residential/for-sale/brackenfell/protea-heights/retirement-unit/2930141/#overview"
  ),
  new Property(
    [
      "./loveinstein/Apartment1.jpg",
      "./loveinstein/Apartment2.jpg",
      "./loveinstein/Apartment3.jpg",
    ],
    "Renovated Townhouse in Welgelegen",
    "Welgelegen, Cape Town",
    2295000,
    2,
    1,
    true,
    "https://www.property24.com/for-sale/welgelegen-2/parow/western-cape/32869/114901899"
  ),
  new Property(
    ["./images/property3.jpg", "./images/property3b.jpg"],
    "3 Bedroom Home with Spacious 1 bedroom flat in Welgelegen",
    "Welgelegen, Cape Town",
    4250000,
    3,
    2,
    true,
    "https://www.realtorsinternational.co.za/results/residential/for-sale/parow/welgelegen/house/2933172/#overview"
  ),

  new Property(
    ["./Welgeglen/1.jpg","./Welgeglen/2.jpg","./Welgeglen/3.jpg","./Welgeglen/4.jpg","./Welgeglen/5.jpg","./Welgeglen/6.jpg","./Welgeglen/7.jpg","./Welgeglen/8.jpg","./Welgeglen/9.jpg","./Welgeglen/10.jpg"],
    "A Rare Find in Welgelegen - Versatile Dual-Living Home",
    "Welgelegen, Cape Town",
    8500000,
    6,
    6,
    true,
    "https://www.realtorsinternational.co.za/results/residential/for-sale/parow/welgelegen/guest-house/2469094/58-diamant-crescent/#overview"
  ),
];

propertiesForSale.forEach((property) => {
  propertiesGrid.appendChild(property.render());
});

// ==== REVIEWS ====

class Review {
  constructor(name, description, date, stars, link) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.stars = stars; // 1–5
    this.link = link;
  }

  render() {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');

    // Reviewer name
    const reviewerName = document.createElement('h3');
    reviewerName.classList.add('review-name');
    reviewerName.textContent = this.name;

    // Date
    const reviewDate = document.createElement('p');
    reviewDate.classList.add('review-date');
    reviewDate.textContent = this.date;

    // Star rating
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('review-stars');
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = i <= this.stars ? '★' : '☆';
      starsContainer.appendChild(star);
    }

    // Description with see more
    const reviewText = document.createElement('p');
    reviewText.classList.add('review-description');
    reviewText.textContent = this.description;

   

    // Build card
    reviewCard.appendChild(reviewerName);
    reviewCard.appendChild(reviewDate);
    reviewCard.appendChild(starsContainer);
    reviewCard.appendChild(reviewText);

    return reviewCard;
  }
}


// Array of reviews
const reviews = [
  new Review(
    "Ngobizwe Ngubani",
    "Sandra & Suzelle recently helped our family find our new home. The whole process was complicated because we first had to sell our old home, which introduced a number of challenges from our side. They went out of their way to assist, even went as far as making sure our family is sorted and temporary contingencies are put in place during the process. They really made what was a stressful process rather bearable, from the bottom of our hearts, thank you.",
    "2 months ago",
    5
   
  ),
  new Review(
    "Cheryn May",
    "We are so grateful for the wonderful service and interaction between ourselves and our agent Sandra. She really went out of her way to ensure that the process was smooth and kept us in the loop with everything.",
    "a year ago",
    5
    
  ),
  new Review(
    "Mathys Van Eyssen",
    "We had an amazing experience with this great team. Gratefull for their loving and caring hearts.",
    "3 months ago",
    5
    
  ),
  new Review(
    "Sylvia Van Zyl",
    "Ladies that listen to your every need. Can recommend Suzelle and Sandra from personal experience!",
    "a year ago",
    5
  )
];

// Render reviews
const reviewsContainer = document.getElementById("reviews");
if (reviewsContainer) {
  reviews.forEach(review => {
    reviewsContainer.appendChild(review.render());
  });
}

// ==== BLOG SECTION ====

class BlogSection {
  constructor(containerId, posts) {
    this.container = document.getElementById(containerId);
    this.posts = posts;
  }

  render() {
    if (!this.container) {
      console.warn(`Blog container with id "${containerId}" not found.`);
      return;
    }

    const section = document.createElement('section');
    section.id = 'blog';
    section.classList.add('blog-section');

    const heading = document.createElement('h2');
    heading.textContent = 'Latest From Our Blog';
    section.appendChild(heading);

    const blogContainer = document.createElement('div');
    blogContainer.classList.add('blog-container');

    this.posts.forEach(post => {
      const blogPost = document.createElement('div');
      blogPost.classList.add('blog-post');

      blogPost.innerHTML = `
        <img src="${post.image}" alt="${post.alt}" />
        <h3>${post.title}</h3>
        <p class="date">${post.date}</p>
        <p>${post.description}</p>
        <a href="${post.link}" class="read-more">Read More</a>
      `;

      blogContainer.appendChild(blogPost);
    });

    section.appendChild(blogContainer);
    this.container.appendChild(section);
  }
}

// Blog posts data
const blogPosts = [
  {
    image: './images/blog1.jpg',
    alt: 'Cape Town Lifestyle',
    title: 'How to tell the difference between a buyers’ and a sellers’ market',
    date: 'September 23, 2025',
    description: "",
    link: '#'
  },
  {
    image: './images/blog2.jpg',
    alt: 'Investment Tips',
    title: 'Smart Investment Strategies in the Cape Town Property Market',
    date: 'October 15, 2023',
    description: 'Get expert insights into making sound property investments in Cape Town. Understand current trends and future growth potential.',
    link: '#'
  },
  {
    image: './images/blog3.jpg',
    alt: 'Seafront Property',
    title: 'The Appeal of Living in the Western Cape',
    date: 'October 5, 2023',
    description: 'Experience the luxury and lifestyle benefits of owning a property along the stunning coastline of the Western Cape.',
    link: '#'
  }
];

// Render blog
const blog = new BlogSection('blog', blogPosts);
blog.render();


document.getElementById('current-year').textContent = new Date().getFullYear();