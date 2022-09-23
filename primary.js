//create empty container for customer directory
const directory = document.querySelector("#directory");

// create function that will load all customer data into directory
// function buildDirectory[customerArray] {
    // for (let customer of customerArray) {
        for (let customer of customers) {
// create the container/div for customer record
        let customerDiv = document.createElement("div");

// add customer to css classes-note these are already defined on the main.css page but this adds them to the html so that the css works!
        customerDiv.classList.add("customer");

// profile picture: create img element & class, set source
        let photo = document.createElement("img");
        customerDiv.classList.add("photo");
        photo.src = customer.picture.large;
        
// customer name: create element, add class, define text
        let fullName = document.createElement("h3");
        customerDiv.classList.add("h3");
        fullName.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;

// email: create element, add class, define text
        let email = document.createElement("div");
        customerDiv.classList.add("email");
        email.innerText = customer.email;

// address: create elements (2) to handle the street vs city/state but only one class
        let street = document.createElement("div");
        let cityState = document.createElement("div");
        customerDiv.classList.add("address");
        street.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        cityState.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;

// dob: create element for dob which will have to be formatted to remove time data
        let dob = document.createElement("div");
        customerDiv.classList.add("dob");
        dob.innerText = customer.dob.date;

// dateRegistered: create element for date and format to remove time data
        let dateRegistered = document.createElement("div");
        customerDiv.classList.add("registered");
        dateRegistered.innerText = customer.registered.date;
        
// write the conplete customer record to its own entry box and render all boxes in directory container
        customerDiv.appendChild(photo);
        customerDiv.appendChild(fullName);
        customerDiv.appendChild(email);
        customerDiv.appendChild(street);
        customerDiv.appendChild(cityState);
        customerDiv.appendChild(dob);
        customerDiv.appendChild(dateRegistered);
        directory.appendChild(customerDiv);

    }


// }

