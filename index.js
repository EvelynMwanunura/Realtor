import properties from "./properties.js";

const renderProperties = () => {
  const propertiesContainer = document.getElementById("properties");
  properties.forEach((property) => {
    const propertyElement = document.createElement("div");
    propertyElement.classList.add("property");

    propertyElement.innerHTML = `
    <h2>${property.title}</h2>
    <p>Bedrooms: ${property.bedrooms}</p>
    <p>Bathrooms: ${property.bathrooms}</p>
    <p>Kitchen: ${property.kitchen}</p>
    <p>Reception Rooms: ${property.receptionRooms}</p>
    <p>Garages: ${property.garages}</p>
    <p>Parking: ${property.parking}</p>
    <p>Pet Friendly: ${property.petFriendly ? "Yes" : "No"}</p>
    <p>Garden: ${property.garden ? "Yes" : "No"}</p>
    <p>Backup Battery: ${property.backupBattery ? "Yes" : "No"}</p>
    <p>Area: ${property.area}</p>
    <p>Street Address: ${property.streetAddress}</p>
    <p>Listing Date: ${property.listingDate}</p>
    <p>Floor Size: ${property.floorSize}</p>
    <p>Levies: ${property.levies}</p>
    <p>Rates and Taxes: ${property.ratesAndTaxes}</p>
  `;

    propertiesContainer.appendChild(propertyElement);
  });
};
