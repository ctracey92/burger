//Function to attach event handlers AFTER page is loaded, and elements are displayed/
$(function(){
//Function to change devoured status
    $(".deleteBtn").on("click",function(event){
        var id = $(this).attr("attr");
        id = parseInt(id);
        console.log(id);
        
        $.ajax("/api/burgers/" + id,{
            type: "PUT",
            data: true
        }).then(
            function(){
                console.log("Burger was devoured")
                location.reload();
            }
        )
    })
//Function to add a burger
    $("#burgerSubmit").on("click",function(event){
        event.preventDefault();

        var newBurger = {name: $("#burger").val().trim()}
        console.log(newBurger)

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("This worked, burger added");
            location.reload();
        })
    })
})