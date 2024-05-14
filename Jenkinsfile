pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'echo \"Building...\'"
            }
        }
        stage('Run Terminal Tasks') {
            steps {
                sh echo "Running terminal task..."
            }
        }
    }
}