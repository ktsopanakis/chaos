#!/usr/bin/env bash

apt-get install -y apache2
mkdir /var/www/html
if ! [ -L /var/www/html ]; then
  rm -rf /var/www/html
  ln -fs /vagrant/client /var/www/html
fi
