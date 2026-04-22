import React from "react";
import {
  Text,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import styles from "../src/styles/DetailStyle";

export default function Detail() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.header, {
        paddingVertical: isWeb ? 14 : 10,
        paddingTop: isWeb ? 14 : 44,
      }]}>
        {isWeb && (
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.backButton}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>NewsID</Text>
      </View>

      <ScrollView>
        <View style={{ height: isWeb ? 24 : 8 }} />

        <View style={[styles.imageWrapper, { height: isWeb ? 420 : 260 }]}>
          <Image
            source={{ uri: params.image as string }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={[styles.body, {
          padding: isWeb ? 48 : 16,
          paddingTop: isWeb ? 32 : 16,
        }]}>
          <Text style={[styles.title, { fontSize: isWeb ? 28 : 20 }]}>
            {params.title}
          </Text>
          <Text style={styles.meta}>
            {params.author} • {params.date}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.content}>{params.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}