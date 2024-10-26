import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function destination() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={{
            uri: `https://www.santoriniexperts.com/wp-content/uploads/Where-to-stay-in-Santorini.jpg`,
          }}
          style={{
            height: `100%`,
          }}
        />
        <View style={styles.back}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#fff"
            style={styles.icon}
          />
        </View>
        <View style={styles.down}>
          <AntDesign
            name="download"
            size={30}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.containerWhite}>
        <View style={styles.textOne}>
          <Text
            style={{
              color: "#5761d7",
              fontWeight: "900",
              fontSize: 50,
            }}
          >
            Santorini
          </Text>
          <View>
            <AntDesign name="star" size={20} color="yellow" style={{}} />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "grey",
              fontWeight: "900",
            }}
          >
            <Entypo
              name="location-pin"
              size={20}
              color="#000"
              style={{
                borderWidth: 1,
              }}
            />
            Greek
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              color: "grey",
              fontWeight: "900",
              fontSize: 17,
            }}
          >
            Santorini is one of the Cyclades Islands in the Aegean Sea. It was
            devastated by a volcanic eruption in th 16th Century BC, forever
            shaping its rugged landscape.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerImg: {
    height: 400,
    backgroundColor: `blue`,
    position: "relative",
  },
  containerWhite: {
    marginTop: -60,
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "white",
    padding: 20,
  },
  // ---------------------------------------------------
  icon: {},
  back: {
    position: "absolute",
    left: 15,
    top: 15,
  },
  down: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  textOne: {},
});
