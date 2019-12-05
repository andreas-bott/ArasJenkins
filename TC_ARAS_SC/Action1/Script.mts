'*******************************************************************
	'Script: TC_ARAS_SC
	'Script Summary: Anlage eines Listeneintrags für BMW unter dem Verwendung
	'Action name: 01_Login
	'Author: Robin Donat (r.donat@t-systems.com)
	'Created on: 02.10.2019
	'Last Updated On: 07.10.2019
	'Parameter summary: Verwendung (in Action 03_Add_Item)
	'                   Messzeitpunkt (in Action 03_Add_Item)
	'*******************************************************************

'Startet den Login Prozess
SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "http://172.18.80.11/InnovatorServer/Client/X-salt=std_11.0.0.6920-X/default.aspx"
'Eingabe des Nutzernamens
Browser("Aras Innovator Login").Page("Aras Innovator Login").Frame("main").WebEdit("username").Set "admin" @@ script infofile_;_ZIP::ssf1.xml_;_
'Eingabe des Passworts
Browser("Aras Innovator Login").Page("Aras Innovator Login").Frame("main").WebEdit("password").SetSecure "5d9445b62c27ed5f5cb6dd2a76c39d514b156757b47666f7" @@ script infofile_;_ZIP::ssf2.xml_;_
'Auswahl der entsprechenden Datenbank
Browser("Aras Innovator Login").Page("Aras Innovator Login").Frame("main").WebList("ListSelectDB").Select "InnovatorSolutionsDocker"
'Bestätigung des Login Buttons
Browser("Aras Innovator Login").Page("Aras Innovator Login").Frame("main").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_

	'*******************************************************************
	'End Of Action :  01_Login
	'*******************************************************************
