
pipeline{
    agent any
    //cleanWs()
    //checkout scm
    environment {
        PATH = "C:\\WINDOWS\\SYSTEM32"
    }
    stages{
        stage('Build') {
            steps {
                bat 'echo %PATH%'
                echo 'Building..'
                //bat "C:\\Users\\Administrator\\aras\\Aras Demo\\execute_integration.bat"
                bat 'start cmd.exe /c C:\\Jenkins\\workspace\\BAT\\execute_integration.bat'
            }
        }
        stage('RunUFTTestFromFS'){
            steps {
                echo 'Running Tests..1'
                /*node('ARAS Demo Applikation Server'){
                    TC_ARAS_SC
                }*/
            }
        }
        stage('PublishImage'){
            steps{
                echo 'Publishing Image..'
                //bat "C:\Users\Administrator\aras\Aras Demo\pusblishImage.bat"
                //bat "C:\\Jenkins\\workspace\\BAT\\pusblishImage.bat"
            }
        }
        stage('Publish Test Results'){
            steps{
                echo 'Publishing test results'
                /*agent{
                    loadRunnerTest{
                        archiveTestResultsMode: "Archive test report for failed tests"
                    }
                }*/
            }
        }
        stage('Publish over SSH'){
            steps{
                echo 'Pubishing over SSH..'
                /*script {
                    sshPublisher(
                        continueOnError: false, failOnError: true,
                        publishers: [
                            sshPublisherDesc(
                                //configName: "${env.SSH_CONFIG_NAME}",
                                configName: "administrator@80.158.38.63",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                    sourceFiles: "C:\Users\Administrator\aras\aras_deploy\puttyssh.bat",
                                    removePrefix: "",
                                    remoteDirectory: "",
                                    execCommand: "C:\Users\Administrator\Aras_Demo\deployOnStage.bat"
                                    )
                                ]
                            )
                        ]
                    )
                }*/
            }
        }
    }
}