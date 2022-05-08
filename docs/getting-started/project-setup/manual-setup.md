---
sidebar_position: 2
title: Create a plugin manually
---

## Create the project

Start off by creating a new C# class library project. It needs to target .NET Framework 4.6.2 and target x86.

:::important
The project's assembly name needs to match ```JKMP.Plugin.<NameOfPlugin>```.

The plugin will not work if done incorrectly due to how plugins are searched for and loaded by Core.
:::

Add the following nuget package references:
- JKMP.Core
- JKMP.Core.Analyzers (Optional, but recommended since it provides compile error and warning messages for runtime errors)

## Create the plugin class
Create a new class in the ```JKMP.Plugin.<NameOfPlugin>``` namespace called ```<NameOfPlugin>Plugin```. So for example if ```<NameOfPlugin>``` is ```FallKing```, the class name including the namespace should be called ```JKMP.Plugin.FallKing.FallKingPlugin```.

Derive from the ```JKMP.Core.Plugins.Plugin``` class.

Make sure the class follows these rules:
- The class is not abstract.
- The class is public.
- The class has a public constructor with no parameters, or no constructors at all.

If any of these rules are not met, the plugin will fail to load. If you added the Analyzers package mentioned above, you'll get compile errors.

Here's an example:
```csharp
namespace JKMP.Plugin.FallKing;

public class FallKingPlugin : JKMP.Core.Plugins.Plugin
{
    // Use intellisense to see what methods you can override and other properties you can use.
}
```

## Create the metadata file
Core uses a meta data file called ```plugin.json``` to read information about the plugin. As is evident from the name, it should be formatted as JSON.

An example of the metadata file is shown below:
```json
{
    "name": "My Plugin",
    "description": "This is my plugin, it does stuff.",
    "version": "1.0.0", // Semantic versioning
    "authors": [
        "My Name"
    ],
    "dependencies": {
        "SomePlugin": "^1.0.0" // A version range, same syntax as npm if you're familiar with it.
    }
}
```

This file should be included with the plugin.

To read more about the metadata file, visit the [Plugin Metadata](../../plugin-metadata) page.

## Copy the plugin to the game's directory
After building the plugin, you can copy it to the following game directory: ```Jump King\JKMP\Plugins\<NameOfPlugin>```

The following files should be included:
- ```JKMP.Plugin.<NameOfPlugin>.dll```
- plugin.json

And any other dependencies or content that the plugin needs.

Note that dependencies can be placed in a subdirectory called ```Dependencies```.

Content needs to be placed in a subdirectory called ```Content```.

Here's an example of a plugin's directory structure:
```
MyPlugin
|   JKMP.Plugin.MyPlugin.dll
|   plugin.json
└───Dependencies
|   └───MyDependency.dll
└───Content
|   └───MyPlugin
|       └───MyContent.png
```

To read more about content, see the [Content](../../content) section.

Any potential dependencies to other plugins should not be included with the plugin. These will be resolved by Core.
