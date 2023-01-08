window.onload = function()
{
    try
    {
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.getElementsByClassName('loginform')[0].remove();
        document.getElementsByClassName('py-3')[0].remove();

        var eduvos = document.createElement("h1");
        eduvos.id = "eduvosTitle";
        eduvos.style = "font-size: 200px; font-family: Sans-serif; text-align: center; font-weight: 100; letter-spacing: .3em; position: absolute; top: 20%; left: 0px; right: 0px; color: white";
        eduvos.innerText = "Eduvos";

        var loginBtn = document.createElement("div");
        loginBtn.id = "loginBtn";
        loginBtn.style = "cursor: pointer; z-index: 999; position: absolute; bottom: 20%; width: 250px; height: 50px; left: calc(50% - 250px/2); outline: 2px solid white; color: white;";

        var loginBtnLabel = document.createElement("div");
        loginBtnLabel.id = "loginBtnLabel";
        loginBtnLabel.innerText = "LOGIN"
        loginBtnLabel.style = "z-index: 1000; letter-spacing: 1em; color: white; font-size: 20px; font-family: monospace; text-align: center; padding-top: 7px;";

        loginBtn.onmouseenter = function()
        {
            loginBtn.style.width = "300px";
            loginBtn.style.left = "calc(50% - 300px/2)";
            loginBtn.style.transition = "all .2s";
        }

        loginBtn.onclick = function()
        {
            location.href = "https://mylms.eduvos.com/auth/oidc";
        }

        loginBtn.onmouseleave = function()
        {
            loginBtn.style.width = "275px";
            loginBtn.style.left = "calc(50% - 275px/2)";
            loginBtn.style.transition = "all .2s";
        }

        loginBtn.appendChild(loginBtnLabel);
        document.body.appendChild(loginBtn);
        document.body.appendChild(eduvos);
    }
    catch
    {

    }

    try
    {
        document.getElementById('page').style.background = "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(https://images.hdqwalls.com/wallpapers/horizon-zero-dawn-game-art-4k-3h.jpg)";
        document.getElementById('page').style.backgroundSize = "cover";
    }
    catch 
    {

    }

    try {
        document.body.style.overflowX = "hidden";
        document.getElementById('loginbtn').style.backgroundColor = "#451115";
        document.getElementById('loginbtn').style.border = "none";
        document.getElementById('page-login-index').style.background = "url(https://media.tenor.com/2kv4Vx1XxEQAAAAC/happy-birthday.gif)";
        document.getElementById('page-login-index').style.backgroundSize = "cover";
    }
    catch
    {

    }
    
    try {
        document.getElementsByClassName('state-visible"')[0].style.borderRadius = "5px";
    }
    catch
    {

    }

    try {
        document.getElementById('buttonhidesec0').remove();
        document.getElementById('nav-drawer').style.backgroundColor = "#1f0506";
        document.getElementById('page-footer').remove();
        document.getElementById('section-0').remove();
    }
    catch
    {

    }
    
    try {
        var navItems = document.getElementsByClassName('toggle-submenu');
        var cardTitles = document.getElementsByClassName('photo-tile-text');
        var subNavList = document.getElementsByClassName('list-group-item list-group-item-action  show');
        var subNavList2 = document.getElementsByClassName('list-group-item list-group-item-action');

        for (var i = 0; i < cardTitles.length; i++) 
        {
            cardTitles[i].childNodes[1].style.backgroundColor = "#ba7381";
            cardTitles[i].childNodes[1].style.fontFamily = "monospace";
            cardTitles[i].style.height = "100%";

            cardTitles[i].childNodes[1].style.height = "60px";
            cardTitles[i].parentNode.parentNode.parentNode.style.boxShadow = "none";
            cardTitles[i].parentNode.parentNode.parentNode.style.border = "none";
            cardTitles[i].parentNode.parentNode.parentNode.style.borderRadius = "5px";
            cardTitles[i].parentNode.parentNode.parentNode.style.background = "none";
            cardTitles[i].parentNode.parentNode.parentNode.style.height = "0";
            cardTitles[i].parentNode.parentNode.parentNode.style.marginBottom = "100px";
        }
    }
    catch
    {

    }

    try {
        for (var i = 0; i < subNavList.length; i++) 
        {
            subNavList[i].style.backgroundColor = "#621d23";
        }

        for (var i = 0; i < subNavList2.length; i++) 
        {
            subNavList2[i].style.backgroundColor = "#621d23";
        }

        for (var i = 0; i < navItems.length; i++) 
        {
            navItems[i].style.backgroundColor = "#1f0506";
        }
    }
    catch 
    {

    }
    
    try {
        document.getElementsByClassName('header-logo')[1].style.background = "url(https://i.pinimg.com/originals/89/6e/0a/896e0ad35109cb86273693350ccdd559.png)";
        document.getElementsByClassName('header-logo')[1].childNodes[1].remove();
        document.getElementsByClassName('page-aside-switch')[0].style.background = "#1f0506"

        document.getElementsByClassName('page-title')[0].style.color = "white";
        document.getElementsByClassName('page-title')[0].style.textAlign = "center";
        document.getElementsByClassName('page-title')[0].style.position = "absolute";
        document.getElementsByClassName('page-title')[0].style.fontWeight = "600";
        document.getElementsByClassName('page-title')[0].style.fontSize = "40px";
        document.getElementsByClassName('page-title')[0].style.width = "100vw";
        document.getElementsByClassName('page-title')[0].style.left = "calc(50% - 100vw/2)";
        document.getElementsByClassName('breadcrumb')[0].remove(); 
        document.getElementsByClassName('toggle-submenu list-group-item list-group-item-action active')[0].style.backgroundColor = "#9b4551";
        document.getElementsByClassName('site-menubar-footer d-flex align-items-center')[0].childNodes[1].style.backgroundColor = "#9d4653";
    }
    catch
    {
        
    }
    
    try {
        document.getElementsByClassName('navbar-brand')[1].style.backgroundColor = "#1f0506";
        document.getElementsByClassName('navbar-options')[0].style.backgroundColor = "#1f0506";
        document.getElementsByClassName('fixed-top navbar')[1].style.boxShadow = "none";
        document.getElementsByClassName('list-group border-top')[0].remove();
    }
    catch
    {

    }
}