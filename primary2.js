//create empty container for customer directory
const directory = document.querySelector("#directory");

// go through each customer in the array
        for (let customer of customers) {
        let customerDiv = document.createElement("div");
        
// declare variables and tags for css
        let photo = document.createElement("img");
        let fullName = document.createElement("h3");
        let email = document.createElement("div");
        let street = document.createElement("div");
        let cityState = document.createElement("div");
        let dob = document.createElement("div");
        let dateRegistered = document.createElement("div");

// add necessary css classes (note these are already defined on the main.css page but this adds them to the html so that the css works)
        customerDiv.classList.add("customer");
        customerDiv.classList.add("photo");
        customerDiv.classList.add("h3");
        customerDiv.classList.add("email");
        customerDiv.classList.add("address");
        customerDiv.classList.add("dob");
        customerDiv.classList.add("registered");


// data values mapped to declared variables
        photo.src = customer.picture.large;
        fullName.innerText = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
        email.innerText = customer.email;
        street.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        cityState.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;
        // dob.innerText = `${"Birthday:" ${customer.dob.date}}`;
        // dob.innerText = customer.date.dob;
        dateRegistered.innerText = customer.registered.date;


// write the conplete customer record to its own entry box
        customerDiv.appendChild(photo);
        customerDiv.appendChild(fullName);
        customerDiv.appendChild(email);
        customerDiv.appendChild(street);
        customerDiv.appendChild(cityState);
        customerDiv.appendChild(dob);
        customerDiv.appendChild(dateRegistered);

// render all customer records in directory container
        directory.appendChild(customerDiv);

    }




