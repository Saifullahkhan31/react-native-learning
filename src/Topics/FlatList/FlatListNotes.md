Scenario 2: Adding Items to the Beginning
Item keys are MUCH better:
javascript// Before: [42, 17, 89]
// After:  [99, 42, 17, 89]  // Added 99 at start

// Index keys: "0", "1", "2", "3"
// React thinks:
// - Position 0: was 42, now 99 (DIFFERENT - re-render!)
// - Position 1: was 17, now 42 (DIFFERENT - re-render!)  
// - Position 2: was 89, now 17 (DIFFERENT - re-render!)
// - Position 3: new item 89 (NEW - render!)
// Result: ALL 4 items re-render! ❌

// Item keys: "99", "42", "17", "89"  
// React thinks:
// - Key "42": same item, just moved position (DON'T re-render!)
// - Key "17": same item, just moved position (DON'T re-render!)
// - Key "89": same item, just moved position (DON'T re-render!)
// - Key "99": new item (render!)
// Result: Only 1 item renders! ✅

Best Practices:
Use Item Keys when:

Items have unique values (no duplicates)
You insert/delete from beginning/middle of list
List is large and performance matters
Items are complex objects with unique IDs

Use Index Keys when:

Items can have duplicates
You only add/remove from end of list
List is small and performance isn't critical
You don't have unique identifiers

1. Where do item and index come from?
React Native's FlatList automatically provides them!
javascriptkeyExtractor={(item, index) => index.toString()}
//            ↑      ↑
//            │      └─ FlatList gives you: 0, 1, 2, 3... (position in array)
//            └──────── FlatList gives you: actual data from your array
How FlatList Works Internally:
javascript// Your data
data={num} // [42, 17, 89]

// FlatList internally does something like:
num.forEach((arrayItem, arrayIndex) => {
    keyExtractor(arrayItem, arrayIndex)
    // Call 1: keyExtractor(42, 0)
    // Call 2: keyExtractor(17, 1)  
    // Call 3: keyExtractor(89, 2)
})

