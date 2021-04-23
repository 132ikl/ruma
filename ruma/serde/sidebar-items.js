initSidebarItems({"derive":[["AsRefStr",""],["DeserializeFromCowStr",""],["DisplayAsRefStr",""],["FromString",""],["Outgoing","Derive the `Outgoing` trait, possibly generating an ‘Incoming’ version of the struct this derive macro is used on. Specifically, if no lifetime variables are used on any of the fields of the struct, this simple implementation will be generated:"],["SerializeAsRefStr",""],["StringEnum","Shorthand for the derives `AsRefStr`, `FromString`, `DisplayAsRefStr`, `SerializeAsRefStr` and `DeserializeFromCowStr`."]],"enum":[["CanonicalJsonError","The set of possible errors when serializing to canonical JSON."],["CanonicalJsonValue",""]],"fn":[["btreemap_int_or_string_to_int_values","Take a BTreeMap with values of either an integer number or a string and deserialize those to integer numbers."],["default_true","Simply returns `true`."],["deserialize_cow_str",""],["empty_string_as_none","Serde deserialization decorator to map empty Strings to None, and forward non-empty Strings to the Deserialize implementation for T. Useful for the typical “A room with an X event with an absent, null, or empty Y field should be treated the same as a room with no such event.” formulation in the spec."],["int_or_string_to_int","Take either an integer number or a string and deserialize to an integer number."],["is_default","Check whether a value is equal to its default value."],["is_empty","Check whether a value is empty."],["is_true","Simply dereferences the given bool."],["none_as_empty_string","Serde serializiation decorator to map None to an empty String, and forward Somes to the Serialize implemention for T."],["to_canonical_json_string","Returns a canonical JSON string according to Matrix specification."],["to_canonical_value","Fallible conversion from any value that impl’s `Serialize` to a `CanonicalJsonValue`."],["try_from_json_map","Fallible conversion from a `serde_json::Map` to a `CanonicalJsonObject`."]],"mod":[["can_be_empty",""],["duration","De-/serialization functions for `std::time::Duration` objects"],["json_string","De-/serialization functions to and from json strings, allows the type to be used as a query string."],["single_element_seq","De-/serialization functions to and from single element sequences."],["test","Helpers for tests"],["time","De-/serialization functions for `std::time::SystemTime` objects"],["urlencoded","`x-www-form-urlencoded` meets Serde"],["vec_as_map_of_empty","Serde serialization and deserialization functions that map a `Vec<T>` to a `BTreeMap<T, Empty>`."]],"struct":[["Raw","A wrapper around `Box<RawValue>`, to be used in place of any type in the Matrix endpoint definition to allow request and response types to contain that said type represented by the generic argument `Ev`."]],"trait":[["CanBeEmpty",""],["Outgoing","A type that can be sent to another party that understands the matrix protocol."]],"type":[["CanonicalJsonObject","The inner type of `CanonicalJsonValue::Object`."]]});