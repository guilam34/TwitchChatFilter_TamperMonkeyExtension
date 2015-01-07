// ==UserScript==
// @name         Twitch Filter
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.twitch.tv/*
// @grant        none
// ==/UserScript==



var interval=null;
//var custom=0;
var emoji=0;
var link=0;
var alphaNum=0;
var caps=0;
var firstRun=localStorage.getItem("firstRun");

if(firstRun!==null)
{
	//custom=localStorage.getItem("custom");
    emoji=localStorage.getItem("emoji");
    link=localStorage.getItem("link");
    alphaNum=localStorage.getItem("alphaNum");
    caps=localStorage.getItem("caps");
}

$(document).ready(function()
{
	
    addOptions();
    //configureFilterBox();
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
			/*if(custom==1)
            {
            	if((chatText.indexOf(' the ')>=0 || chatText.indexOf('The ')>=0) && chatText!="Welcome to the chat room!")
                {
                     if(chatLine.is(":visible")){
                        chatLine.hide(1);
                    }
                }
            }*/
        
        	if(link==1)
            {
            	if((chatText.indexOf('http')>=0 || chatText.indexOf('www.')>=0) && chatText!="Welcome to the chat room!")
                {
                     if(chatLine.is(":visible")){
                        chatLine.hide(1);
                    }
                }
            }	
        
        	if(emoji==1)
            {
            	if((chatLine.find(".message").find("span")).length!==0 && chatText!="Welcome to the chat room!")
                {
                     if(chatLine.is(":visible")){
                        chatLine.hide(1);
                    }
                }
            }
        
        	if(alphaNum==1)
            {
                if((/[^a-zA-Z0-9!.\*_,\?\'\"\@\s\p{Punct}]/.test(chatText)) && chatText!="Welcome to the chat room!")
                {
                     if(chatLine.is(":visible")){
                        chatLine.hide(1);
                    }
                }
            }
        
        	if(caps==1)
            {
                if(chatText===chatText.toUpperCase())
                {
                     if(chatLine.is(":visible")){
                        chatLine.hide(1);
                    }
                }
            }
			
		});
}


/*function configureFilterBox(){
    if($('#filterBox').is(':visible'))
    {
        if(custom==1)
        {
        	$('#filterBox').prop('checked',true);
            interval=setInterval(filter, 100);
        }
    	$('#filterBox').click(function(){
            if($('#filterBox').is(':checked'))
            {
                interval=setInterval(filter, 100);
                custom=1;
                localStorage.setItem("custom",1);
            }
            else{
                clearInterval(interval);
                 localStorage.setItem("custom",0);
            }
        });
    }
    else{
    	setTimeout(configureFilterBox,50);
    }
}*/

function configureEmojiBox(){
    if($('#emojiBox').is(':visible'))
    {
        if(emoji==1)
        {
        	$('#emojiBox').prop('checked',true);
            interval=setInterval(filter, 100);
        }
    	$('#emojiBox').click(function(){
            if($('#emojiBox').is(':checked'))
            {
                interval=setInterval(filter, 100);
                emoji=1;
                 localStorage.setItem("emoji",1);
            }
            else{
                clearInterval(interval);
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
            interval=setInterval(filter, 100);
        }
    	$('#linkBox').click(function(){
            if($('#linkBox').is(':checked'))
            {
                interval=setInterval(filter, 100);
                link=1;
                 localStorage.setItem("link",1);
            }
            else{
                clearInterval(interval);
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
            interval=setInterval(filter, 100);
        }
    	$('#alphaNumBox').click(function(){
            if($('#alphaNumBox').is(':checked'))
            {
                interval=setInterval(filter, 100);
                alphaNum=1;
                 localStorage.setItem("alphaNum",1);
            }
            else{
                clearInterval(interval);
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
            interval=setInterval(filter, 100);
        }
    	$('#capsBox').click(function(){
            if($('#capsBox').is(':checked'))
            {
                interval=setInterval(filter, 100);
                caps=1;
                 localStorage.setItem("caps",1);
            }
            else{
                clearInterval(interval);
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
    	//$(".chat-colors").after("<p id='filterBoxContainer'><input type='checkbox' id='filterBox' class='ember-view ember-checkbox'> Custom Filter</p>");
        $(".chat-colors").after("<p id='emojiBoxContainer'><input type='checkbox' id='emojiBox' class='ember-view ember-checkbox'> No Emoticons</p>");
        $("#emojiBoxContainer").after("<p id='linkBoxContainer'><input type='checkbox' id='linkBox' class='ember-view ember-checkbox'> No Links</p>");
        $("#linkBoxContainer").after("<p id='capsBoxContainer'><input type='checkbox' id='capsBox' class='ember-view ember-checkbox'> No Caps</p>");
        $("#capsBoxContainer").after("<p id='alphaNumBoxContainer'><input type='checkbox' id='alphaNumBox' class='ember-view ember-checkbox'> Normal Text Only</p>");
    	
    }
    else{
    	setTimeout(addOptions,50);
    }
}







