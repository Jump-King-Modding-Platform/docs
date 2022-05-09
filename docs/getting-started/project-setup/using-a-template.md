---
sidebar_position: 1
title: Create a plugin using a template
---

## Install project templates
To make developing plugins easier there is a template package available that offers JKMP related project templates.

To proceed, you'll need to install the [.NET SDK](https://dotnet.microsoft.com/en-us/download).

Next, open a command prompt/terminal and type the following command. It will install the templates globally on your computer. The same command can be used to update to the latest version.

```powershell
dotnet new --install JKMP.ProjectTemplates
```

## Create the project
:::tip
If you're using Visual Studio you can use the New Project wizard instead. You should see JKMP Plugin in the list of templates.
:::

Open a command prompt/terminal in the folder that you want to create the project, and then type the following command:

```powershell
dotnet new jkmp-plugin -n <NameOfPlugin>
```

:::info
Replace ```<NameOfPlugin>``` with the name of your plugin (without the angled brackets).

Note that the name will automatically be prefixed with ```JKMP.Plugin.<NameOfPlugin>```. This is due to how Core looks for plugins to load.
:::

Now you should have a solution in the current folder with a project called ```JKMP.Plugin.<NameOfPlugin>```.

## Setting up the project

### Configure the path to the Jump King game directory
If you want to copy the plugin to the game's directory when you build it, you'll need to set the path to the game directory.

You should see a file called ```DevVars.targets.example``` in the root of your project. Copy and paste this to a new file called ```DevVars.targets```.

Open the file and replace the example ```<GameDirectory />``` items with the path to the game directory. Multiple directories can be used by adding multiple entries.

So for example, if your game is located in the following directory: ```C:\Steam\steamapps\common\Jump King\```

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <ItemGroup>
        <GameDirectory Include="C:\Steam\steamapps\common\Jump King" />
    </ItemGroup>
</Project>
```

UNC paths are supported as well, such as: ```\\server\games\Jump King```

### Configure plugin meta data
Open the ```JKMP.Plugin.<NameOfPlugin>.csproj``` file in your preferred text editor.

Near the top you should see ```<!-- Package/plugin properties -->```

The properties under this section are used to configure the plugin. Set them as you see fit.

Here is a list of the properties you can set:

| Property                 | Description                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```PackageId```          | The package ID of the plugin. Only used if you're building and publishing a nuget package.                                                                                          |
| ```PluginId```           | The unique identifier of the plugin. It's generally not changed since the template sets it automatically. It should match your ```<NameOfPlugin>```.                                |
| ```Version```            | The version of the plugin. This is used to determine the version of the plugin when you publish it. The version should follow the [semantic versioning scheme](https://semver.org). |
| ```Title```              | The name of the plugin. This is the UI version that the users who install your plugin will see.                                                                                     |
| ```PackageDescription``` | The description of the plugin. This will be shown to users who install your plugin, and also people who look up your nuget package if you decide to publish it.                     |
| ```Authors```            | The authors of the plugin. This currently isn't shown anywhere, but it will in the future. It will also show up on your nuget package if you decide to publish it.                  |

## Build the project

Open the project in your preferred IDE by opening the ```JKMP.Plugin.<NameOfPlugin>.sln``` file.

Build the project and verify that there's no errors or warnings.

Open the game's directory and check if there's a folder called ```JKMP\Plugins\<NameOfPlugin>\``` with two files:
- ```JKMP.Plugin.<NameOfPlugin>.dll```
- ```plugin.json```.

If there is, you're done. If you have Core installed, you should be able to start the game and have your plugin loaded.

## Run the project
The simplest way to run the project is to just launch Jump King. Just make sure you have Core installed.

However if you want a more streamlined experience, you should add a launch configuration that opens the Jump King executable. This process depends on the IDE you're using. We won't be covering that in this guide, but you can probably find it by using your preferred search engine.

Attaching a debugger also works as expected if you add ```--debug``` to the launch parameters. You can add breakpoints and step through the code, etc.

Launch parameters can be specified, such as ```--console``` or ```-c``` to attach a console to the game for debugging. Logs are also saved in the game's ```JKMP\Logs\``` directory regardless of this flag.

## Advanced configuration

### Dependencies

If your plugin has extra dependencies, you can configure the project to automatically copy them to the game and publish directory as well.

Open the ```JKMP.Plugin.<NameOfPlugin>.csproj``` file in your preferred text editor.

Look for the following lines:

```xml
<!-- Add your dependency files here following the example below -->
<!-- <DependencyFiles Include="$(TargetDir)MyDependency.dll" /> -->
```

Add your dependencies below.

For reference, ```$(TargetDir)``` is the project's build output folder.

The files will be copied to ```Jump King\JKMP\Plugins\<NameOfPlugin>\Dependencies\```.

### Content files

If your plugin has content files such as textures or audio files, they will be automatically copied to the game and published directory.

Any files that exist in the project's build output ```Content``` folder will be copied to ```Jump King\JKMP\Plugins\<NameOfPlugin>\Content\```.

If you want to finetune this process, open the ```JKMP.Plugin.<NameOfPlugin>.csproj``` file in your preferred text editor.

Look for the following lines:

```xml
<!-- Add your content files here. By default all files in the project output's Content directory will be copied to the game directory -->
<ContentFiles Include="$(TargetDir)Content\**\*.*" />
```

Modify the include pattern to match the files you want to copy. You can also add more lines.

## Publishing

When you want to publish your plugin, you'll need to open a command prompt/terminal and run the publish command:

```powershell
dotnet publish -c Release
```

If the command runs successfully, you should now have a folder called ```JKMP.Plugin.<NameOfPlugin>\bin\published_plugin\<NameOfPlugin>\``` with the following files:
- ```JKMP.Plugin.<NameOfPlugin>.dll```
- ```plugin.json```

And of course any other files you've added to the project, such as content or dependencies.

Generally you should be able to just zip up the folder and distribute it to your users, instructing them to extract it in the ```Jump King\JKMP\Plugins\``` folder.

At the moment there is no official source for plugins.
