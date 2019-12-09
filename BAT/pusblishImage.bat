set containername=aras_container
set dbcontainername=aras_database
set dbcontainerip=172.18.80.10

set dockerrpouser=eu-de@SIMDOR0V33K3IMLOE1RM
set dockerrepopw=fcce73accbf4b261006daec8f0db88968640c39592f1d7c7e68da09648d0f886

ECHO "Show Container IP and Container ID"
FOR /F "tokens=* USEBACKQ" %%F IN (`docker inspect --format="{{.Id}}" %containername%`) DO (
SET arascontainerID=%%F
)
ECHO %arascontainerID%


FOR /F "tokens=* USEBACKQ" %%F IN (`docker inspect --format="{{.Id}}" %dbcontainername%`) DO (
SET dbcontainerID=%%F
)
ECHO %dbcontainerID%


docker container stop %dbcontainerID% %arascontainerID%


docker login 100.125.7.25:20202 -u %dockerrpouser% -p %dockerrepopw%

docker commit %arascontainerID% 100.125.7.25:20202/aras/aras:latest
docker commit %arascontainerID% 100.125.7.25:20202/aras/aras:1.1.%BUILD_NUMBER%
docker commit %dbcontainerID% 100.125.7.25:20202/aras/aras_database:latest
docker commit %dbcontainerID% 100.125.7.25:20202/aras/aras_database:1.1.%BUILD_NUMBER%

docker push 100.125.7.25:20202/aras/aras:latest
docker push 100.125.7.25:20202/aras/aras:1.1.%BUILD_NUMBER%
docker push 100.125.7.25:20202/aras/aras_database:latest
docker push 100.125.7.25:20202/aras/aras_database:1.1.%BUILD_NUMBER%



docker image rm -f 100.125.7.25:20202/aras/aras:1.1.%BUILD_NUMBER%
docker image rm -f 100.125.7.25:20202/aras/aras_database:1.1.%BUILD_NUMBER%
docker container rm %dbcontainerID% %arascontainerID%

ECHO %BUILD_NUMBER%