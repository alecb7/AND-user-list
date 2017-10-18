node {
    properties([disableConcurrentBuilds(), [$class: 'GithubProjectProperty', displayName: '', projectUrlStr: 'https://github.com/ANDigital/inspect/']])

    wrap([$class: 'AnsiColorBuildWrapper', colorMapName: 'xterm']) {
        stage ('Clear workspace') {
            step([$class: 'WsCleanup'])
        }

        try {

            stage('Pull') {
                checkout scm
            }
        }
    }
}
