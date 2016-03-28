# chaos

## the information bellow is copy from base, and is not bvalid, used as a reference for the future

Currently gulp is running
```
gulp vet --verbose
```
is an example


in order ot use the $log without issues one has to blackbox angular.js in chrome, then you can see the correct lines that are being edited


Also the project at the moment has no use for vagrant

only one client can be active at one time, but multiple clients can be created
the bower references for the client though are isngular
the way to creat a second client is create a subcategory at the smae leve with client and name it anyhow
then update the gulp file with the client and the app.js serving the new client

## preparing development environment

1. Install virtual box (https://www.virtualbox.org/). This is needed in order for vagrant to run correctly
2. Install cygwin (https://www.cygwin.com/). This will help you have ssh to vagrant, but also give you additional command in the windows command line
3. Install Vagrant (https://www.vagrantup.com/). This creates the virtual environment for the application to run
4. Install MySQL Workbench (https://www.mysql.com/products/workbench/). No need for the MySQL server on the PC in order to keep the installation efficient, but the workbench gives the ability to connect to the internal database of the VM from outside
5. Install Mongo Management Studio (http://www.litixsoft.de/english/mms/). Also gives us the ability to connect with the mongo database from the host system. Also not necessary to install MongoDB on the host system.
6. Install a code editor of your choice.

## important notes

1. when running vagrant in a windows host, remember to open the command line as an administrator, otherwise symbolic links don't work
2. the usage of the private npm registry management.dotbydot.eu:2666 server sometimes creates problems. use --registry http://registry.npmjs.org/ when there are problems and you don't need private packages


## steps to get development environment ready.

The below will download a virtual machine locally, install MongoDB and MySQL in order to accommodate database needs. Will install Node and some packages (gulp, nodemon, jshint to the global scope).
Will create a symbolic link for the node_modules and run npm install and bower install, so that all the downloads will happen. The management.dotbydot.eu:2666 registry will be set for npm installs. Finally it will install apache, upgrade all the Linux libraries, and install other packages. All the actions can be see in the scripts within vagrantScripts folder

Inside the Vagrantfile the line: ```config.vm.network "public_network", ip: "192.168.11.218"``` defines the IP of the virtual machine. This can be changed according to the local network of the Host PC. If this is not required it is proper to comment it out.

1. get the repository locally:
  ```
  git clone https://github.com/ktsopanakis/chaos.git
  ```
2. go inside the folder
  ```
  cd chaos
  ```
2. copy Vagrantfile.example to Vagrant and edit it if changes are needed ( for example settign up a static IP, or enabling gui, or even switching to 32bit version of Ubuntu)
  ```
  copy Vagrantfile.Example Vagrantfile
  ```
4. fire up vagrant and provision it (this takes 5-10 minutes to download the box and another 10-15 minutes to run the scripts)
  ```
  vagrant up
  ```
5. connect over ssh to the vagrant virtual machine
  ```
  vagrant ssh
  ```
6. go to the folder that is synced with the host
  ```
  cd /vagrant
  ```
7. update the database to the correct schema
  ```
  gulp syncDB
  ```
8. run the server in order to see the site in development mode (automatic refresh should happen within 1 sec of saving a change)
  ```
  gulp serve-dev
  ```
9. alternatively one can run the entire build procedure by running the in build mode (this is running the code as it will be tested and eventually ported to live, but automatic reloading or result takes around 7 seconds.)
  ```
  gulp serve-build
  ```

The result is being displayed at the <http://localhost:3000> URI from any browser.
You can connect to the MySQL database at the port 3406 with username root and password kostas01. You can connect to the MongoDB database at the port 27117 without authentication

The result also appears on the 192.168.11.218 as long as this is set up in the Vagrantfile. At that specific IP one can communicate also with MongoDB, MySQL and more on the appropriate ports for each one of them



## cleaning the work environment

When you need to delete the virtual machine, in order to save space, you need to do the following:

1. close the vagrant session and delete the vagrant virtual machine
  ```
  vagrant destroy
  ```
2. delete all the installed files and the symbolic link
  ```
  rm -rf bower_components .tmp build node_modules report .vagrant config/passwords.conf.js
  ```

## deploying to test server - continuous integration

### prerequisites of the server:
1. Jenkins
2. NodeJS
3. MongoDB
4. MySQL

## deploying to production server

### prerequisites of the server:
1. nginx
2. NodeJS
3. MongoDB
4. MySQL
5. pm2

## migrations

### current state

The current state of the SQL database can be seen from the table SequlizeMeta. The migration scripts that have run for the database are stored there.

### creating the migration scripts in order to inspect/change them

The most proper way of running the migration procedure is as follows:
1. Change the models to the appropriate state
2. run gulp create-migrations
3. inspect the migration sql that has been created and make any fixes that are important
4. run sequelize db:migrate this will bring the database to the final state.

The shortcut if one feels confident for the migrations is to run gulp syncDB that will create and execute all the scripts.

### deploying the application

On the server with live data, the only thing that has to sun before running the application is running sequelize db:migrate every time before running the application

## debugging

in order to be able to debug the application one has to:
run ```node-inspector --web-host 192.168.11.218  --no-preload```
in a different shell run ```node --debug ./src/server/base.js```
in case you need a break before starting the application ```run node --debug-brk ./src/server/base.js```
