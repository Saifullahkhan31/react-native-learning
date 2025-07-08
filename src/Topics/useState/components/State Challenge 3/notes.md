## Notes for the Color picker:

Understanding map function better

`{colors.map((color) => (
  // JSX for each color button here
))}`

* The .map() function iterates over the colors array.

* For each color in the array, it returns a TouchableOpacity component (a button).

* This means each color string is "mapped" to a separate touchable button in the UI.

* The result is a list (array) of buttons—one for each color—that React renders.

___

### Here’s a clearer breakdown:

The TouchableOpacity component is rendered once for each color in the colors array.

Each TouchableOpacity has its own onPress handler that captures the specific color it represents.

When you tap a particular color’s TouchableOpacity, only that color’s onPress function runs.

This function calls selectedColor(color) with the captured color value.

Calling selectedColor updates the state variable color to that specific color.

React then re-renders the component, and the background color changes to the selected color.