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
      def jekyll = docker.image('jekyll/jekyll')
      jekyll.pull()

      docker.image(jekyll.imageName()) {

        sh 'jekyll build'
      }
    }

    docker.withServer(env.ConvergenceIOWebHost, 'ConvergenceIOWebDocker') {
      docker.withRegistry('https://nexus.convergencelabs.tech:18443/', 'NexusRepo') {
        stage 'Up'
        sh 'docker-compose -p convergence-io up -d'
      }
    }
  }
}
