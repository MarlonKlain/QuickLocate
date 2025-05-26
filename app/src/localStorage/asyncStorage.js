import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeLocally(key, value) {
  try {
    await AsyncStorage.setItem(toString(key), value);
  } catch (error) {
    throw new Error(`Failed to store locally. Error: ${error.message}`);
  }
}

export async function getLocalData(key) {
  try {
    const localData = await AsyncStorage.getItem(toString(key));
    return localData;
  } catch (error) {
    throw new Error(`Failed get the local data. Error: ${error.message}`);
  }
}

export async function deleteLocalData(key) {
  try {
    await AsyncStorage.removeItem(toString(key));
  } catch (error) {
    throw new Error(`Failed delete local data. Error: ${error.message}`);
  }
}
