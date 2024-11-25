
import { useFonts } from "expo-font";
import "react-native-reanimated";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const ScreenHeight = Dimensions.get("screen").height;

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      {/*=================== Header  =================*/}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={styles.headerTxt}>BYKEA</Text>
        <MaterialIcons name="add-call" size={24} color="black" />
      </View>

      {/*=================== Banner Image View  =================*/}
      <View style={styles.bannerImageView}>
        <Image
          style={styles.bannerImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s",
          }}
        />
      </View>

      {/*===================Info View  =================*/}

      <View style={styles.infoView}>
        <MaterialIcons name="message" size={24} color="green" />
        <Text style={{fontSize:32, color:"grey"}}>|</Text>
        <MaterialCommunityIcons name="currency-rupee" size={24} color="green" />
        
     
      </View>

      {/*=================== Bottom Container  =================*/}

      <View style={styles.bottomContainer}>

        {/* 1 */}

        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#C5E0FF"}/>
          <Card title={"Ride"} icon={"directions-car"} bgColor={"#C7FF89"}/>
        </View>

        {/* 2 */}        

        <View style={styles.row}>
        <Card title={"Delivery"} icon={"delivery-dining"} bgColor={"#FFD1AA"}/>
        <Card title={"Mobiles"} icon={"mobile-friendly"} bgColor={"#F4BCFF"}/>
        </View>

      {/* 3 */}
        <View style={styles.row}>
        <Card title={"Shops"} icon={"shopping-basket"} bgColor={"#86BEFF"}/>
          <Card title={"Rentals"} icon={"car-rental"} bgColor={"#FFF798"}/>
        </View>
      
      </View>
    </View>
  );
}


const Card =({bgColor, icon ,title} :{
  bgColor: string,
  icon: any,
  title: string,
})=>{
  return(
    <View style={[styles.card ,{backgroundColor:bgColor}]}>
      <Text style={{textAlign:"right"}}>{title}</Text>
      <MaterialIcons name={icon} size={60} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'skyblue',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
  header: {
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bannerImageView: {
    height: ScreenHeight / 4,
    backgroundColor: "#BEC3C1",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bannerImage: {
    height: "86%",
    borderRadius: 12,
  },
  infoView: {
    height: 46,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 4,
    marginTop: -20,
    marginHorizontal: 20,
    borderRadius: 12,
  },

  bottomContainer: {
    flex: 1,
    // backgroundColor:"orange",
    margin: 20,
    gap: 15,
  },
  row: {
    flex: 1,

    flexDirection: "row",
    gap: 15,
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding:10,
    justifyContent:"space-between"

  },
});
