$(document).ready(function(){
  $('.cover-image-upload').each(function() {
    var postImage = $(this).find('input[type=file]');
    var $preview = $(".preview");
    postImage.change(function(){
    var file = postImage[0].files[0];
    console.log(file)
    var reader = new FileReader();
    reader.onload = (function(flle){
      return function(e){
        //既存の画像を消す
        $preview.empty();
        //ここから表示
        $preview.append($('<img>').attr({
          src: e.target.result,
          width: "100%",
          heigth: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);

    reader.readAsDataURL(file);

    });
  });
});
