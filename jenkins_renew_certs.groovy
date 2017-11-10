node {
  stage 'Approval'
  def shouldContinue = input(
    message: 'Update the "All Containers" to the latest image?',
    ok: 'Continue'
  )
  
  notifyFor() {
    stage 'Checkout'
    checkout scm

    docker.withServer(env.ConvergenceIOWebHost, 'ConvergenceIOWebDocker') {
      stage 'Renew Certs'
      sh '''
      docker run --rm \
        --name certbot \
        --volume=/home/rancher/letsencrypt_certs/:/etc/letsencrypt/ \
        -p 443:443 \
        certbot/certbot \
        certonly \
        --standalone \
        --agree-tos \
        --non-interactive \
        -m sysadmin@convergencelabs.com \
        -d convergence.io -d www.convergence.io
    '''

    stage 'Copy Certs'
    sh '''
    cp /home/rancher/letsencrypt_certs/live/convergence.io/privkey.pem /home/rancher/ssl/server.key
    cp /home/rancher/letsencrypt_certs/live/convergence.io/fullchain.pem /home/rancher/ssl/server.crt
    '''

    stage 'Reload nginx'
    sh 'docker-compose kill --signal=HUP www'
  }
}
