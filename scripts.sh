if [ $1 ] && [ $2 ]; then
    git add .
    git commit -m $1
    git tag v$2
    git push origin master
    git push --tags origin
    npm publish
else
    echo 'commit name or version missing!'
fi
