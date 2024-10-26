import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const DATA = [
  {
    id: "1",
    src: "data:image/jpeg;base64,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",
  },
  {
    id: "2",
    src: "data:image/jpeg;base64,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",
  },
  {
    id: "3",
    src: "data:image/jpeg;base64,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",
  },
  {
    id: "4",
    src: "https://greekreporter.com/wp-content/uploads/2021/06/pina-caldera-residence-santorini-cr-website-1024x683.jpg",
  },
  {
    id: "5",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0-Tq388DrlIokcjoGOaUObNav12B5AIScQ&s",
  },
  {
    id: "6",
    src: "https://www.danavillas.com/wp-content/uploads/2017/10/Infinity-Suite-Santorini-13-scaled.jpg",
  },
];

type ItemProps = { id: string; src: string };

const Item = ({ id, src }: ItemProps) => {
  return (
    <Image
      source={{ uri: src }}
      style={{
        height: 100,
        borderRadius: 5,
        width: 100,
        resizeMode: "cover",
      }}
    />
  );
};

export default function destination() {
  const sizeIcon = 15;
  const path = "//index";
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
        <Link href={path} style={styles.back} asChild>
          <Pressable>
            <View>
              <AntDesign
                name="arrowleft"
                size={30}
                color="#fff"
                style={styles.icon}
              />
            </View>
          </Pressable>
        </Link>
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
          <View
            style={{
              position: "absolute",
              flex: 1,
              flexDirection: "row",
              top: "30%",
              right: 5,
              backgroundColor: "#a3a3a3",
              borderRadius: 5,
              width: 80,
              justifyContent: "center",
              alignItems: "center",
              elevation: 20,
              height: 20,
              gap: 2,
            }}
          >
            <FontAwesome
              name="star"
              size={sizeIcon}
              color="yellow"
              style={{
                elevation: 10,
              }}
            />
            <FontAwesome
              name="star"
              size={sizeIcon}
              color="yellow"
              style={{
                elevation: 10,
              }}
            />
            <FontAwesome
              name="star"
              size={sizeIcon}
              color="yellow"
              style={{
                elevation: 10,
              }}
            />
            <FontAwesome
              name="star"
              size={sizeIcon}
              color="yellow"
              style={{
                elevation: 10,
              }}
            />
            <FontAwesome
              name="star"
              size={sizeIcon}
              color="grey"
              style={{
                elevation: 10,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: "55%",
              right: 5,
            }}
          >
            <Text
              style={{
                color: "gray",
              }}
            >
              33 reviews
            </Text>
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
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "900",
              fontSize: 20,
            }}
          >
            Photos
          </Text>
          <View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => <Item id={item.id} src={item.src} />}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginTop: 10,
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
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
    elevation: 20,
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
  textOne: {
    position: "relative",
  },
});
