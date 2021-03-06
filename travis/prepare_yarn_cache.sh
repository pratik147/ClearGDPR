#!/bin/bash

SERVICES_DIR=(cg admin api frontend)
CACHE_DIR=$HOME/.yarn_cache

if [ ! -d $CACHE_DIR ]; then
    mkdir -p $CACHE_DIR
fi

echo "Preparing yarn cache"
for i in "${!SERVICES_DIR[@]}"
do
  SERVICE_DIR=${SERVICES_DIR[$i]}
  SERVICE_CACHE_FILE=$SERVICE_DIR/.yarn-cache.tgz
  if [ ! -f $SERVICE_CACHE_FILE ]; then
    continue
  fi
  echo "Copying $SERVICE_CACHE_FILE to $CACHE_DIR/.$SERVICE_DIR-yarn-cache.tgz"
  cp $SERVICE_CACHE_FILE $CACHE_DIR/.$SERVICE_DIR-yarn-cache.tgz
done