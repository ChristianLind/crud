import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookingEntity } from "../entitites/bookingEntity";
import EditScreen from "../screens/EditScreen";
import ListScreen from "../screens/ListScreen";

export type StackMain = {
    List: undefined;
    Edit: { booking: BookingEntity };
};

const Stack = createNativeStackNavigator<StackMain>();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
    )
}