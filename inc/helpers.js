function GetRandomImageIndex()
{
    return Math.floor(Math.random() * 2);
}

function LoadRandomLeftImage()
{
    var leftImages = ["Robert.jpg", "Mike.jpg"];
    var imgIndex = GetRandomImageIndex();

    $('#leftSpacer').html("<img src='images/" + leftImages[imgIndex] + "'>");
    $('#leftSpacer').fadeIn('slow', null);
}

function LoadRandomRightImage()
{
    var rightImages = ["Andre.jpg", "Samuel.jpg"];
    var imgIndex = GetRandomImageIndex();

    $('#rightSpacer').html("<img src='images/" + rightImages[imgIndex] + "'>");
    $('#rightSpacer').fadeIn('slow', null);
}
