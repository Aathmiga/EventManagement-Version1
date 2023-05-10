/*(function() {    
    var dialog = document.getElementById('myFirstDialog');    
    document.getElementById('show').onclick = function() {    
        dialog.show();    
    };    
    document.getElementById('hide').onclick = function() {    
        dialog.close();    
    };    
})();   */
/*
const dropdown = document.getElementById("dropdown");
const contentContainer = document.getElementById("contentContainer");

dropdown.addEventListener("change", function() {
  switch (dropdown.value) {
    case "option1":
      contentContainer.innerHTML =`
      <h5>Item Contains</h5>
                                    <ul>
                                        <li>Idli</li>
                                        <li>Dosa</li>
                                        
                                        <li>Banana</li>
                                    </ul>
      
      `
      break;
    case "option2":
      contentContainer.innerHTML =`
      <h5>Item Contains</h5>
                                    <ul>
                                        
                                        <li>Vada</li>
                                        <li>Ven pongal</li>
                                        <li>Kesari</li>
                                        <li>Banana</li>
                                    </ul>
      
      `
      break;
    case "option3":
      contentContainer.innerHTML  =`
      <h5>Item Contains</h5>
                                    <ul>
                                        <li>Idli</li>
                                        <li>Dosa</li>
                                        <li>Sambar</li>
                                        <li>Chutney</li>
                                        <li>Vada</li>
                                        <li>Ven pongal</li>
                                        <li>Kesari</li>
                                        <li>Banana</li>
                                    </ul>
      
      `
      break;
      
  }
});

const drop = document.getElementById("drop");
const contentCon = document.getElementById("contentCon");

dropdown.addEventListener("change", function() {
  switch (drop.value) {
    case "select1":
      contentCon.innerHTML =`
      <h5>Item Contains</h5>
                                    <ul>
                                        <li>Idli</li>
                                        <li>Dosa</li>
                                        
                                        <li>Banana</li>
                                    </ul>
      
      `
      break;
    case "breakfast1":
      contentCon.innerHTML =`
      <h5>Item Contains</h5>
                                    <ul>
                                        
                                        <li>Vada</li>
                                        <li>Ven pongal</li>
                                        <li>Kesari</li>
                                        <li>Banana</li>
                                    </ul>
      
      `
      break;
    case "lunch1":
      contentCon.innerHTML  =`
      <h5>Item Contains</h5>
                                    <ul>
                                        <li>Idli</li>
                                        <li>Dosa</li>
                                        <li>Sambar</li>
                                        <li>Chutney</li>
                                        <li>Vada</li>
                                        <li>Ven pongal</li>
                                        <li>Kesari</li>
                                        <li>Banana</li>
                                    </ul>
      
      `
      break;
      
  }
});*/
$(document).ready(function() {
  $('#increase').click(function() {
    var quantity = parseInt($('#quantity').val());
    $('#quantity').val(quantity + 1);
  });

  $('#decrease').click(function() {
    var quantity = parseInt($('#quantity').val());
    if (quantity > 0) {
      $('#quantity').val(quantity - 1);
    }
  });
});

