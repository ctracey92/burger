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
})