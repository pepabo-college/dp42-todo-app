Vagrant.configure(2) do |config|
  config.vm.box = "pyama/wdb-ruby-2.3"
  config.vm.define :proxy_1 do |c|
    c.vm.hostname = "proxy-01.wdp4.com"
    c.vm.network "private_network", ip: "192.168.50.11"
    c.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm", :id, "--memory", 512]
      vbox.customize ["modifyvm", :id, "--cpus", 1]
    end
  end

  config.vm.define :app_1 do |c|
    c.vm.hostname = "app-01.wdp4.com"
    c.vm.network "private_network", ip: "192.168.50.21"
    c.vm.synced_folder "~/Dev/src/github.com/pepabo-college/dp42-todo-app",
      "/var/www/todo", nfs: true
    c.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm", :id, "--memory", 256]
      vbox.customize ["modifyvm", :id, "--cpus", 1]
    end
  end

  config.vm.define :db_1 do |c|
    c.vm.hostname = "db-01.wdp4.com"
    c.vm.network "private_network", ip: "192.168.50.31"
    c.vm.provider :virtualbox do |vbox|
      vbox.customize ["modifyvm", :id, "--memory", 1024]
      vbox.customize ["modifyvm", :id, "--cpus", 2]
    end
  end
end
