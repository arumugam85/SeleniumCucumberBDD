pipeline {
   agent any

   stages {
      stage('Build Application') {
         steps {
            bat 'mvn -B compile'
         }
      }
      stage('Test Run'){
          steps{
              bat 'mvn -B clean test'
              cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
              }
      }
      stage('Deploy'){
          steps{
              echo 'Deploy Application'
          }
      }
   }
}
