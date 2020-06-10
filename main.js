var div = document.createElement('div');
document.body.appendChild(div);
document.body.onmousemove = function(e) {
    if (flag) {
        var deltaX = e.clientX - lastX;
        var deltaY = e.clientY - lastY;
        console.log(deltaX, deltaY);

        var top = parseInt(div.style.top) || 0;
        var left = parseInt(div.style.left) || 0;
        var resultX = left + deltaX;
        var resultY = top + deltaY;
        if (resultX < 0) resultX = 0;
        if (resultY < 0) resultY = 0
        div.style.top = resultY + 'px';
        div.style.left = resultX + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
    }
}

var flag = false;
var lastX;
var lastY;

div.onmousedown = function(e) {
    lastX = e.clientX;
    lastY = e.clientY;
    flag = true;
}
document.onmouseup = function() {
    flag = false;
}
