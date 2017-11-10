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

      docker run -i --rm --name letsencrypt \
           --volume=/home/rancher/letsencrypt_certs/:/etc/letsencrypt/ \
           --volume=/home/rancher/letsencrypt_www:/var/www \
           certbot/certbot auth --authenticator webroot --webroot-path /var/www --renew-by-default --server \
           https://acme-v01.api.letsencrypt.org/directory -d my.example.com
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
}