var _prevOnload = window.onload;

window.onload = function () {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-chinese")[0];
    switchLang.onclick = function () {
        var href = window.location.href;
        window.location.href = href.replace('gustaavv.github.io/en', 'gustaavv.github.io');
        if (typeof (_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}
