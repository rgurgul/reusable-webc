if [ "$1" ]; then
    source x-publish "$1" true
else
    echo 'commit name missing!'
fi
