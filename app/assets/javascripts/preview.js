$(document).ready(function(){
  //メインサムネイル
  $('.cover-image-upload').each(function() {
    var postImage = $(this).find('input[type=file]');
    var $preview = $(".cover-image-upload");
    postImage.change(function(){
    var file = postImage[0].files[0];
    var reader = new FileReader();
    reader.onload = (function(flle){
      return function(e){
        //既存の画像を消す
        $preview.empty();
        //ここから表示
        $preview.append($('<img>').attr({
          src: e.target.result,
          width: "690px",
          heigth: "500px",
          class: "cover-image-upload",
          title: file.name
        }));
      };
    })(file);

    reader.readAsDataURL(file);

    });
  });
  //サブサムネイル
  $('.image-upload').each(function(){
    var subImages = $(this).find('input[type=file]');
    var subPreview = $(this).find(".sub_preview");
    subImages.change(function(i){

    var subfile = subImages[0].files[0]
    var subImage = subImages + subfile
    var reader = new FileReader();
      reader.onload = (function(subImage){
      return function(e){

        //既存の画像を消す
        subPreview.empty();
        //ここから表示
        subPreview.append($('<img>').attr({
          src: e.target.result,
          width: "660px",
          heigth: "200px",
          class: "image-upload",
          title: subImage.name
        }));
      };

    })(subImage);

    reader.readAsDataURL(subfile);

    });
  });
});
