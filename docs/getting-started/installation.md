---
sidebar_position: 0
description: Installing the required tools
title: Installation
---

To start modding Jump King using JKMP you'll need an IDE such as Visual Studio or Rider. You can also use any other editor in combination with .NET SDK and .NET Framework 4.6.2 developer pack.

Below you'll find some instructions for each of them, use the one you prefer.

:::note
If you're only looking to replace existing content in the game or from another mod, or generally make a mod that doesn't require any code, you can skip to [Project Setup](./project-setup).
:::

## Choosing an IDE

### Option 1: Visual Studio
:::tip
Recommended for beginners.
:::

[Download here](https://visualstudio.microsoft.com/downloads)

When installing make sure to include support for desktop development for C# and .NET Framework 4.6.2.

### Option 2: Rider (requires purchase)
[Download here](https://www.jetbrains.com/rider)

It might also require the installation of .NET SDK when targeting older .NET Framework versions such as 4.6.2. If you're having problems with compiling it's worth a try.

### Option 3: Other (using .NET SDK)
[Download here](https://dotnet.microsoft.com/en-us/download)

This option generally supports any editor since you'll be doing the compiling from a terminal instead. This guide won't be going into the details of that so only use this option if you know what you're doing.

Note that you'll need both the x86 and x64 version if your operating system is 64-bit.

In addition you'll also need [.NET Framework 4.6.2 Developer Pack](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net462-developer-pack-offline-installer).
