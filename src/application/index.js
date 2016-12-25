const arr = [ 1, 2, 3, 4, 5 ];
arr.map(item => {
    const dom = $(`<p>${item}</p>`);
    dom.appendTo(".myweb");
    // $(".myweb").append(dom);
    console.log("ooo", $(".myweb"));
});
