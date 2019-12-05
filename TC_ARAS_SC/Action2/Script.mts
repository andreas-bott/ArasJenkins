'*******************************************************************
'Action name: 02_Navigation
'Checkpoint: CP_Verwendung
'*******************************************************************

'Maximiert das Programmfenster
Browser("Aras Innovator").Maximize
'Klick auf das manuell angelegte Test Item im Navigationsbaum
Browser("Aras Innovator").Page("Aras Innovator").WebElement("Nav_Test").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf4.xml_;_
'Checkpoint und Klick auf die Unterkategorie Vorgänge
Browser("Aras Innovator").Page("Aras Innovator").WebElement("Vorgänge").Check CheckPoint("Vorgänge") @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Aras Innovator").Page("Aras Innovator").WebElement("Vorgänge").Click @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf6.xml_;_
'erster konstanter Überprüfungspunkt auf den Spaltennamen der angezeigten Tabelle
Browser("Aras Innovator").Page("Aras Innovator").Frame("Frame").WebElement("Verwendung").Check CheckPoint("CP_Verwendung") @@ script infofile_;_ZIP::ssf3.xml_;_

	'*******************************************************************
	'End Of Action :  02_Navigation
	'*******************************************************************
