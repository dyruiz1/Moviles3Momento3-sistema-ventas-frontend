import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styleheader = StyleSheet.create({
  container: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff7eb",
    border: "solid 1px",
  },
  htext: {
    fontSize: 40,
    fontWeight: "bold",
    color: "green",
  },
});
const styleapp = StyleSheet.create({
  containers: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});

const styleform = StyleSheet.create({
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    width: "50%",
  },
});

const styleInputRow = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    margin: "10px",
    justifyContent: "space-between",
  },
  input: {
    padding: "5px",
  },
  errorMessage: {
    color: "red",
  },
});

const formStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  inputs: {
    fontSize: 18,
    height: 55,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "600",
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    width: "50%",
    borderColor: "#000",
    backgroundColor: "white",
    paddingRight: 12,
    textAlign: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#CFD8D3",
    padding: 15,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  },
  buttonDelete: {
    borderWidth: 1,
    borderColor: "#ff0000",
    backgroundColor: "#ff0000",
    padding: 5,
    borderRadius: 7,
  },
  buttonDeleteText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#ffffff",
    backgroundColor: "#ff0000"
  },
  errorText: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 18,
    color: "#0A0B0B",
  }
});

const tablaStyles = StyleSheet.create({
  tabla: {
    marginTop: "40px"
  },
  container: {
    border: "2px solid",
    borderRadius: "5px",
  },
  titulos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#a9a9a9",
    marginBottom: "5px",
    border: "2px solid",
    borderRadius: "5px",
    gap: "15px",
    textAlign:"left"
  },
  titulo: {
    backgroundColor: " #980081",
    color: " #ffffff",
    textAlign: "left",
    padding: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "10px",
    gap: "15px",
    backgroundColor: "#b9c9fe",
    borderBottomWidth: "1px",
    textAlign:"left"
    
  },
});

export {
  styleheader,
  styleapp,
  styleform,
  styleInputRow,
  formStyles,
  tablaStyles,
  styles,
};
