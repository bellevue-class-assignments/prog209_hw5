// start by creating data so we don't have to type it in each time
let firearmArray = [];

// random imagges
let randomImagesArray = ['1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg'
]

// define a constructor to create movie objects
let FirearmObject = function(
        inputManufacturer,
        inputModel,
        inputClass,
        inputOwned = false,
        inputWanted = true)
    // inputURL,
    // inputAction = null,
    // inputCapacity = null,
    // inputDescription = null,
    // inputMagazineType = null,
    // inputLength = null,
    // inputLengthBarrel = null,
    // inputWeight = null,
    // inputYearStart = null,
    // inputYearEnd = null) 
    {
        this.ID = createUUID();
        // this.Action = inputAction;
        this.Class = inputClass;
        // this.Capacity = inputCapacity;
        // this.Description = inputDescription;
        // this.Length = inputLength;
        // this.LengthBarrel = inputLengthBarrel;
        // this.MagazineType = inputMagazineType;
        this.Manufacturer = inputManufacturer;
        this.Model = inputModel;
        this.Owned = inputOwned;
        this.Wanted = inputWanted;
        // this.URL = inputURL;
        // this.Weight = inputWeight;
        // this.YearEnd = inputYearEnd;
        // this.YearStart = inputYearStart;
    }

firearmArray.push(new FirearmObject("Hekler & Koch", "VP70Z", "Pistol"));
firearmArray.push(new FirearmObject("Glock", "20", "Pistol"));
firearmArray.push(new FirearmObject("Smith & Wesson", "M&P Bodyguard 380", "Pistol"));
firearmArray.push(new FirearmObject("Springfield Armory", "XD45", "Pistol"));

console.log(firearmArray);

let selectedClass = null;
// let selectedAction = null;
// let selectedMagazine = null;
// let selectedStart = null;
// let selectedEnd = null;


document.addEventListener("DOMContentLoaded", function() {

    // generateSlidShow();
    createList();

    // add button events ************************************************************************

    document.getElementById("buttonAdd").addEventListener("click", function() {
        firearmArray.push(new FirearmObject(
            document.getElementById("inputManufacturer").value,
            document.getElementById("inputModel").value,
            selectedClass)); //,
        // document.getElementById("inputURL").value,
        // selectedAction,
        // document.getElementById("inputCapacity").value,
        // document.getElementById("inputDescription").value,
        // selectedMagazine,
        // document.getElementById("inputLength").value,
        // document.getElementById("inputLengthBarrel").value,
        // document.getElementById("inputWeight").value,
        // document.getElementById("inputDateStart").value,
        // document.getElementById("inputDateEnd").value));
        document.location.href = "index.html#ListAll";
        // also add the URL value
    });

    document.getElementById("buttonClear").addEventListener("click", function() {
        document.getElementById("inputManufacturer").value = "";
        document.getElementById("inputModel").value = "";
    });

    $(document).bind("change", "#inputClass", function(event, ui) {
        selectedClass = $('#inputClass').val();
    });

    // $(document).bind("change", "#inputAction", function(event, ui) {
    //     selectedAction = $('#inputAction').val();
    // });

    // $(document).bind("change", "#inputMagazine", function(event, ui) {
    //     selectedMagazine = $('#inputMagazine').val();
    // });

    document.getElementById("delete").addEventListener("click", function() {
        let localParm = localStorage.getItem('parm'); // get the unique key back from the dictionary
        deleteMovie(localParm);
        createList(); // recreate li list after removing one
        document.location.href = "index.html#ListAll"; // go back to movie list 
    });

    // 2 sort button event methods
    document.getElementById("buttonSortManufacturer").addEventListener("click", function() {
        firearmArray.sort(dynamicSort("Manufacturer"));
        createList();
        document.location.href = "index.html#ListAll";
    });

    document.getElementById("buttonSortClass").addEventListener("click", function() {
        firearmArray.sort(dynamicSort("Class"));
        createList();
        document.location.href = "index.html#ListAll";
    });

    // button on details page to view the youtube video
    document.getElementById("trailer").addEventListener("click", function() {
        window.open(document.getElementById("oneURL").innerHTML);
    });

    /**
     * Event listeners for "List Owned Firearms"
     */
    document.getElementById("buttonOwnedPistol").addEventListener("click", function() {

        createOwnedListSubset("Pistol"); // recreate li list after removing one
    });

    document.getElementById("buttonOwnedRifle").addEventListener("click", function() {

        createOwnedListSubset("Rifle"); // recreate li list after removing one
    });

    document.getElementById("buttonOwnedShotgun").addEventListener("click", function() {

        createOwnedListSubset("Shotgun"); // recreate li list after removing one
    });
    // end of add button events ************************************************************************



    // page before show code *************************************************************************
    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#ListAll", function(event) { // have to use jQuery 
        createList();
    });

    $(document).on("pagebeforeshow", "#ListSome", function(event) { // have to use jQuery 
        // clear prior data
        var divMovieList = document.getElementById("divMovieListSubset");
        while (divMovieList.firstChild) { // remove any old data so don't get duplicates
            divMovieList.removeChild(divMovieList.firstChild);
        };
    });

    // need one for our details page to fill in the info based on the passed in ID
    $(document).on("pagebeforeshow", "#details", function(event) {
        let localParm = localStorage.getItem('parm'); // get the unique key back from the dictionairy
        let localID = GetArrayPointer(localParm); // map to which array element it is

        // next step to avoid bug in jQuery Mobile,  force the movie array to be current
        firearmArray = JSON.parse(localStorage.getItem('firearmArray'));
        // no longer using pointer -1 now that we have real keys
        // document.getElementById("oneTitle").innerHTML = "The title is: " + firearmArray[localID-1].Title;

        document.getElementById("oneTitle").innerHTML = "The title is: " + firearmArray[localID].Title;
        document.getElementById("oneYear").innerHTML = "Year released: " + firearmArray[localID].Year;
        document.getElementById("oneGenre").innerHTML = "Genre: " + firearmArray[localID].Genre;
        document.getElementById("oneWoman").innerHTML = "Leading Woman: " + firearmArray[localID].Woman;
        document.getElementById("oneMan").innerHTML = "Leading Man: " + firearmArray[localID].Man;
        document.getElementById("oneURL").innerHTML = firearmArray[localID].URL;
    });

    // end of page before show code *************************************************************************

});
// end of wait until document has loaded event  *************************************************************************

