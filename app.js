// Budget Controller
var budgetController = (function() {})();

// UI Controller
var UIController = (function() {
  return {
    getinput: function() {
      var type = document.querySelector(".add__type").value; // Value = inc || exp
      var description = document.querySelector(".add__description").value;
      var value = document.querySelector(".add__value").value;
    }
  };
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add the item to the budgetController
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(evenet) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
