// start by creating data so we don't have to type it in each time
let firearmArray = [];

// calbers for inputCaliber
let caliberArray = [
    '.17 HMR',
    '.22 Long',
    '.22 Long Rifle',
    '.22 Short',
    '.22-250 Remington',
    '.221 Fireball',
    '.223 Remington',
    '.240 Weatherby Magnum',
    '.25 ACP',
    '.250 Savage',
    '.270 Winchester',
    '.30-06 Springfield',
    '.30-30 Winchester',
    '.300 Savage',
    '.300 Winchester Magnum',
    '.303 British',
    '.308 Winchester',
    '.32 ACP',
    '.327 Magnum',
    '.338 Lapua Magnum',
    '.357 Magnum',
    '.357 SIG',
    '.375 H&H Magnum',
    '.375 Weatherby Magnum',
    '.38 Special',
    '.38 Super',
    '.380 ACP',
    '.40 S&W',
    '.41 Magnum',
    '.410 2.5" chamber',
    '.410 3" chamber',
    '.44 Magnum',
    '.44 Special',
    '.45 ACP',
    '.45 GAP',
    '.45 Long Colt',
    '.450 Nitro Express',
    '.454 Casull',
    '.458 Winchester Magnum',
    '.460 S&W Magnum',
    '.460 Winchester Magnum',
    '.465 H&H Magnum',
    '.470 Nitro Express',
    '.480 Ruger',
    '.50 Action Express',
    '.500 Magnum',
    '.700 Nitro Express',
    '12 gauge, 2-3/4" chamber',
    '12 gauge, 3" chamber',
    '12 gauge, 3-1/2" chamber',
    '20 gauge, 2-3/4" chamber',
    '20 gauge, 2-5/8" chamber',
    '20 gauge, 3" chamber',
    '5.45x18mm',
    '5.45x39mm',
    '5.56mm NATO',
    '5.7x28mm FN',
    '6mm Remington',
    '6.5mm Creedmore',
    '6.5mm Mannlicher-Carcano',
    '6.5mm Mannlicher-Schoenauer',
    '6.5mm Swedish Mauser',
    '6.8mm Remington',
    '7mm Nambu',
    '7mm Weatherby-Magnum',
    '7mm-08 Remington',
    '7.62mm Nagant',
    '7.62mm NATO',
    '7.62mm Tokarev',
    '7.65mm Mannlicher',
    '7.62x39mm',
    '7.62x54mmR',
    '8mm Mauser',
    '8mm Remington Magnum',
    '9mm Ultra',
    '9mm Parabellum',
    '9mm Long',
    '10mm Auto'
]

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
    inputCaliber,
    inputOwned,
    inputWanted) {
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
    this.Caliber = inputCaliber;
    this.Owned = inputOwned;
    this.Wanted = inputWanted;
    // this.URL = inputURL;
    // this.Weight = inputWeight;
    // this.YearEnd = inputYearEnd;
    // this.YearStart = inputYearStart;
}

firearmArray.push(new FirearmObject("Hekler & Koch", "VP70Z", "Pistol", "9mm Parabellum", true, false));
firearmArray.push(new FirearmObject("Glock", "20", "Pistol", "10mm Auto", true, false));
firearmArray.push(new FirearmObject("Smith & Wesson", "M&P Bodyguard 380", "Pistol", ".380 ACP", true, false));
firearmArray.push(new FirearmObject("Springfield Armory", "XD45", "Pistol", ".45 ACP", true, false));
firearmArray.push(new FirearmObject("Springfield Armory", "M1A SOCOM 16 CQB RIFLE", "Rifle", ".308 Remington", false, true));
firearmArray.push(new FirearmObject("Ruger", "Precision 26\" MLOK", "Rifle", ".338 Lapua", false, true));
firearmArray.push(new FirearmObject("Walther", "WA 2000", "Rifle", ".300 Winchester Magnum", false, true));
firearmArray.push(new FirearmObject("Kel-Tec", "SU-16", "Rifle", "5.56mm NATO", false, true));
firearmArray.push(new FirearmObject("CZ", "Bren 2 MS Carbine", "Rifle", "5.56mm NATO", false, true));

let selectedCaliber = null,
    selectedClass = null,
    isOwned = false,
    isWanted = false;

