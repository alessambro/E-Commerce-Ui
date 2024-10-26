import { Text, View } from "@/components/Themed";
import styles from "../../css/tabOneStyles.js";
import { Image, TextInput, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Koh Samui",
    place: "Thailand",
    src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPGc50fEB_d3mQDyxbWkNSvcMVjCItVYJ7h7KIfbubEfGf5aZu",
  },
  {
    id: "2",
    title: "Perth",
    place: "Australia",
    src: "https://scontent.fdgt1-1.fna.fbcdn.net/v/t1.6435-9/100792882_2810138729095847_3605109717635956736_n.jpg?stp=dst-jpg_tt6&_nc_cat=104&cb=99be929b-6bbdfb60&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEzeWN02HqoRCWwO90v86RAv9-WUmt429a_35ZSa3jb1nGbY8fWIbRr2DhBuwz3IlV0AwaZEj6R21_Ficndex3x&_nc_ohc=7nQkoBjL7UIQ7kNvgHzKHfl&_nc_ht=scontent.fdgt1-1.fna&_nc_gid=A17Dwi_MvwPh84w_xYPd5LA&oh=00_AYAEmwLmy6si6ZDrFEo0XBE-5hXgNckZV3qpW2AN2tIfbg&oe=673B601F",
  },
  {
    id: "3",
    title: "New York",
    place: "US",
    src: "https://img.freepik.com/premium-photo/glass-building-with-blue-sky-reflecting_1028938-179613.jpg?w=740",
  },
  {
    id: "4",
    title: "Santorini",
    place: "Greece",
    src: "https://p1.pxfuel.com/preview/543/575/783/greece-santorini-greek-island-blue.jpg",
  },
];
type ItemProps = { title: string; src: string; place: string; id: string };

const Item = ({ id, title, src, place }: ItemProps) => {
  // Map each item ID to its destination screen in the `(pages)` folder.
  const destinationPath = `/(pages)/destination_${id}`;

  return (
    <Link href={destinationPath} asChild>
      <Pressable style={styles.item}>
        <Image
          source={{ uri: src }}
          style={{
            height: 200,
            borderRadius: 5,
            width: "100%",
            resizeMode: "cover",
          }}
        />
        <Text style={styles.titleOne}>{title}</Text>
        <Text style={styles.placeOne}>{place}</Text>
      </Pressable>
    </Link>
  );
};

const renderSeparator = () => <View style={styles.separatorOne} />;

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProfile}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 50,
          }}
          source={{
            uri: "https://scontent.fdgt1-1.fna.fbcdn.net/v/t39.30808-1/438039395_1656637918494277_2288106748818787926_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&cb=99be929b-6bbdfb60&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEe3eLrMMB9bpD-RPZYGWB_EBrE0AVye8sQGsTQBXJ7y7GNlpQ5MnGX-W7YWr3fQTwf1mXgmWysNgmYnbNkWs7b&_nc_ohc=iDdRYU2HBRgQ7kNvgEWD_1X&_nc_ht=scontent.fdgt1-1.fna&_nc_gid=AewimrhlLxQHaMyNtMmHRhp&oh=00_AYCheOwUg_ohS_T_GvS5Hi5wkBphITYk4prevH3j3FXMDw&oe=6719C0F2",
          }}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>
          Find your {"\n"}
          perfect place {"\n"}
          to travel.
        </Text>
      </View>
      <View style={styles.containerSearch}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Entypo
          name="magnifying-glass"
          size={20}
          color="#999"
          style={styles.icon}
        />
      </View>
      <View style={styles.containerMost}>
        <Text style={styles.most}>Most popular places</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            src={item.src}
            place={item.place}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item) => item.id}
        style={styles.containerFlat}
      />
    </SafeAreaView>
  );
}
