import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    backgroundColor: "#185FA5",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  backButton: {
    padding: 10,
    margin: -10,
  },
  backText: {
    color: "#fff",
    fontSize: 22,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  imageWrapper: {
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  body: {
    width: "100%",
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    color: "#111",
    lineHeight: 30,
    marginBottom: 6,
  },
  meta: {
    fontSize: 12,
    color: "gray",
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    color: "#333",
  },
});

export default styles;