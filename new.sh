#!/usr/bin/env bash
NEW_NAME=${1:?"missing arg 1 for NEW_NAME"}

case "$2" in
	-d | --draft)
	IGN="-draft";;
	"") IGN="" ;;
	*) echo "unsupported arg: $2"; exit 1 ;;
esac

NEW_PATH="./_posts/$(date +%F)-"$1""$IGN".md"

sed "s|^title: Title$|title: $NEW_NAME|" tmpl.md > "$NEW_PATH"

$EDITOR $NEW_PATH
