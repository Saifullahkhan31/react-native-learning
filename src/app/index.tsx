import { View, Text, FlatList, SafeAreaView } from "react-native";
import AgeComponent from "../Topics/Styling/components/ageComponent";
import IntroToComponents from "../Topics/IntroToComponents/app";
import ButtonComponent from "../Topics/Buttons/components/buttonComponent";
import ImgComponent from "../Topics/Images/components/imgComponent";
import HobbyComponent from "../Topics/Styling/components/hobbyComponent";
import Challenge2Button from "../Topics/Buttons/components/challenge2Button";
import CarComponent from "../Topics/Images/components/CarComponent";
import ListData from "../Topics/KeyExtraction/components/ListData";
import ArrayOfObject from "../Topics/Styling/components/ArrayOfObject";
import FlatListChallenge from "../Topics/FlatList/components/FlatListChallenge";
import FlatListChallenge2 from "../Topics/FlatList/components/FlatListChallenge2";
import NameComponent from "../Topics/IntroToComponents/components/NameComponent";
import ProductComponent from "../Topics/PROPS/components/ProductComponent";
import Props from "../Topics/PROPS/app";
import ConditionalRendering from "../Topics/Conditional Rendering/app";
import UseState from "../Topics/useState/app";
import UseEffect from "../Topics/useEffect/app";
import UseReducer from "../Topics/useReducer/app";
import UseContext from "../Topics/useContext/app";
import { UserProvider } from "../Topics/useContext/context/UserContext";
import ComponentA from "../Topics/useContext/components/ComponentA";
import { NumberProvider } from "../Topics/useContext/challenge/Context/RandomNumberContext";
import RandomNumber from "../Topics/useContext/challenge/Components/RandomNumber";
import AddRandomNumber from "../Topics/useContext/challenge/Components/AddRandomNumber";
import CustomHooks from "../Topics/CustomHooks/app";
import { Link } from "expo-router";

const Index = () => {

  return <View>
      {/* <NameComponent/>
      <AgeComponent/>
      <UserName/>
      <FavCourse/>
      <ButtonComponent/>
      <ImgComponent/>
      <NameComponent/>
      <HobbyComponent/>
      <Challenge2Button/>
      <CarComponent/>
      <ListData/>
     <ArrayOfObject/>
     <FlatListChallenge/>
     <FlatListChallenge2/>
     <Props/>
     <ConditionalRendering/>*/}
     {/* <UseState/> */}
     {/* <UseEffect/> */}
     {/* <UseReducer/> */}

     {/* <UserProvider>
       <ComponentA/>
     </UserProvider> */}

     {/* <NumberProvider>
      <SafeAreaView>
        <RandomNumber/>
        <AddRandomNumber/>
      </SafeAreaView>
     </NumberProvider> */}

      {/* <CustomHooks/> */}

      <Text>Index Screen</Text>
      <Link href="/Home"> Go to Home Screen </Link>
      <Link href="/About"> Go to About Screen </Link>
      <Link href="/Contact"> Go to Contact Screen </Link>

  </View>

}

export default Index;