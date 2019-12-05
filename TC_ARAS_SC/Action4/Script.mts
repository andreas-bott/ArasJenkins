'*******************************************************************
'Action name: 04_Delete_Item
'*******************************************************************

'Überspringt die aktuelle Action:
'exitAction
'Auswahl des angelegten Elementes in der Tabelle
Browser("Aras Innovator").Page("Aras Innovator").Frame("Frame").WebElement("Cell_Verwendung").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Klickt auf das Lösch Icon
Browser("Aras Innovator").Page("Aras Innovator").WebElement("ToolbarIcon_Delete").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Logout aus dem System
Browser("Aras Innovator").Page("Aras Innovator").Link("Logout").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Schließt alle Browserfenster
Browser("Browser").CloseAllTabs @@ hightlight id_;_17371876_;_script infofile_;_ZIP::ssf7.xml_;_

'*******************************************************************
'End Of Action :  04_Delete_Item
'End Of Script :  TC_ARAS_SC
'*******************************************************************

