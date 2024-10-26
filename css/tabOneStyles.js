import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "white",
    padding: 20,
    marginTop: -30,
    position: "relative",
  },
  containerProfile: {
    position: "absolute",
    top: 45,
    right: 20,
    height: 40,
    width: 40,
    backgroundColor: "grey",
    borderRadius: 50,
    justifyContent: "flex-end",
  },
  containerText: {
    marginTop: 40,
  },
  containerSearch: {
    alignItems: "center",
    width: "100%",
  },
  containerMost: {
    border: "solid",
  },
  containerFlat: {},
  // -----------------------------------------------------------------------------
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: "navy",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  searchInput: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "hsl(214 0% 85%)",
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 1,
  },
  most: {
    fontWeight: 900,
  },
  item: {
    borderRadius: 5,
    width: "46%",
  },
  row: {
    justifyContent: "space-between",
  },
  separatorOne: {
    height: 30,
  },
  titleOne: {
    fontWeight: 900,
    fontSize: 20,
  },
  placeOne: {
    fontWeight: 900,
    color: "gray",
  },
});
