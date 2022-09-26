import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    video: {
      width: '100%', 
      height: 'auto'
    },
    gridContainer: {
      borderRadius: 15,
      display: 'inline',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    videoContainer: {
      width: '100%',
      margin: 'auto',
    },
    paper: {
      padding: '5px',
      margin: '5px',
      width: '48%',
      height: '45vh',
      float: 'left',
      backgroundColor: '#BDBDBD'
    },
    name: {
      textAlign: 'center'
    },
    paper2: {
      padding: '10px',
      borderRadius: 15,
      marginTop: '10px',
      marginBottom: '10px',
      width: '47%',
      height: '40vh',
      display: 'inline-block',
      justifyContent: 'space-between',
      backgroundColor: 'white'
    },
    
}));