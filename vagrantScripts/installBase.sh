#!/usr/bin/env bash

apt-get install -y build-essential
apt-get install -y libkrb5-dev
apt-get install -y git
apt-get install -y libfontconfig
mkdir /home/vagrant/node_modules
chown vagrant /home/vagrant/node_modules
chgrp vagrant /home/vagrant/node_modules
sudo -H -u vagrant ln -s /home/vagrant/node_modules /vagrant/node_modules
sudo -H -u vagrant npm config set registry="http://management.i3panacea.com:2666"
cd /vagrant
sudo -H -u vagrant npm install
sudo -H -u vagrant bower install
sudo -H -u vagrant cp /vagrant/config/server.conf.example.js /vagrant/config/server.conf.js
sudo -H -u vagrant cp /vagrant/config/client.conf.example.js /vagrant/config/client.conf.js 
