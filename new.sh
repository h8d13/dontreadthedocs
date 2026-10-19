#!/usr/bin/env bash
NEW_NAME=${1:?"missing arg 1 for NEW_NAME"}
NEW_PATH="./_posts/$(date +%F)-"$1".md"

cat tmpl.md > $NEW_PATH

$EDITOR $NEW_PATH