/**
 * function to generate list of slideshow images
 */
function generateSlidShow() {
    let parent = document.getElementById("slideShow");
    console.log(parent);
    for (let i = 0; i < randomImagesArray.length; i++) {
        console.log(randomImagesArray[i]);
        let newDiv = document.createElement("div");
        newDiv.classList.add("slide");
        let newImg = document.createElement("img");
        newImg.src = "img/" + randomImagesArray[i];
        newDiv.appendChild(newImg);
        parent.appendChild(newDiv);
    }
}
// next 2 functions ( createList and createListSubset ) could be combined into 1 with a little work
// such as I could pass in a variable which said which divMovieList div it should draw
function createList() {
    // clear prior data
    let divFirearmList = document.getElementById("divAllFirearms");
    while (divFirearmList.firstChild) { // remove any old data so don't get duplicates
        divFirearmList.removeChild(divFirearmList.firstChild);
    };
    let ul = document.createElement('ul');
    firearmArray.forEach(function(element, ) { // use handy array forEach method
        console.log(element);
        let li = document.createElement('li');
        // adding a class name to each one as a way of creating a collection
        li.classList.add('oneFirearm');
        // use the html5 "data-parm" to encode the ID of this particular data object
        // that we are building an li from
        li.setAttribute("data-parm", element.ID);
        li.innerHTML = element.Manufacturer + "  " + element.Model + " (" + element.Class + ")";
        ul.appendChild(li);
    });
    divFirearmList.appendChild(ul)

    // now we have the HTML done to display out list, 
    // next we make them active buttons
    // set up an event for each new li item, 
    var liArray = document.getElementsByClassName("oneFirearm");
    Array.from(liArray).forEach(function(element) {
        element.addEventListener('click', function() {
            // get that data-parm we added for THIS particular li as we loop thru them
            var parm = this.getAttribute("data-parm"); // passing in the record.Id
            // get our hidden <p> and save THIS ID value in the localStorage "dictionairy"


            // but also, to get around a "bug" in jQuery Mobile, take a snapshot of the
            // current movie array and save it to localStorage as well.
            let stringFirearmArray = JSON.stringify(firearmArray); // convert array to "string"
            localStorage.setItem('firearmArray', stringFirearmArray);
            // now jump to our page that will use that one item
            document.location.href = "index.html#details";
        });
    });

};

