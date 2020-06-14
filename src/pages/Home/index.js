import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  TextHeader,
  StatusBar,
  CalloutContent,
  CalloutText,
} from "./styles";

import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { View, Text } from "react-native";
import api from "../../services/api";

function Home() {
  const [region, setRegion] = useState(null);
  const [states9, setStates9] = useState("");
  const [states1, setStates1] = useState("");
  const [states2, setStates2] = useState("");
  const [states3, setStates3] = useState("");
  const [states4, setStates4] = useState("");
  const [states5, setStates5] = useState("");
  const [states6, setStates6] = useState("");
  const [states7, setStates7] = useState("");
  const [states8, setStates8] = useState("");
  

  useEffect(() => {
    async function loadPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: false,
        });

        const { latitude, longitude } = coords;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 10.0,
          longitudeDelta: 20.0,
        });
      }
    }
    loadPosition();
  }, [region]);

  function handleRegionChanged(region) {
    setRegion(region);
  }

  async function loadsCasesInformation() {
    const response9 = await api.get(`/brazil/uf/BA`);
    setStates9(response9.data);
    
    const response1 = await api.get(`/brazil/uf/SP`);
    setStates1(response1.data);

    const response2 = await api.get(`/brazil/uf/RJ`);
    setStates2(response2.data);

    const response3 = await api.get(`/brazil/uf/CE`);
    setStates3(response3.data);

    const response4 = await api.get(`/brazil/uf/PA`);
    setStates4(response4.data);

    const response5 = await api.get(`/brazil/uf/MA`);
    setStates5(response5.data);

    const response6 = await api.get(`/brazil/uf/AM`);
    setStates6(response6.data);

    const response7 = await api.get(`/brazil/uf/PE`);
    setStates7(response7.data);

    const response8 = await api.get(`/brazil/uf/PE`);
    setStates8(response8.data);

    
  }
  

  loadsCasesInformation();
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#0f7778" />
      <Header>
        <TextHeader>COVID - 19</TextHeader>
        <TextHeader>#ficaemcasa</TextHeader>
      </Header>

      <MapView
        onRegionChangeComplete={handleRegionChanged}
        style={{ flex: 1 }}
        initialRegion={region}
      >
        <Marker
          coordinate={{
            latitude: -23.5489,
            longitude: -46.638823,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states1.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states1.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states1.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states1.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude: -22.9035,
            longitude: -43.2096,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states2.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states2.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states2.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states2.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -3.71839,
            longitude:  -38.54343,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states3.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states3.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states3.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states3.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -4.7493933,
            longitude:  -52.8973006,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states4.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states4.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states4.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states4.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -2.53073,
            longitude:  -44.3068,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states5.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states5.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states5.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states5.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -4.479925,
            longitude:  -63.5185396,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states6.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states6.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states6.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states6.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -8.4116316,
            longitude:  -37.5919699,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states7.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states7.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states7.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states7.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -8.4116316,
            longitude:  -37.5919699,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states8.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states8.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states8.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states8.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:  -12.285251,
            longitude:  -41.9294776,
          }}
        >
          <Callout>
            <View style={{ backgroundColor: "#f0f0f5", width: 300 }}>
              <Text style={{ color: "#333333" }}>{states9.state}</Text>
              <Text style={{ color: "#333333" }}>
                Casos Confirmados: {states9.cases}
              </Text>
              <Text style={{ color: "#333333" }}>Mortes: {states9.deaths}</Text>
              <Text style={{ color: "#333333" }}>
                Atualizado no dia: {states9.datetime}
              </Text>
            </View>
            
          </Callout>
        </Marker>
      </MapView>
    </Container>
  );
}
export default Home;
