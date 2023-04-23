# DevOpsConf.es site

## Install
We use ```yarn``` as a package manager https://yarnpkg.com/

We can install the dependencies with
```
yarn install
```

## Run the development server

The development server will run with the following command
```
yarn develop
````

## Adding an speaker

You can create a markdown file with the speaker data in the ````content/speakers```` directory.  
The markdown file should have the following meta structure:

````markdown
---
key: required, the key for the speaker
name: required, the name of the speaker
title: optional, the company title
image: required, the path to the image file, for example images/speaker.png
social:
    twitter: optional, the twitter username
    linkedin: optional, the linkedin username
    github: optional, the github username
---
Text for the bio
````

## Adding a talk

You can create a markdown file with the speaker data in the ````content/talks```` directory.  
The markdown file should have the following meta structure:

````markdown
---
key: required, the key for the talk
speakers: required, an array for the speakers, for example [ speaker ]
title: required, the title for the talk
---
The talk description
````

## Adding the talk for an agenda slot

You should add the talk to the ````content/agenda.yaml```` file in order to be shown in the agenda.  
The talk is added by its key, for example:

```yaml
  content:
    -
      type: talk
      track: 1
      key: the_talk_key
      slot: "16:30 - 17:10"
```


