import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    container: {
        width: '50%',
        height: '80vh',
        float: 'right',
        display: 'inline-block',
        borderRadius: 5,
        backgroundColor: '#DEE4E7'
    },
    listContainer: {
        maxHeight: '100%',  
        overflowY: 'scroll',
        scrollbarWidth: "none",
        '&::-webkit-scrollbar':{
            display: 'none'
        }
    },
    appBar: {
        borderRadius: 15,
        margin: '5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        color: 'black',
        position: 'relative',
        left: '20px',
        padding: '5px'
    },
    button: {
        justifyContent: 'right',
        alignItems: 'right',   
        margin: '5px',
    },
    gridItem: {
        color: 'black',
        margin: '15px 5px'
    },
    videochatBar: {
        borderRadius: 15,
        margin: '5px',
        padding: '5px',
        float: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        width: '49%',
        color: 'black',
        backgroundColor: '#E0E0E0'
    },
    timeBar: {
        borderRadius: 5,
        margin: '10px 0',
        float: 'right',
        display: 'inline',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '15vh',
        backgroundColor: 'white'
    }
}));