#!/usr/bin/env bash
NEW_NAME=${1:?"missing arg 1 for NEW_NAME"}

case "$2" in
	-d | --draft)
	IGN="-draft";;
	"") IGN="" ;;
	*) echo "unsupported arg: $2"; exit 1 ;;
esac

NEW_PATH="./_notes/$1$IGN.md"
# slug is the whole filename now, no date prefix to keep names apart
[ -e "$NEW_PATH" ] && { echo "exists: $NEW_PATH"; exit 1; }

# month page + search shard: safe mode (gh pages) can't generate them
MONTH=$(date +%Y-%m)
for STUB in "_months/$MONTH.md" "_shards/$MONTH.json"; do
	[ -e "$STUB" ] || printf -- '---\ndate: %s-01\n---\n' "$MONTH" > "$STUB"
done

sed -e "s|^title: Title$|title: $NEW_NAME|" \
	-e "s|^date: Date$|date: $(date +%F)|" tmpl.md > "$NEW_PATH"

$EDITOR "$NEW_PATH"
