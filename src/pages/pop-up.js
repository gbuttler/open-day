import { uniJSON } from "./OpenDay";
import { mainContent } from "../index.js";

const popUp = (newEntry) => {
  console.log("pop-up clicked");

  //get the pop-up div
  let popUpDiv = document.querySelector(".inner-pop-up");
  popUpDiv.style.zIndex = "3";
  //have a loop within a loop to select topics and programs (1 index for topics and 1 for the items within programs)
  // get all the data and use document.createElement

  //title
  let pTitle = document.createElement("h3");
  pTitle.innerHTML = newEntry.title;
  pTitle.classList.add("event-title");

  //image
  let image = document.createElement("img");
  image.src = newEntry.image;
  image.classList.add("event-image");

  //start
  let divStart = document.createElement("div");
  divStart.classList.add("event-start");
  let tStart = document.createElement("h4");
  tStart.innerHTML = "Start:  ";
  let pStart = document.createElement("p");
  pStart.innerHTML = newEntry.start_time;
  divStart.appendChild(tStart);
  divStart.appendChild(pStart);

  //end
  let divEnd = document.createElement("div");
  divEnd.classList.add("event-end");
  let tEnd = document.createElement("h4");
  tEnd.innerHTML = "End:  ";
  let pEnd = document.createElement("p");
  pEnd.innerHTML = newEntry.end_time;
  divEnd.appendChild(tEnd);
  divEnd.appendChild(pEnd);

  //description
  let desc = document.createElement("p");
  desc.classList.add("event-desc");
  desc.innerHTML = newEntry.description_long;

  //location
  let divLocation = document.createElement("div");
  divLocation.classList.add("event-location");
  let addressTitle = document.createElement("h4");
  addressTitle.innerHTML = "Address:   ";
  let address = document.createElement("p");
  address.innerHTML = `<a href='${newEntry.website}'>${newEntry.room}, ${newEntry.address}, ${newEntry.postcode}</a>`;
  divLocation.appendChild(addressTitle);
  divLocation.appendChild(address);

  //append all to popUpDiv
  popUpDiv.appendChild(pTitle);
  popUpDiv.appendChild(image);
  popUpDiv.appendChild(divStart);
  popUpDiv.appendChild(divEnd);
  popUpDiv.appendChild(divLocation);
  popUpDiv.appendChild(desc);
};

export { popUp };
