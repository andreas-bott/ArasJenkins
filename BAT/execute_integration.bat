set containername=aras_container
set dbcontainername=aras_database
set dbcontainerip=172.18.80.10

set dockerrpouser=eu-de@SIMDOR0V33K3IMLOE1RM
set dockerrepopw=fcce73accbf4b261006daec8f0db88968640c39592f1d7c7e68da09648d0f886

docker login 100.125.7.25:20202 -u %dockerrpouser% -p %dockerrepopw%
docker pull 100.125.7.25:20202/aras/aras:latest

docker run -d --name %containername% --mac-address 00-15-5D-73-CC-02 --ip 172.18.80.11 100.125.7.25:20202/aras/aras:latest
docker container ls


ECHO "Show Container IP and Container ID"
FOR /F "tokens=* USEBACKQ" %%F IN (`docker inspect --format="{{.Id}}" %containername%`) DO (
SET arascontainerID=%%F
)
ECHO %arascontainerID%

FOR /F "tokens=* USEBACKQ" %%F IN (`docker inspect -f "{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" %containername%`) DO (
SET containerIP=%%F
)
ECHO %containerIP%

docker login 100.125.7.25:20202 -u %dockerrpouser% -p %dockerrepopw%
docker pull 100.125.7.25:20202/aras/aras_database:latest
docker run --name %dbcontainername% --net nat --ip %dbcontainerip% -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=1Secure*Password1' -e 'MSSQL_PID=Enterprise' -p 1433:1433 -d 100.125.7.25:20202/aras/aras_database:latest

FOR /F "tokens=* USEBACKQ" %%F IN (`docker inspect --format="{{.Id}}" %dbcontainername%`) DO (
SET dbcontainerID=%%F
)
ECHO %dbcontainerID%

docker cp c:\Users\Administrator\aras\InnovatorServerConfig.xml %arascontainerID%:"c:\Program Files (x86)\Aras\Innovator"

C:\Users\Administrator\aras\PackageImportExportUtilities\PackageImportExportUtilities\ConsoleUpgrade\ConsoleUpgrade.exe server=http://%containerIP%/InnovatorServer/ database=InnovatorSolutionsDocker login=admin password=innovator release=11.0 mfFile="C:\Jenkins\workspace\Aras Demo Jenkinsfile\aras_import_package\aras_import_package\imports.mf" import merge dir="C:\Jenkins\workspace\Aras Demo Jenkinsfile\aras_import_package\aras_import_package\imports.mf"

