$("#addShoe").click((e) => {
    e.preventDefault();
    let shoeInput = $("#shoeInput").val();
    shoeInput = shoeInput +  " shoe";
    console.log("shoe", shoeInput);
    
    getGifs(shoeInput);
    let brand = shoeInput.split(" ")[0]
    let button = $(`<button data-brand=${brand}>`).text(brand).appendTo("#shoeButton");
    button.click((e) => {
        let target = e.target; 
        let brand = $(target).data('brand')
        brand = brand + " shoe";
        getGifs(brand);
    })

    
  });

  let topics = ["nikes", "vans", "adidas"];
  for (let i = 0; i < topics.length; i++) {
    console.log(`Topic: ${topics[i]}`);
    let button = $(`<button data-brand=${topics[i]}>`).text(topics[i]).appendTo("#shoeButton");
    button.click((e) => {
        let target = e.target; 
        let brand = $(target).data('brand')
        brand = brand + " shoe";
        getGifs(brand);
    })

}

function getGifs(shoeInput) {
    $("#giphysGoHere").empty();
    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=5Fc5u4OGHB3S7l8VNXQpaa2IDRjrzUkF&q=${shoeInput}&limit=10&offset=0&rating=G&lang=en`;
    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        let data = response.data; 
        for(let i = 0; i < data.length; i++) {
          let image = data[i].images.original.url;
          $("#giphysGoHere").append(
          $(
            `<img src=${image} />`
          )
        );
        }
        
      });
}