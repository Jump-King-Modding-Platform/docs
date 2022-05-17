---
title: Input
sidebar_position: 6
---

## Introduction
If you want to read input from the player you should use the ```Plugin.Input``` property.

It brings the following advantages over using ```KeyboardState.GetState()``` etc:
- Allows you to either subscribe to events or poll the action every update, depending on how your plugin's workflow is set up.
- Allows the player to rebind the action to any key they want.
- Prevents multiple actions from being bound to the same key, unless the player explicitly allows it.
- Allows the player to bind the action to multiple keys at once, and even mixing keyboard/mouse/gamepad buttons.
- Plugins can add support for new input devices, and the player can bind your actions to them without you having to explicitly add support for them.

## Examples
### Creating an action
```csharp title="MyPlugin.cs"
public class MyPlugin : JKMP.Core.Plugins.Plugin
{
    private InputManager.ActionInfo myAction;

    public override void CreateInputActions()
    {
        myAction = Input.CreateActionWithName(
            name: "MyAction", // Unique name for the action. Only has to be unique in the scope of the plugin.
            uiName: "My Action", // The name that will be displayed in the UI
            onlyGameInput: true, // Only allow this action to be triggered when the game is unpaused
            defaultKeys: "a", "xpad-a" // Default binds to 'A' keyboard key and 'X' button (xbox layout) on controller
        );
    }
}
```

### Using an action
```csharp
// Either bind the action to a callback:
Input.BindAction(myAction, MyActionCallback);

void MyActionCallback(bool pressed)
{
    // Pressed = true if the action was just pressed, false if it was just released.
}

// Or poll the action every update:
if (myAction.IsPressed)
{
    // Do something
}
```
