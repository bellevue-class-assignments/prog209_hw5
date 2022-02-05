document.addEventListener("DOMContentLoaded", function(event) {

    let testList = document.getElementById("testList")
    for (let i = 0; i < 10; i++) {
        createListItem("#testList", i);
    }


    // page before show code *************************************************************************
    $(document).on("pagebeforeshow", "#list", function(event) {
        createList();
    });
});

function createListItem(listItemId, listItemTest) {
    let ulTarget = document.querySelector(listItemId);
    let inputListItem = document.createElement('li');
    inputListItem.classList.add("test");
    inputListItem.appendChild(document.createTextNode(listItemTest));
    ulTarget.appendChild(inputListItem);
}