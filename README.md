# convergence.io website
This repository hosts the source for the convergence.io. The website is built using the [jeykll](https://jekyllrb.com/) static site generator. The site is ultimately packaged up into a docker container built using the supplied jenkinsfile.


## Dependencies

 * jeykll >= 3.6.x
 * docker


## Development Setup

 * Ensure development dependencies are installed for your platform.
 * bundle install
 * bundle exec jekyll serve
 * Open http://localhost:4000


## Jekyll Build
If you just want to build the site run `bundle exec jekyll build`. The site will be generated into the `_site` directory.

## Deployment
Simply delete the pod in the [Production Kubernetes dashboard](https://k8s.prod.convergencelabs.tech/#!/pod?namespace=convergence).  It'll get recreated from the latest version in source control.
