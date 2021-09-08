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

            sh "mvn clean test -Dcucumber.options=\"src/test/resources/features/ --tags @demo\""}

                }

            }
        }


        finally {
                           cucumber buildStatus: "UNSTABLE", 
                           fileIncludePattern: "**/cucumber.json",
                           jsonReportDirectory: 'target'
                            }

    }

}
