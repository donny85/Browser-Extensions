//================================================
/*

Proper Menubar
Add the black menubar below the address bar. To get easy and fast access to all your Google products.
Copyright (C) 2016 Stefan vd
www.stefanvd.net

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================

function $(id) { return document.getElementById(id); }

var addbar = null;

function toggleoff(){
  chrome.tabs.query({active: true}, function (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    // Send a request to the content script.
                    chrome.storage.local.set({ "addbar": false});
                    chrome.tabs.sendMessage(tabs[i].id, {action: "addremove"});
                    $("turnoff").style.display = "none";
                    $("turnon").style.display = "";
                    }
                }
            );
}
function toggleon(){
  chrome.tabs.query({active: true}, function (tabs) {
                for (var i = 0; i < tabs.length; i++) {
                    // Send a request to the content script.
                    chrome.storage.local.set({ "addbar": true});
                    chrome.tabs.sendMessage(tabs[i].id, {action: "addremove"});
                    $("turnoff").style.display = "";
                    $("turnon").style.display = "none";
                    }
                }
            );
}
document.addEventListener('DOMContentLoaded', function () {
chrome.storage.local.get(['addbar'], function(items){
if(items['addbar']){addbar = items['addbar'];}if(!addbar)addbar = false;
if(addbar == true){
  $("turnoff").style.display = "";
  $("turnon").style.display = "none";
} else{
  $("turnoff").style.display = "none";
  $("turnon").style.display = "";
}
});

// Toggle on
$("turnoff").addEventListener('click', function() {toggleoff()});
// Toggle off
$("turnon").addEventListener('click', function() {toggleon()});

$("opendonate").addEventListener('click', function() {window.open(donatewebsite)});
$("openrate").addEventListener('click', function() {window.open(writereview)});
$("openoptions").addEventListener('click', function() {window.open(chrome.extension.getURL('options.html'))});

$("opensupport").addEventListener('click', function() {window.open(linksupport)});
$("openwelcomeguide").addEventListener('click', function() {window.open(linkguide)});
$("openyoutube").addEventListener('click', function() {window.open(linkyoutube)});

var currentencodeurl = encodeURIComponent(financetoolbarproduct);
$("opengoogleplus").addEventListener('click', function() {window.open('https://plus.google.com/share?ur\l=' + currentencodeurl + '', 'Share to Google+','width=600,height=460,menubar=no,location=no,status=no')});
$("openfacebook").addEventListener('click', function() {window.open("https://www.facebook.com/sharer.php?u="+ financetoolbarproduct + "&t=Try this out, I check my stocks with this Finance Toolbar browser extension!", 'Share to Facebook','width=600,height=460,menubar=no,location=no,status=no')});
$("opentwitter").addEventListener('click', function() {window.open("https://twitter.com/share?url=" + currentencodeurl + "&text=Try this out, I check my stocks with this Finance Toolbar browser extension!", 'Share to Twitter','width=600,height=460,menubar=no,location=no,status=no')});
});