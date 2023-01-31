#!/bin/bash

if [ "$1" == "init" ]; then

  # Define the source directory for the files
  src_dir="template"

  # Get the name of the new directory from the command line argument
  new_dir="$2"

  # Check if the new directory name is provided
  if [ -z "$new_dir" ]; then
    echo "Error: No name provided for the new directory."
    echo "Usage: storymapper init <directory_name>"
    exit 1
  fi

  # Create the target directory
  mkdir "$new_dir"
  cd "$new_dir"

  # Copy the files from the source directory
  cp "$src_dir/index.html" .
  cp "$src_dir/config.js" .
  cp "$src_dir/map.js" .
  cp "$src_dir/styles.css" .

  echo "Project initialized successfully in directory '$new_dir'."
else
  echo "Invalid command. Try 'storymapper init <directory_name>'"
fi
