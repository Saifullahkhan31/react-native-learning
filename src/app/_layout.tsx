import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="Index"
            options={{
                headerTitle: 'Home Page',
                headerStyle: {
                    backgroundColor: 'teal'
                }
            }} /><Stack.Screen name="About"
            options={{
                headerTitle: 'About Page',
                headerStyle: {
                    backgroundColor: 'teal'
                }
            }} />
            <Stack.Screen name="users/[id]" />
        </Stack>
    )
}

export default RootLayout