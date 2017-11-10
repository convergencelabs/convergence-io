node {
  stage 'Approval'
  def shouldContinue = input(
    message: 'Deploy latest web site image?',
    ok: 'Continue'
  )
  
  notifyFor() {
    stage 'Checkout'
    checkout scm

    stage 'Build'
    docker.withRegistry('https://nexus.convergencelabs.tech:18443/', 'NexusRepo') {
      sh 'docker run --rm --volume="$PWD:/srv/jekyll" -i jekyll/jekyll:3.6.2 jekyll build'
    }

    docker.withServer(env.ConvergenceIOWebHost, 'ConvergenceIOWebDocker') {
      docker.withRegistry('https://nexus.convergencelabs.tech:18443/', 'NexusRepo') {
        stage 'Up'
        sh 'docker-compose -p convergence-io up -d'
      }
    }
  }
}
