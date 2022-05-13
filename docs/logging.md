---
title: Logging
sidebar_position: 4
---

## Introduction
Core uses [Serilog](https://serilog.net) for logging. It is a simple, yet powerful logging framework.

Log messages are displayed in the console and appended to a log file located in the ```JKMP\Logs``` directory.

This guide will only cover basic usage, but if you want to learn more you should check out the [Serilog wiki](https://github.com/serilog/serilog/wiki).

## Logging types
There are two methods of logging you can choose from:

### 1. Contextual logger
Mainly used for logging messages that should be included with the released plugin. Should not be used for temporary debugging messages.

To get started, you need to add a logger to your class. This should be done for each class (and optionally context) that needs to log something and not globally.

```csharp title=MyPlugin.cs
using JKMP.Core.Logging;
using Serilog;

public class MyPlugin : JKMP.Core.Plugins.Plugin
{
    private static readonly ILogger Logger = LogManager.CreateLogger<MyPlugin>();

    public MyPlugin()
    {
        Logger.Info("Hello world!");
    }
}
```

### 2. Temporary logger
Mainly used for logging messages that are temporary and not meant to be included with the released plugin.

It is just a static readonly ```ILogger``` called ```LogManager.TempLogger```.

:::caution
Refrain from including this in a release as it would be difficult to locate the source of the message.
:::

```csharp title=MyPlugin.cs
using JKMP.Core.Logging;
using Serilog;

public class MyPlugin : JKMP.Core.Plugins.Plugin
{
    public MyPlugin()
    {
        LogManager.TempLogger.Info("Hello world!");
    }
}
```

## Log configuration
If you want to change the format of the output message, or change the minimum visible logging level, you can do so by modifying the ```LogConfig.json``` file located in the ```JKMP``` directory.

The documentation for the template format can be [found here](https://github.com/serilog/serilog/wiki/Formatting-Output).

The default log configuration ignores verbose messages. If you want to show verbose messages, you can do so by changing ```MinimumLogLevel``` to ```Verbose```.

:::note
Changing the log configuration only affects your installation. Therefore changing it is only useful for development purposes.
:::
