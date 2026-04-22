import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    backgroundColor: "#185FA5",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerSub: {
    color: "#cce0f5",
    fontSize: 12,
  },

  gridContainer: {
    padding: 12,
  },
  gridRow: {
    flexDirection: "row",
  },
  gridCardEmpty: {
    flex: 1,
    margin: 8,
  },

  webCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    borderTopWidth: 4,
    elevation: 2,
  },
  webCardImage: {
    width: "100%",
    height: 160,
  },
  webCardBody: {
    padding: 14,
  },
  webCardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111",
    lineHeight: 22,
    marginBottom: 6,
  },

  mobileCard: {
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    borderLeftWidth: 4,
    elevation: 2,
  },
  mobileCardBody: {
    padding: 12,
    flex: 1,
  },
  mobileCardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 4,
    lineHeight: 22,
  },

  badge: {
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
  meta: {
    fontSize: 11,
    color: "#999",
    marginBottom: 6,
  },
  desc: {
    fontSize: 13,
    color: "#555",
    lineHeight: 19,
  },
});

export default styles;