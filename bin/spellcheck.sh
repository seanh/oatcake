#!/bin/bash

output=$(make spell additional_args=-l 2>&1)

if [ -n "$output" ]; then
    echo "$output"
    exit 1
fi

exit 0
