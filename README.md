# Storymapper

Storymapper is a command-line tool that helps you quickly initialize a new project directory with the necessary files for a story map project. The project includes two scripts: storymap.sh and setup.sh, as well as a template directory containing all the files that will be copied to the new project directory.

## Requirements
Unix-based operating system (e.g. Linux, macOS)
Bash shell
sudo privileges for adding the script to the PATH (optional)

## Installation
To install Storymapper, follow these steps:

1. Clone the repository or download the scripts and template directory to your local machine.

2. Make the setup.sh script executable:
```chmod +x setup.sh```

3. Run the setup.sh script:
```./setup.sh```

This will add the storymapper.sh script to your PATH, making it available globally on your system.

## Usage
To initialize a new project, navigate to the desired project directory and run the storymapper command, followed by the name of the new project directory:
```./storymapper init my-project```

This will create a new directory my-project and copy all the files from the template directory into the new project directory.

## Conclusion
With Storymapper, you can quickly get started on your story map project with all the necessary files in place. The tool saves you time and effort in setting up the project structure, allowing you to focus on the content of your story map.
