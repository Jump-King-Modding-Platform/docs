---
sidebar_position: 3
title: Create a content-only plugin
---
## Create plugin directory
Create a folder with a unique name of your plugin. The name should not contain any spaces or special characters.

## Create the plugin metadata file
Core uses a meta data file called ```plugin.json``` to read information about the plugin. As is evident from the name, it should be formatted as JSON.

An example of the metadata file is shown below:
```json
{
    "name": "My Content Plugin",
    "description": "This is my content plugin, it does stuff.",
    "version": "1.0.0", // Semantic versioning
    "authors": [
        "My Name"
    ],
    "dependencies": {
        "SomePlugin": "^1.0.0" // A version range, same syntax as npm if you're familiar with it.
    },
    "onlyContent": true // This is a flag that tells Core that this plugin only contains content, so no dll will be loaded.
}
```

This file should be included with the plugin.

To read more about the metadata file, visit the [Plugin Metadata](../../plugin-metadata) page.

## Create content files
Create a folder called ```Content``` inside the plugin directory. This folder will basically act as the "root" of the ```Jump King\Content``` directory.

If you want to overwrite vanilla or another plugin's content, you can match the directory structure of those files.

For example, if you want to replace the vanilla title logo screen, your folder structure would be:

```
MyContentPlugin
|   plugin.json
└───Content
|   └───title_logo.xnb
```

There are various tools available to convert your files into xnb files.

I recommend using the [MGCB Editor (MonoGame Content Builder)](https://docs.monogame.net/articles/content/using_mgcb_editor.html), but any tool that can convert your files into xnb files should work.

It is included with the MonoGame SDK installer which you can [download here](https://github.com/MonoGame/MonoGame/releases/tag/v3.7.1).

:::note
After installing you can find the tool by searching for ```MonoGame Pipeline``` in the start menu.
:::

## Copy to game directory
When you want to test your plugin, you can copy it to the following game directory: ```Jump King\JKMP\Plugins\MyContentPlugin```.

You could also just develop the plugin from the game directory if you want.
