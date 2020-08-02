import React, { useState, useEffect }  from 'react';
import {connect} from 'react-redux';
import {getData} from '../../reducer/data/selectors'
import {Operation as DataOperation} from '../../reducer/data/data';
import {createAPI} from '../../api';

const api = createAPI();

const App = ({increase, data}) => {
    const redirect = () => {
        fetch(`https://api.instagram.com/oauth/authorize?client_id=1576420319199590&redirect_uri=https://github.com/VolokhovOleg/&scope=user_profile,user_media&response_type=code/`)
            .then((response) => {
                console.log(response);
                window.open(response.url);
            })
            .catch((error) => {
                throw error;
            });
    };
    return <>
      <h1>Нажато раз {data}</h1>
      <button onClick={()=> {
          redirect();
      }} type={"button"}>Нажми</button>
    </>;
};

const mapStateToProps = (state) => ({
    data: getData(state),
});

const mapDispatchToProps = (dispatch) => ({
    increase() {
        dispatch(DataOperation.setData());
    }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
