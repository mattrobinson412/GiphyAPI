const submitBtn = $("#submission");
const gifBoard = $("#gif-board");
const removeBtn = $("#removal");


$(submitBtn).on("click", async function (e) {
    e.preventDefault();

    let searchTerm = $("#GiphySearch").val();
  $("#GiphySearch").val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(res.data);
});


function addGif (res) {
    let numResults = res.data.length;
    if (numResults) {
      let randomIndex = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIndex].images.original.url,
        class: "w-100",
        id: "new-gif"
      });
      $newCol.append($newGif);
      gifBoard.append($newCol);
    }
}

$(removeBtn).on("click", function (e) {
    e.preventDefault();
    $("#new-gif").remove();
});
    
