/*var firstTabEl = document.querySelector('#planTab li:last-child a')
var firstTab = new bootstrap.Tab(firstTabEl)
firstTab.show()

*/
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})


function myFunction() {
    console.log("클릭됨")
}

