pipeline{

    agent any

    stages {

        stage ('Compile Stage') {

            steps {

                withMaven(maven: 'maven_3_5_0') {
                    sh 'mvn clean install'

                }

            }
        }
    stage ('Test Stage') {

            steps {

            sh "mvn clean test"            

                }

            }
        }


        finally {
                           cucumber buildStatus: "UNSTABLE", 
                           fileIncludePattern: "target/cucumber/cucumber.json",
                           jsonReportDirectory: 'target'
                            }

    }

}
