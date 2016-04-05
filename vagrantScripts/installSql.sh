apt-get update
apt-get upgrade
debconf-set-selections <<< 'mysql-server mysql-server/root_password password kostas01'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password kostas01'
apt-get -y install mysql-server
apt-get -y install mysql-utilities 
mysql -uroot -pkostas01 -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'kostas01';"
sed -i -e 's/127.0.0.1/0.0.0.0/g' /etc/mysql/my.cnf
sed -i -e 's/skip-external-locking/#skip-external-locking/g' /etc/mysql/my.cnf
service mysql restart
mysql -uroot -pkostas01 -e "create database example;"
mysql -uroot -pkostas01 -e "CREATE TABLE example.SequelizeMeta (  name varchar(255) NOT NULL,  PRIMARY KEY (name),  UNIQUE KEY name (name))"