document.addEventListener("DOMContentLoaded", function() {

    // create option elements for inputCaliber
    generateCaliberInput();

    // generateSlidShow();
    createList();

    // add button events ************************************************************************
    document.getElementById("buttonAdd").addEventListener("click", function() {
        firearmArray.push(new FirearmObject(
            document.getElementById("inputManufacturer").value,
            document.getElementById("inputModel").value,
            selectedClass,
            selectedCaliber,
            isOwned,
            isWanted)); //,
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

    $(document).bind("change", "#inputCaliber", function(event, ui) {
        selectedCaliber = $('#inputCaliber').val();
    });

    $(document).bind("change", "#inputClass", function(event, ui) {
        selectedClass = $('#inputClass').val();
    });

    $(document).bind("change", "#inputOwned", function(event, ui) {
        isOwned = $('#inputOwned').is(':checked');
    });

    $(document).bind("change", "#inputWanted", function(event, ui) {
        isWanted = $('#inputWanted').is(':checked');
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

    // 2 sort button event methodsmanufacturerTitle
    document.getElementById("buttonSortManufacturer").addEventListener("click", function() {
        firearmArray.sort(dynamicSort("Manufacturer"));
        createList();
        document.location.href = "index.html#ListAll";
    });

    document.getElementById("buttonSortCaliber").addEventListener("click", function() {
        firearmArray.sort(dynamicSort("Caliber"));
        createList();
        document.location.href = "index.html#ListAll";
    });

    document.getElementById("buttonSortClass").addEventListener("click", function() {
        firearmArray.sort(dynamicSort("Class"));
        createList();
        document.location.href = "index.html#ListAll";
    });

    // button on details page to view the youtube video
    // document.getElementById("trailer").addEventListener("click", function() {
    //     window.open(document.getElementById("oneURL").innerHTML);
    // });

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

        document.getElementById("oneManufacturer").innerHTML = "Manufacturer: " + firearmArray[localID].Manufacturer;
        document.getElementById("oneModel").innerHTML = "Model: " + firearmArray[localID].Model;
        document.getElementById("oneCaliber").innerHTML = "Caliber: " + firearmArray[localID].Caliber;
        document.getElementById("oneClass").innerHTML = "Class: " + firearmArray[localID].Class;
        document.getElementById("oneOwned").innerHTML = firearmArray[localID].Owned;
        document.getElementById("oneWanted").innerHTML = firearmArray[localID].Wanted;
    });
    // end of page before show code *************************************************************************

});
// end of wait until document has loaded event  *************************************************************************

/**
 * function to add calibers to inputCaliber select list
 */
function generateCaliberInput() {
    let parentSelect = document.getElementById("inputCaliber");
    for (let i = 0; i < caliberArray.length; i++) {
        let caliberOption = document.createElement('option');
        caliberOption.value = caliberArray[i];
        caliberOption.innerHTML = caliberArray[i];
        parentSelect.appendChild(caliberOption);
    }
}

/**
 * function to generate list of slideshow images
 */
function generateSlidShow() {
    let parent = document.getElementById("slideShow");
    for (let i = 0; i < randomImagesArray.length; i++) {
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

    let blankTitle = document.createElement('div');
    blankTitle.id = 'blankTitle';
    blankTitle.classList.add('tableName');

    let manufacturerTitle = document.createElement('div');
    manufacturerTitle.id = 'manufacturerTitle';
    manufacturerTitle.classList.add('tableName');
    manufacturerTitle.innerHTML = 'Manufacturer';

    let modelTitle = document.createElement('div');
    modelTitle.id = 'modelTitle';
    modelTitle.classList.add('tableName');
    modelTitle.innerHTML = 'Model';

    let caliberTitle = document.createElement('div');
    caliberTitle.id = 'caliberTitle';
    caliberTitle.classList.add('tableName');
    caliberTitle.innerHTML = 'Caliber';

    let classTitle = document.createElement('div');
    classTitle.id = 'classTitle';
    classTitle.classList.add('tableName');
    classTitle.innerHTML = 'Class';

    let ownedTitle = document.createElement('div');
    ownedTitle.id = 'ownedTitle';
    ownedTitle.classList.add('tableName');
    ownedTitle.innerHTML = 'Owned?';

    let wantedTitle = document.createElement('div');
    wantedTitle.id = 'wantedTitle';
    wantedTitle.classList.add('tableName');
    wantedTitle.innerHTML = 'Wanted?';

    let titleRow = document.createElement('div');
    titleRow.classList.add('tableRow');

    titleRow.appendChild(blankTitle);
    titleRow.appendChild(manufacturerTitle);
    titleRow.appendChild(modelTitle);
    titleRow.appendChild(caliberTitle);
    titleRow.appendChild(classTitle);
    titleRow.appendChild(ownedTitle);
    titleRow.appendChild(wantedTitle);

    divFirearmList.appendChild(titleRow);


    // let ul = document.createElement('ul');
    firearmArray.forEach(function(element, ) { // use handy array forEach method

        let detailsButton = document.createElement('button');
        detailsButton.innerText = "details";
        detailsButton.classList.add("oneFirearm")
        detailsButton.setAttribute("data-parm", element.ID);

        let itemDetails = document.createElement('div');
        itemDetails.classList.add('tableValue');
        itemDetails.appendChild(detailsButton);

        let itemManufacturer = document.createElement('div');
        itemManufacturer.classList.add('tableValue');
        itemManufacturer.innerHTML = element.Manufacturer;

        let itemModel = document.createElement('div');
        itemModel.classList.add('tableValue');
        itemModel.innerHTML = element.Model;

        let itemCaliber = document.createElement('div');
        itemCaliber.classList.add('tableValue');
        itemCaliber.innerHTML = element.Caliber;

        let itemClass = document.createElement('div');
        itemClass.classList.add('tableValue');
        itemClass.innerHTML = element.Class;

        let itemOwned = document.createElement('div');
        itemOwned.classList.add('tableValue');
        itemOwned.innerHTML = element.Owned;

        let itemWanted = document.createElement('div');
        itemWanted.classList.add('tableValue');
        itemWanted.innerHTML = element.Wanted;

        let itemRow = document.createElement('div');
        itemRow.classList.add('tableRow');
        itemRow.appendChild(itemDetails);
        itemRow.appendChild(itemManufacturer);
        itemRow.appendChild(itemModel);
        itemRow.appendChild(itemCaliber);
        itemRow.appendChild(itemClass);
        itemRow.appendChild(itemOwned);
        itemRow.appendChild(itemWanted);

        divFirearmList.appendChild(itemRow);
    });

    // now we have the HTML done to display out list, 
    // next we make them active buttons
    // set up an event for each new li item, 
    var buttonArray = document.getElementsByClassName("oneFirearm");
    Array.from(buttonArray).forEach(function(element) {
        element.addEventListener('click', function() {
            // get that data-parm we added for THIS particular li as we loop thru them

            var parm = this.getAttribute("data-parm"); // passing in the record.Id
            console.log(parm);
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

/**
 * 
 * @param {*} whichType 
 */
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