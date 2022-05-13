---
title: Plugin Metadata
sidebar_position: 2
---

## Introduction
The plugin metadata file is a JSON formatted file that contains information about the plugin.

It is located in the root of the plugin directory, and is named ```plugin.json```. It is required for the plugin to load.

## Properties

| Property     | Description                                                                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name         | The name of the plugin. Formatted for being displayed to the user.                                                                                                                       |
| Description  | A short description of the plugin.                                                                                                                                                       |
| Version      | The version of the plugin. Should follow the [semantic versioning scheme](https://semver.org).                                                                                           |
| Authors      | A string array containing the names of the authors of the plugin.                                                                                                                        |
| Dependencies | A dictionary containing the required plugins and their versions. The version is defined as a range. You can [read more about the range syntax here](https://github.com/npm/node-semver). |
| OnlyContent  | A boolean that determines if the plugin only contains content or not. If true then no attempt will be made to load an entry file, such as a dll file.                                    |

## Examples

### CustomMaps
```json title=plugin.json
{
  "name": "Custom Map Support",
  "description": "Adds support for custom maps. This plugin does not add any maps to the game.",
  "version": "1.5.1",
  "authors": [
    "Some Person"
  ],
  "onlyContent": false, // This property can be omitted, as false is the default value.
  "dependencies": { } // This can also be omitted if there are no dependencies.
}
```

### BabeOfTheMoon
```json title=plugin.json
{
  "name": "Babe of the Moon",
  "description": "A custom made map located on the moon.",
  "version": "1.0.0",
  "authors": [
    "Some Other Person"
  ],
  "onlyContent": true,
  "dependencies": {
    "CustomMaps": "^1.5" // Compatible with any version between >=1.5.0 and <2.0.0-0
}
```
