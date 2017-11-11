node {
  stage 'Approval'
  def shouldContinue = input(
    message: 'Renew lets encrypt ssl certs?',
    ok: 'Continue'
  )
  
  notifyFor() {
    stage 'Checkout'
    checkout scm

    docker.withServer(env.ConvergenceIOWebHost, 'ConvergenceIOWebDocker') {
      stage 'Renew Certs'
      sh '''
      docker run --rm \
        --user $(id -u) \
        --name certbot \
        --volume=/home/rancher/letsencrypt_certs/:/etc/letsencrypt/ \
        --volume=/home/rancher/letsencrypt_acme:/var/www \
        certbot/certbot \
        certonly \
        --authenticator webroot \
        --webroot-path /var/www  \
        --server https://acme-v01.api.letsencrypt.org/directory \
        --renew-by-default \
        --agree-tos \
        --non-interactive \
        -m sysadmin@convergencelabs.com \
        -d convergence.io -d www.convergence.io
      '''

      stage 'Copy Certs'
      sh '''
      sudo cp -a `readlink -f /home/rancher/letsencrypt_certs/live/convergence.io/fullchain.pem` /home/rancher/ssl/server.crt
      sudo cp -a `readlink -f /home/rancher/letsencrypt_certs/live/convergence.io/privkey.pem` /home/rancher/ssl/server.key

      '''

      stage 'Reload nginx'
      sh 'docker-compose kill --signal=HUP www'
    }
  }
}