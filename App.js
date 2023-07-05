import { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { styled, StyledProvider } from "@gluestack-style/react";

import { config } from "./gluestack-style.config";

const Box = styled(
  View,
  {
    _text: {
      color: "white",
      _dark: {
        color: "white",
      },
      _light: {
        color: "black",
      },
    },
    _dark: {
      bg: "black",
    },
    _light: {
      bg: "white",
    },
    variants: {
      variant: {
        solid: {
          backgroundColor: "pink",
          _ios: {
            _dark: {
              shadowColor: "white",
            },
            _light: {
              shadowColor: "black",
            },
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowRadius: 5,
            shadowOpacity: 0.5,
          },
          _android: {
            elevation: 5,
          },
        },
        subtle: {
          bg: "$primary300",
        },
      },
    },
  },
  {
    descendantStyle: ["_text"],
  }
);

const StyledText = styled(
  Text,
  {
    alignSelf: "center",
  },
  { ancestorStyle: ["_text"] }
);

const StyledStatusBar = styled(StatusBar, {
  _dark: {
    props: {
      barStyle: "light-content",
    },
  },
  _light: {
    props: {
      barStyle: "dark-content",
    },
  },
});

export default function App() {
  const [colorMode, setColorMode] = useState(useColorScheme());

  return (
    <StyledProvider config={config} colorMode={colorMode}>
      <StyledStatusBar />
      <Box flex={1}>
        <Pressable
          style={styles.button}
          onPress={() => setColorMode((c) => (c === "dark" ? "light" : "dark"))}
        >
          <StyledText>{colorMode.toUpperCase()}</StyledText>
        </Pressable>
        <StyledText>@gluestack-style/react</StyledText>

        <Box variant="solid" h={100} w={100} marginLeft={100} marginTop={50} />
      </Box>
    </StyledProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    paddingTop: 60,
    alignSelf: "flex-end",
  },
});
