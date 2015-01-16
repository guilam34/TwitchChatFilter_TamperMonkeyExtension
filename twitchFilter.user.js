// ==UserScript==
// @name         Twitch Filter
// @namespace    http://your.homepage/
// @version      2.0
// @description  Twitch Chat Filter
// @author       Guillaume Lam
// @match        http://www.twitch.tv/*
// @grant        none
// ==/UserScript==



var emoji=0;
var link=0;
var alphaNum=0;
var caps=0;
var firstRun=localStorage.getItem("firstRun");
var style = $('<style>.chat-line { display:none; }</style>');
$('html > head').append(style);

if(firstRun!==null)
{
    emoji=localStorage.getItem("emoji");
    link=localStorage.getItem("link");
    alphaNum=localStorage.getItem("alphaNum");
    caps=localStorage.getItem("caps");
}

$(document).ready(function()
{	
    addOptions();
    setInterval(filter, 100);
    configureEmojiBox();
    configureLinkBox();
    configureAlphaNumericBox();
    configureCapsBox();
    localStorage.setItem("firstRun","true");
    
});

function filter(){
    $(".chat-line").each(function(){
			var chatLine=$(this);
			var chatText=chatLine.find(".message").text().trim();
        
        if(link==1)
            {
            	if((chatText.indexOf('http')>=0 || chatText.indexOf('www.')>=0) && chatText!="Welcome to the chat room!")
                {        
                    return;                    
                }
            }	
        
       	if(emoji==1)
            {
            	if((chatLine.find(".message").find("img")).length!==0 && chatText!="Welcome to the chat room!")
                {                    
                    return;
                }
            }
        
       	if(alphaNum==1)
            {
                if((/[^a-zA-Z0-9!.\*_,\?\'\"\@\s\p{Punct}]/.test(chatText)))
                {                     
                    return;                    
                }
            }
        
       	if(caps==1)
            {
                if(chatText===chatText.toUpperCase())
                {                    
                    return;                    
                }
            }
			chatLine.show(1);
	});
}

function configureEmojiBox(){
    if($('#emojiBox').is(':visible'))
    {
        if(emoji==1)
        {
        	$('#emojiBox').prop('checked',true);          
        }
    	$('#emojiBox').click(function(){
            if($('#emojiBox').is(':checked'))
            {
                emoji=1;
                localStorage.setItem("emoji",1);
            }
            else{
                emoji=0;
                localStorage.setItem("emoji",0);
            }
        });
    }
    else{
    	setTimeout(configureEmojiBox,50);
    }
}

function configureLinkBox(){
    if($('#linkBox').is(':visible'))
    {
        if(link==1)
        {
        	$('#linkBox').prop('checked',true);
        }
    	$('#linkBox').click(function(){
            if($('#linkBox').is(':checked'))
            {
                link=1;
                localStorage.setItem("link",1);
            }
            else{
                link=0;
                localStorage.setItem("link",0);
            }
        });
    }
    else{
    	setTimeout(configureLinkBox,50);
    }
}

function configureAlphaNumericBox(){
    if($('#alphaNumBox').is(':visible'))
    {
        if(alphaNum==1)
        {
        	$('#alphaNumBox').prop('checked',true);
        }
    	$('#alphaNumBox').click(function(){
            if($('#alphaNumBox').is(':checked'))
            {
                alphaNum=1;
                localStorage.setItem("alphaNum",1);
            }
            else{
                alphaNum=0;
                localStorage.setItem("alphaNum",0);
            }
        });
    }
    else{
    	setTimeout(configureAlphaNumericBox,50);
    }
}

function configureCapsBox(){
    if($('#capsBox').is(':visible'))
    {
        if(caps==1)
        {
        	$('#capsBox').prop('checked',true);
        }
    	$('#capsBox').click(function(){
            if($('#capsBox').is(':checked'))
            {
                caps=1;
                localStorage.setItem("caps",1);
            }
            else{
                caps=0;
                localStorage.setItem("caps",0);
            }
        });
    }
    else{
    	setTimeout(configureCapsBox,50);
    }
}


function addOptions(){
    if($('.chat-menu-content').is(':visible')){
        $(".chat-colors").after("<p id='emojiBoxContainer'><input type='checkbox' id='emojiBox' class='ember-view ember-checkbox'> No Emoticons</p>");
        $("#emojiBoxContainer").after("<p id='linkBoxContainer'><input type='checkbox' id='linkBox' class='ember-view ember-checkbox'> No Links</p>");
        $("#linkBoxContainer").after("<p id='capsBoxContainer'><input type='checkbox' id='capsBox' class='ember-view ember-checkbox'> No Caps</p>");
        $("#capsBoxContainer").after("<p id='alphaNumBoxContainer'><input type='checkbox' id='alphaNumBox' class='ember-view ember-checkbox'> Normal Text Only</p>");
    	
    }
    else{
    	setTimeout(addOptions,50);
    }
}







