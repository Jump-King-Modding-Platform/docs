---
title: Plugin Configuration
sidebar_position: 5
---

## Introduction
If you want customizable options for your plugin, you can register a config using the ```Configs``` property on the ```Plugin``` class.

By default users will be able to change the config from the ```JKMP\Config\<YourPluginName>``` directory.

You can also create a configuration menu from the config so that users can edit the config in game.

## Examples
### Simple config
```csharp title="MyPlugin.cs"
public class MyPlugin : JKMP.Core.Plugins.Plugin
{
    class MyConfig
    {
        public int MyInt { get; set; } = 1;
        public string MyString { get; set; }
        public Dictionary<string, string> MyDictionary { get; set; } = new();
    }

    public override void Initialize()
    {
        // Load config (or create a new one)
        // In a real plugin you probably want to
        // catch potential IO and deserialization exceptions.
        var myConfig = Configs.Load<MyConfig>("MyConfig");
        /* myConfig =
        {
            myInt = 1,
            myString = null,
            myDictionary = {}
        }
        */

        // Modify config and save new values
        myConfig.MyInt = 2;
        Configs.SaveConfig(myConfig, "MyConfig");

        // Reload config for testing purposes
        myConfig = Configs.Load<MyConfig>("MyConfig");
        /* myConfig =
        {
            myInt = 2,
            myString = null,
            myDictionary = {}
        }*/
    }
}
```

### Config with in-game menu
```csharp title="MyPlugin.cs"
using JKMP.Core.Configuration.Attributes;
using JKMP.Core.Configuration.UI;

public class MyPlugin : JKMP.Core.Plugins.Plugin
{
    class MyConfig
    {
        [SliderField(MinValue = 0, MaxValue = 100, StepSize = 10)]
        public int MyInt { get; set; } = 50;

        [TextField]
        public string MyString { get; set; } = "";
    }

    public override void Initialize()
    {
        // Load config (or create a new one)
        // In a real plugin you probably want to
        // catch potential IO and deserialization exceptions.
        var myConfig = Configs.Load<MyConfig>("MyConfig");
        /* myConfig =
        {
            myInt = 50,
            myString = null
        }
        */

        // Create config menu
        IConfigMenu menu = Configs.CreateConfigMenu<MyConfig>(
            title: "My Config",

            // A file path
            // No extension assumes .json
            // Note that the config is always serialized
            // to json regardless of the extension
            source: "MyConfig"
        );

        // When values are changed in-game they are automatically saved.

        // If you want to do something when a property changes
        // you can do it like this:
        menu.OnPropertyChanged += (sender, args) =>
        {
            switch args.PropertyName
            {
                case nameof(MyConfig.MyInt):
                {
                    // Do something when MyInt changes

                    // Access new value either from args.Value
                    LogManager.TempLogger.Info($"MyInt changed to {args.Value}");

                    // Or by accessing the property from the menu directly.
                    LogManager.TempLogger.Info($"MyInt changed to {menu.Values.MyInt}");
                    break;
                }
            }
        }

        // Alternatively you can use custom getters/setters
        // on the config class and handle it in the class itself.
}
```

## Available config value type attributes
These are the available built-in field type attributes:
- SliderFieldAttribute
- TextFieldAttribute
- CheckBoxFieldAttribute

They should be fairly self-explanatory. Use intellisense to see the available properties.

## Implementing a custom field renderer
If you want to implement a custom field renderer, you can do so by following these steps:

1. Create a class that inherits from ```SettingsOptionAttribute```.
2. Add the following attributes to the class: ```SettingsOptionsCreatorAttribute```, and optionally ```AttributeUsageAttribute``` with validOn set to ```AttributeTargets.Property```.
   * The SettingsOptionsCreatorAttribute takes a type parameter. It should be the type of the ```ConfigPropertyCreator``` which we'll be implementing next.
3. Create a class that inherits from ```ConfigPropertyCreator<T>```. The T should be the type of the attribute you created in step 1.
  1. Implement the ```SupportedTypes``` property. It should return a collection of property types that the creator supports.
  2. Implement the ```CreateField``` method. It should return an ```IMenuItem``` that represents the config value. Make sure to read the intellisense if you're unsure about the method parameters.
  3. When the value is changed you should invoke the ```base.ValueChanged``` action and pass the new value. The new value will be automatically converted to the property's type for simple value types such as ```int``` and ```double``` etc.

Here is the implementation of the slider as an example:

```csharp
using JKMP.Core.Configuration.Attributes;
using JKMP.Core.Configuration.Attributes.PropertyCreators;
using JKMP.Core.Configuration.UI;

/// <summary>
/// A menu field that is used to display a slider. Supported property types are <see cref="float"/> and <see cref="int"/>
/// Note that the underlying slider value is always a <see cref="float"/>.
/// </summary>
[SettingsOptionCreator(typeof(SliderFieldCreator))]
[AttributeUsage(AttributeTargets.Property)]
public sealed class SliderFieldAttribute : SettingsOptionAttribute
{
    /// <summary>
    /// The minimum value of the slider. 0 by default.
    /// </summary>
    public float MinValue { get; set; } = 0;

    /// <summary>
    /// The maximum value of the slider. 1 by default.
    /// </summary>
    public float MaxValue { get; set; } = 1;

    /// <summary>
    /// The amount to increase or decrease the slider value by when the user presses the left or right arrow keys. 0.1 by default.
    /// </summary>
    public float StepSize { get; set; } = 0.1f;
}

internal class SliderFieldCreator : ConfigPropertyCreator<SliderFieldAttribute>
{
    public override ICollection<Type> SupportedTypes => new List<Type>
    {
        typeof(float),
        typeof(int)
    };

    public override IMenuItem CreateField(object config, string fieldName, PropertyInfo propertyInfo, SliderFieldAttribute attribute, List<IDrawable> drawables)
    {
        var result = new SliderField(fieldName, (float)Convert.ChangeType(propertyInfo.GetValue(config), TypeCode.Single), attribute.MinValue, attribute.MaxValue, attribute.StepSize);
        result.ValueChanged += val =>
        {
            ValueChanged?.Invoke(val);
        };
        return result;
    }
}
```

The slider menu item implementation has been omitted from the example to keep it short and in scope. If you want to see the source for it you can [find it here](https://github.com/Jump-King-Modding-Platform/JKMP.Core/blob/main/JKMP.Core/UI/MenuFields/SliderField.cs).
