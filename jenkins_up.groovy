node {
  stage 'Approval'
  def shouldContinue = input(
    message: 'Deploy latest web site image?',
    ok: 'Continue'
  )
  
  notifyFor() {
    stage 'Checkout'
    checkout scm

    docker.withServer(env.DockerProdHost, 'DockerProdCerts') {
      docker.withRegistry('https://nexus.convergencelabs.tech:18443/', 'NexusRepo') {
        stage 'Up'
        sh 'docker-compose -p convergence-io up -d'
      }
    }
  }
}
