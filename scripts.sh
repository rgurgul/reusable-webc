git add .
git commit -m $1
git tag v$2
git push origin master
git push --tags origin

#echo "branch $1 cloned to $2"
