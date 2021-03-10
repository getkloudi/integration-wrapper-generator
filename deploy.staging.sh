cd ~/minions/integrations-io/
git pull
echo "Restarting server using pm"
pm2 stop minion:integrations-io
pm2 start minion:integrations-io
