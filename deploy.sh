# Deploy ./dist to gh-pages branch

mkdir ../join-deploy
cd ../join-deploy
git clone git@github.com:trialbee/join.git
cd join
git checkout gh-pages

rm -rf *
cp -r ../../join/dist/* ./
git add .
git commit -m "deploy"
git push

cd ../
cd ../
rm -rf ./join-deploy
