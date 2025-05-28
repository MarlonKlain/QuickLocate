import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Stores a value in AsyncStorage under the specified key.
 *
 * @async
 * @param {string} key - The key under which the value will be stored.
 * @param {string} value - The value to store.
 * @throws {Error} Throws an error if storing the value fails.
 */
export async function storeLocally(key, value) {
  try {
    await AsyncStorage.setItem(toString(key), value);
  } catch (error) {
    throw new Error(`Failed to store locally. Error: ${error.message}`);
  }
}

/**
 * Retrieves data from AsyncStorage for the given key.
 *
 * @async
 * @param {string} key - The key to retrieve the data for.
 * @returns {Promise<string|null>} The data associated with the key, or null if not found.
 * @throws {Error} If there is an error retrieving the data.
 */
export async function getLocalData(key) {
  try {
    const localData = await AsyncStorage.getItem(toString(key));
    return localData;
  } catch (error) {
    throw new Error(`Failed get the local data. Error: ${error.message}`);
  }
}

/**
 * Deletes a value from AsyncStorage for the specified key.
 *
 * @async
 * @param {string} key - The key whose value should be removed from local storage.
 * @throws {Error} Throws an error if the deletion fails.
 */
export async function deleteLocalData(key) {
  try {
    await AsyncStorage.removeItem(toString(key));
  } catch (error) {
    throw new Error(`Failed delete local data. Error: ${error.message}`);
  }
}
