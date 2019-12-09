
pipeline{
    agent any
    stages{
        stage('Build') {
            steps {
                echo 'Building..'
                bat 'start cmd.exe /c C:\\Jenkins\\workspace\\BAT\\execute_integration.bat'
            }
        }
        stage('RunUFTTestFromFS'){
            agent { 
                //label 'master'
                label 'ARAS Demo Applikation Server'
            }
            steps {
                echo 'Running Tests..'
                /*node('ARAS Demo Applikation Server'){
                    TC_ARAS_SC
                }*/
                //node('master'){// The name of the node in which to run the test.
                    uftScenarioLoad archiveTestResultsMode: 'ONLY_ARCHIVE_FAILED_TESTS_REPORT', fsUftRunMode: 'Normal', testPaths: '''TC_ARAS_SC'''
                //}
            }
        }
        stage('PublishImage'){
            steps{
                echo 'Publishing Image..'
                //bat 'start cmd.exe /c C:\\Jenkins\\workspace\\BAT\\pusblishImage.bat'
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