function GetRandomImageIndex()
{
    return Math.floor(Math.random() * 2);
}

function LoadRandomLeftImage()
{
    var leftImages = ["left_image.png"];
    var imgIndex = GetRandomImageIndex();

    $('#leftSpacer').html("<img src='images/" + leftImages[0] + "'>");
    $('#leftSpacer').fadeIn('slow', null);
}

function LoadRandomRightImage()
{
    var rightImages = ["right_image.png"];
    var imgIndex = GetRandomImageIndex();

    $('#rightSpacer').html("<img src='images/" + rightImages[0] + "'>");
    $('#rightSpacer').fadeIn('slow', null);
}