function createListSubset(whichType) {
    // clear prior data
    var divMovieList = document.getElementById("divMovieListSubset");
    while (divMovieList.firstChild) { // remove any old data so don't get duplicates
        divMovieList.removeChild(divMovieList.firstChild);
    };
    var ul = document.createElement('ul');
    firearmArray.forEach(function(element, ) {
        if (element.Genre === whichType) {
            // use handy array forEach method
            var li = document.createElement('li');
            // adding a class name to each one as a way of creating a collection
            li.classList.add('oneMovie');
            // use the html5 "data-parm" to encode the ID of this particular data object
            // that we are building an li from
            li.setAttribute("data-parm", element.ID);
            li.innerHTML = element.ID + ":  " + element.Title + "  " + element.Genre;
            ul.appendChild(li);
        }
    });
    divMovieList.appendChild(ul)

    // now we have the HTML done to display out list, 
    // next we make them active buttons
    // set up an event for each new li item, 
    var liArray = document.getElementsByClassName("oneMovie");
    Array.from(liArray).forEach(function(element) {
        element.addEventListener('click', function() {
            // get that data-parm we added for THIS particular li as we loop thru them
            var parm = this.getAttribute("data-parm"); // passing in the record.Id

            localStorage.setItem('parm', parm);
            // but also, to get around a "bug" in jQuery Mobile, take a snapshot of the
            // current movie array and save it to localStorage as well.
            let stringMovieArray = JSON.stringify(firearmArray); // convert array to "string"
            localStorage.setItem('firearmArray', stringMovieArray);
            // now jump to our page that will use that one item
            document.location.href = "index.html#details";
        });
    });

};

/**
 * Function to delete one or more elements from an array
 * 
 * @param {} which 
 */
function deleteMovie(which) {
    console.log(which);
    let arrayPointers = GetArrayPointer(which);
    for (let i = 0; i < arrayPointers.length; i++) {
        firearmArray.splice(arrayPointers[i], 1); // remove 1 element at index 
    }
}

/**
 * Function to cycle thru an array of objects and find the element or elements with the matching
 * attribute value. Once a match is found, an array with the indexes in the array are returned.
 * 
 * @param   {string}    elementValue    The id value to search the array for.
 * @param   {string}    objectAttribute The attribute of the object to search for. if no value
 *                                      is provided, the string "ID" is used.
 *
 * @return  {int}   The index of the array corresponding to the object seached for.
 */
function GetArrayPointer(elementValue, objectAttribute = "ID") {
    console.log(firearmArray);
    console.log(elementValue);
    let arrayIndexes = [];
    for (let index = 0; index < firearmArray.length; index++) {
        if (elementValue === firearmArray[index][objectAttribute]) {
            arrayIndexes.push(index);
        }
    }
    return arrayIndexes;
}

/**
 * Function to sort, alphabetically, an array of objects by some specific key.
 * https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
 * 
 * @param   {String}    property    Key of the object to sort.
 */
function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function(a, b) {
        if (sortOrder == -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}

/**
 * Function to create a basic <li> element using the specified text, and appends it to the specified <ul> or
 * <ol>. If a class value is provided, it is also* assigned to the <li>.
 * @param    {String}    targetListId    the id of the parent list the <li> will be appended to
 * @param    {string}    listItemText    the text string to append to the <li>
 * @param    {string}    listItemClass   [optional] the class string to add to the <li>. if not
 *                                       provided no class attribute will be created.
 */
function createListItem(targetListId, listItemText, listItemClass = null) {
    let targetList = document.querySelector(targetListId);
    let listItem = document.createElement('li');
    if (listItemClass) {
        listItem.classList.add(listItemClass);
    }
    listItem.appendChild(document.createTextNode(listItemText));
    targetList.appendChild(listItem);
}

/**
 * Function to generate a GUID/UUID using a pseudo-random number
 * @returns {string}    A GUID/UUID value
 */
function createUUID() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return uuid;
}