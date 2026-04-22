import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "../src/styles/HomeStyle";
import newsData from "../src/data/newsData";
import { News } from "../src/types/News";

const categoryColor: Record<string, string> = {
  Teknologi: "#185FA5",
  Olahraga:  "#3B6D11",
  Ekonomi:   "#854F0B",
  Iklim:     "#0F6E56",
  Kreatif:   "#993356",
};

const accentColor: Record<string, string> = {
  Teknologi: "#185FA5",
  Olahraga:  "#639922",
  Ekonomi:   "#BA7517",
  Iklim:     "#1D9E75",
  Kreatif:   "#D4537E",
};

export default function Home() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const isMobile = width < 500;
  const isLandscape = width > height;
  const isHorizontal = !isMobile || isLandscape;
  const isWeb = width >= 768;

  const handlePress = (item: News) => {
    router.push({
      pathname: "/detail",
      params: {
        id: item.id,
        title: item.title,
        content: item.content,
        image: item.image,
        author: item.author,
        date: item.date,
      },
    });
  };

  const renderWebCard = (item: News) => {
    const color = accentColor[item.category] ?? "#185FA5";
    const badgeBg = categoryColor[item.category] ?? "#185FA5";

    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => handlePress(item)}
        style={[styles.webCard, { borderTopColor: color }]}
      >
        
        <View style={{ width: "100%", height: 160, overflow: "hidden" }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.webCardBody}>
          <View style={[styles.badge, { backgroundColor: badgeBg }]}>
            <Text style={styles.badgeText}>{item.category}</Text>
          </View>
          <Text style={styles.webCardTitle}>{item.title}</Text>
          <Text style={styles.meta}>{item.author} • {item.date}</Text>
          <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMobileCard = ({ item }: { item: News }) => {
    const color = accentColor[item.category] ?? "#185FA5";
    const badgeBg = categoryColor[item.category] ?? "#185FA5";

    return (
      <TouchableOpacity
        onPress={() => handlePress(item)}
        style={[
          styles.mobileCard,
          {
            flexDirection: isHorizontal ? "row" : "column",
            borderLeftColor: color,
          },
        ]}
      >
        <View
          style={{
            width: isHorizontal ? 110 : "100%",
            height: isHorizontal ? 110 : 180,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.mobileCardBody}>
          <View style={[styles.badge, { backgroundColor: badgeBg }]}>
            <Text style={styles.badgeText}>{item.category}</Text>
          </View>
          <Text style={styles.mobileCardTitle}>{item.title}</Text>
          <Text style={styles.meta}>{item.author} • {item.date}</Text>
          <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderWebGrid = () => {
    const rows: News[][] = [];
    for (let i = 0; i < newsData.length; i += 2) {
      rows.push(newsData.slice(i, i + 2));
    }

    return (
      <View style={styles.gridContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.gridRow}>
            {row.map((item) => renderWebCard(item))}
            {row.length === 1 && <View style={styles.gridCardEmpty} />}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NewsID</Text>
        <Text style={styles.headerSub}>Berita terkini untuk Anda</Text>
      </View>

      {isWeb ? (
        <ScrollView>{renderWebGrid()}</ScrollView>
      ) : (
        <FlatList
          data={newsData}
          renderItem={renderMobileCard}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      )}
    </View>
  );
}