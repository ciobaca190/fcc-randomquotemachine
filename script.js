const newQuote = () => {
  $.getJSON("https://talaikis.com/api/quotes/random/", (data) => {
    $("#quote").text(data.quote);
    $(".author").text(`- ${data.author}`);
  });
};

const tweet = () => {
  let quote = $("#quote").text(),
      author = $(".author").text(),
      message = `"${quote}" ${author}`;
  message = encodeURIComponent(message);
  window.open(`https://twitter.com/intent/tweet?text=${message}`, "_blank");
};

$(document).ready(() => {
  newQuote();
});