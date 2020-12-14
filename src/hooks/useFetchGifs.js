import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });    
            })
    }, [ category ]); //se añade la dependencia por si category cambia

    return state; //{ data:[], loading: true}
}
