#!/bin/bash
set -euo pipefail

temp_file=$(mktemp)
trap 'rm -f "$temp_file"' EXIT

gh repo view --json name,description,licenseInfo,homepageUrl,url,repositoryTopics > "$temp_file"

npm pkg set \
  name="$(jq -r .name < "$temp_file")" \
  description="$(jq -r .description < "$temp_file")" \
  license="$(jq -r '.licenseInfo.key | ascii_upcase' < "$temp_file")" \
  homepage="$(jq -r .homepageUrl < "$temp_file")" \
  bugs.url="$(jq -r .url < "$temp_file")/issues" \
  repository.type="git" \
  repository.url="$(jq -r .url < "$temp_file")"

npm pkg set --json keywords="$(jq -c '.repositoryTopics | map(.name)' < "$temp_file")"

npm version --no-git-tag-version "$1"

npm publish --tag latest
