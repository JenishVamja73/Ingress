
import { StyleSheet } from 'react-native';
const Style = StyleSheet.create({

  SwipeListView: {
    backgroundColor:"white",
    paddingHorizontal:10,
    paddingVertical:10,
    padding: "5%",
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: "1%",
    // height: "100%"
    

    


  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontWeight: "500",
    color: "black"
  },
  itemUrl: {
    fontSize: 16,
    color: 'blue',
  },
  editView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    // position: 'absolute',
    width: 80,
    height: "70%",
    backgroundColor: 'orange',
    left: 0,
    marginVertical:10


  },
  DeletButTON: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    // position: 'absolute',
    top: 0,
    width: 80,
    backgroundColor: 'red',
    right: 0,
    height:"70%",
    marginVertical:10

    
  },
  AddView: {
    position: 'absolute',
    bottom: "16%",
    right: 20,
  },
  AddButton: {
    backgroundColor: 'blue',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Style;
