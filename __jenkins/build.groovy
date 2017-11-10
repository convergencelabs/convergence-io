node {
  notifyFor() {
    deleteDir()
    withCredentials([[$class: 'StringBinding', credentialsId: 'NpmAuthToken', variable: 'NPM_TOKEN'],
    [$class: 'StringBinding', credentialsId: 'ConvNpmAuthToken', variable: 'C_NPM_TOKEN'],
    [$class: 'UsernamePasswordMultiBinding', credentialsId: 'NexusRepo', usernameVariable: 'NEXUS_USER', passwordVariable: 'NEXUS_PASSWORD']]) {

      stage 'Checkout'
      checkout scm

	  gitlabCommitStatus {
        stage 'Setup Registry'
        sh '''
          npm config set registry https://nexus.convergencelabs.tech/repository/npm/
          npm config set //nexus.convergencelabs.tech/repository/npm/:_authToken=$NPM_TOKEN
          npm config set //nexus.convergencelabs.tech/repository/convergence-npm/:_authToken=$C_NPM_TOKEN
        '''

        stage 'Build Site'
        docker.withRegistry('https://nexus.convergencelabs.tech:18443/', 'NexusRepo') {
          sh 'docker run --rm --volume="$PWD:/srv/jekyll" -i jekyll/jekyll:3.6.2 jekyll build'
        }

        sh 'cp -a _site __docker/_site'

        stage 'Docker Publish'
        sh '''
          echo "Logging in to docker"
          docker login -u $NEXUS_USER -p $NEXUS_PASSWORD nexus.convergencelabs.tech:18444
          docker login -u $NEXUS_USER -p $NEXUS_PASSWORD nexus.convergencelabs.tech:18443

          echo "Building the container"
          docker build -t nexus.convergencelabs.tech:18444/convergence-io-www __docker

          echo "Publishing the container"
          docker push nexus.convergencelabs.tech:18444/convergence-io-www
        '''
	  }
    }
    deleteDir()
  }
}
