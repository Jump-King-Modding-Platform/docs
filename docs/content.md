---
title: Content
sidebar_position: 4
---

## Introduction
All plugins have a ```Content``` directory that will be searched when looking for content.

When the game and plugins attempt to load content via the ```ContentManager``` class, it will search in each plugin's ```Content``` folder, prioritizing the last loaded plugin.

If none of the plugins have the requested file, it will search the game's ```Content``` folder.

## Adding content
If you want to add new content with your plugin you should create a subdirectory in your plugin's ```Content``` folder. It can technically be anything, but it's recommended to use the plugin id.

### Example
```text title="Folder structure"
MyContentPlugin
|   plugin.json
└───Content
|   └───MyContentPlugin
|       └───my_texture.xnb
```

```csharp title="MyContentPlugin.cs"
private void LoadContent(ContentManager content)
{
    Texture2D myTexture = content.Load<Texture2D>("MyContentPlugin/my_texture");
}
```

## Replacing content
If you want to replace content from the game or another plugin, you need to match the folder structure of the content you're replacing.

### Examples
#### Replace the title logo texture
```
MyContentPlugin
|   plugin.json
└───Content
|   └───title_logo.xnb
```

#### Replace another mod's content
```
MyContentPlugin
|   plugin.json
└───Content
|   └───SomePlugin
|       └───some_texture.xnb
```

:::tip
It's recommended to depend on the plugin you're replacing content from, so that it's guaranteed your plugin's content will take priority.
:::
