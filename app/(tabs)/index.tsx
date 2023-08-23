import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useRouter } from "expo-router";

interface Barcode {
  type: string;
  data: string;
}

export default function Scanner() {
  const router = useRouter();

  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: Barcode) => {
    setScanned(true);
    router.push({ pathname: "/product", params: { code: data } });
    setScanned(false);
  };

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const openLibrary = () => {
    alert("open library to pick a picture");
  };

  const toogleFlashLight = () => {
    alert("toogle flash light");
  };

  const setBarcode = () => {
    alert("set a hard barcode");
  };

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        barCodeTypes={[
          BarCodeScanner.Constants.BarCodeType.qr,
          BarCodeScanner.Constants.BarCodeType.ean13,
        ]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      ></BarCodeScanner>

      <View style={styles.extraArea}>
        <TouchableOpacity
          onPress={() => {
            openLibrary();
          }}
        >
          <MaterialIcons
            name="image"
            size={sizeExtraButtons}
            style={styles.extraButtons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBarcode();
          }}
        >
          <MaterialIcons
            name="code"
            size={sizeExtraButtons}
            style={styles.extraButtons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toogleFlashLight();
          }}
        >
          <MaterialIcons
            name="flash-auto"
            size={sizeExtraButtons}
            style={styles.extraButtons}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const sizeExtraButtons = 30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  extraArea: {
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#f2f4f7",
    opacity: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
    height: "7%",
    alignSelf: "center",
    borderRadius: 10,
  },
  extraButtons: {
    color: "black",
  },
});
