'*******************************************************************
'Action name: 03_Add_Item
'Checkpoint: CP_Verwendung
'            CP_Messzeitpunkt
'*******************************************************************

'Klicke auf Icon für Neue Anlage
Browser("Aras Innovator").Page("Aras Innovator").WebElement("Icon_Add_New").Click
'manuell erzeugte Object Repository Elemente mit Parametrisierung:
'Checkpoint auf Hintergrundfarbe des Frames, hier die Farbe magenta hinter dem Label Vorgang:
Browser("Aras Innovator").Page("Aras Innovator").Frame("Frame_Vorgang").Check CheckPoint("CP_Vorgang_Magenta") @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf8.xml_;_
'Eingabe des parametrisierten Textes im Textfeld für Verwendung
Browser("Aras Innovator").Page("Aras Innovator").WebEdit("TB_Verwendung").Set DataTable("Verwendung", dtGlobalSheet)
'Frarbabfrage für manuellen Checkpoint:
print Browser("Aras Innovator").Page("Aras Innovator").WebEdit("TB_Verwendung").GetROProperty("style/background-color")
'Eingabe des parametrisierten Datums im Textfeld für Messzeitpunkt:
Browser("Aras Innovator").Page("Aras Innovator").WebEdit("TextBox_Messzeitpunkt").Set DataTable("Messzeitpunkt", dtGlobalSheet)
'Klickt das Speicher Icon in der Toolbar
Browser("Aras Innovator").Page("Aras Innovator").WebElement("ToolbarBtn_Save").Click
'Checkpoints: Überprüfung des eingegebenen Textes auf der Übersichtseite
Browser("Aras Innovator").Page("Aras Innovator").Frame("Frame").WebElement("Verwendung").Check CheckPoint("CP_Verwendung") @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Aras Innovator").Page("Aras Innovator").Frame("Frame").WebElement("Messzeitpunkt").Check CheckPoint("CP_Messzeitpunkt") @@ script infofile_;_ZIP::ssf4.xml_;_

'Deskriptiver Ansatz
'Bsp. für Textfeld:
'Browser("Aras Innovator").Page("Aras Innovator").WebEdit("xpath:=//*[@id='6E812F259DF3457C9C75866726866B65']").Set "Deskr"
'Bsp. für Toolbar Icon
'Browser("Aras Innovator").Page("Aras Innovator").WebElement("xpath:=//*[@id='top_toolbar']/div/div/div[1]/span[21]").Click

'*******************************************************************
'End Of Action :  03_Add_Item
'*******************************************************************
